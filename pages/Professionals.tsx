import React from 'react';
import Button from '../components/Button';
import { Microscope } from 'lucide-react';

const Professionals: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 text-center">
      <div className="bg-primary-50 p-6 rounded-full text-primary-600 mb-6">
        <Microscope size={48} />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">للمختصين والباحثين</h1>
      <p className="text-gray-500 max-w-lg mb-8 leading-relaxed">
        نعمل حالياً على تطوير بوابة خاصة للمختصين تتيح الوصول إلى أدوات تحليل متقدمة، وبيانات إحصائية، والمساهمة في تأكيد النتائج لتحسين دقة النموذج.
      </p>
      <Button disabled>قريباً</Button>
    </div>
  );
};

export default Professionals;