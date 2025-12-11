import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Info, Loader2 } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import FileUpload from '../components/FileUpload';
import { analyzeImage } from '../services/api';

const Screening: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (selectedFile: File | null) => {
    setFile(selectedFile);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError('يرجى اختيار صورة أولاً.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await analyzeImage(file, consent);
      // Navigate to result with state
      navigate('/result', { state: { result, imagePreview: URL.createObjectURL(file) } });
    } catch (err) {
      setError('حدث خطأ أثناء الاتصال بالخادم. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 reveal">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ابدأ الفحص</h1>
          <p className="text-lg text-gray-500">قم برفع صورة للطفل للحصول على مؤشر تحليلي فوري</p>
        </div>

        {/* Disclaimer Info Box */}
        <div className="glass-card bg-blue-50/60 border border-blue-100 rounded-2xl p-6 mb-10 flex items-start gap-4 reveal transition-all delay-100">
          <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
             <Info className="w-6 h-6" />
          </div>
          <p className="text-sm md:text-base text-blue-900 leading-relaxed pt-1">
            <strong>تنويه هام:</strong> هذه الأداة تقدّم فحصًا مبدئيًا داعمًا يعتمد على الذكاء الاصطناعي، 
            ولا تُعد بأي حال من الأحوال تشخيصًا طبيًا نهائياً. النتائج هي مجرد مؤشرات احتمالية. 
            لمزيد من الدقة والاطمئنان، يُرجى مراجعة طبيب مختص.
          </p>
        </div>

        <div className="reveal transition-all delay-200 relative">
          {/* Loading Overlay */}
          {loading && (
             <div className="absolute inset-0 z-20 bg-white/80 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center">
                <div className="relative">
                   <div className="w-20 h-20 border-4 border-primary-100 border-t-primary-500 rounded-full animate-spin"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Loader2 className="w-8 h-8 text-primary-600 animate-spin-slow" />
                   </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-800 animate-pulse">جاري تحليل الصورة...</h3>
                <p className="text-gray-500 mt-2">نستخدم الذكاء الاصطناعي لفحص الملامح</p>
             </div>
          )}

          <Card className="shadow-xl shadow-blue-100/50">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                 <span className="w-1.5 h-6 bg-primary-500 rounded-full"></span>
                 رفع الصورة
              </h2>
              <FileUpload 
                onFileSelect={handleFileSelect} 
                selectedFile={file}
                error={error}
              />
            </div>

            <div className="mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <label className="flex items-start gap-4 cursor-pointer">
                <div className="relative flex items-center h-6 mt-0.5">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 transition-all"
                  />
                </div>
                <div className="flex-1">
                  <span className="font-bold text-gray-900 block mb-1">المساهمة في البحث (اختياري)</span>
                  <p className="text-sm text-gray-500 leading-relaxed">أوافق على حفظ هذه الصورة في النظام بشكل مجهول لأغراض تحسين دقة النموذج والبحث العلمي.</p>
                </div>
              </label>
            </div>

            <div className="flex flex-col gap-4">
              <Button 
                size="lg" 
                className="w-full text-lg py-4 shadow-primary-500/20" 
                onClick={handleAnalyze}
                disabled={!file}
                isLoading={loading}
              >
                ابدأ التحليل
              </Button>
              {error && (
                <div className="flex items-center justify-center text-red-600 text-sm bg-red-50 p-3 rounded-lg animate-fade-in-up">
                  <AlertTriangle className="w-4 h-4 me-2" />
                  {error}
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Screening;