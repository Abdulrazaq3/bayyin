import React, { useRef, useState } from 'react';
import { UploadCloud, X, Image as ImageIcon, AlertCircle, CheckCircle2 } from 'lucide-react';
import Button from './Button';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  selectedFile: File | null;
  error?: string | null;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, selectedFile, error }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('يرجى تحميل ملف صورة صالح (JPG, PNG).');
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onFileSelect(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const clearFile = () => {
    setPreviewUrl(null);
    onFileSelect(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="w-full group">
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleChange}
      />

      {!selectedFile ? (
        <div
          className={`
            relative overflow-hidden rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300
            border-2 border-dashed
            ${dragActive 
              ? 'border-primary-500 bg-primary-50 scale-[1.02]' 
              : 'border-gray-300 bg-white hover:border-primary-400 hover:bg-blue-50/50'
            }
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          {/* Animated Background Ring */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className={`relative z-10 transition-transform duration-300 ${dragActive ? 'scale-110' : 'group-hover:scale-110'}`}>
            <div className="w-20 h-20 bg-gradient-to-tr from-primary-100 to-white rounded-full flex items-center justify-center mb-6 shadow-md mx-auto">
              <UploadCloud className="w-10 h-10 text-primary-600 animate-pulse-slow" />
            </div>
          </div>
          
          <h3 className="relative z-10 text-xl font-bold text-gray-800 mb-2">اضغط للرفع أو اسحب الصورة هنا</h3>
          <p className="relative z-10 text-sm text-gray-500">يقبل ملفات JPG و PNG بحد أقصى 5 ميجابايت</p>
          
          <div className="relative z-10 mt-6 flex gap-4 justify-center">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-500">وجه واضح</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-500">إضاءة جيدة</span>
          </div>
        </div>
      ) : (
        <div className="relative rounded-2xl border border-primary-100 overflow-hidden bg-white shadow-lg animate-fade-in-up">
          <button
            onClick={clearFile}
            className="absolute top-3 left-3 z-10 p-2 bg-white/90 backdrop-blur rounded-full shadow-md hover:bg-red-50 text-gray-500 hover:text-red-500 transition-all duration-200 hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col md:flex-row items-center p-6 gap-8">
            <div className="relative w-40 h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-md ring-4 ring-white">
              {previewUrl ? (
                <>
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl"></div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <ImageIcon className="w-10 h-10 text-gray-400" />
                </div>
              )}
            </div>
            
            <div className="flex-1 text-center md:text-right space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                 <h3 className="text-lg font-bold text-gray-800 truncate">{selectedFile.name}</h3>
                 <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-md">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
              
              {error ? (
                <div className="flex items-center justify-center md:justify-start text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                  <AlertCircle className="w-5 h-5 me-2" />
                  {error}
                </div>
              ) : (
                <div className="flex items-center justify-center md:justify-start text-green-600 text-sm bg-green-50 p-3 rounded-lg border border-green-100">
                  <CheckCircle2 className="w-5 h-5 me-2" />
                  <span>الصورة جاهزة للتحليل</span>
                </div>
              )}

              <p className="text-xs text-gray-400">تأكد من أن وجه الطفل ظاهر بالكامل للمساعدة في دقة النتائج.</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex-shrink-0">
               <Button variant="outline" size="sm" onClick={() => inputRef.current?.click()} className="hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200">
                 تغيير الصورة
               </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;