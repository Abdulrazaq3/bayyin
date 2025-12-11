import React from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import { AlertOctagon, CheckCircle, RefreshCw, Home as HomeIcon, ChevronRight, Share2, Printer } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import RiskIndicator from '../components/RiskIndicator';
import { AnalysisResult } from '../types';

interface LocationState {
  result: AnalysisResult;
  imagePreview: string;
}

const Result: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  if (!state || !state.result) {
    return <Navigate to="/screening" replace />;
  }

  const { result, imagePreview } = state;

  return (
    <div className="py-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="mb-8 flex items-center justify-between">
           <Link to="/screening" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors bg-white/50 px-4 py-2 rounded-full border border-gray-100">
             <ChevronRight className="w-4 h-4 me-1" />
             العودة للفحص
           </Link>
           <div className="flex gap-2">
             <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-white rounded-full transition-all" title="طباعة">
               <Printer size={20} />
             </button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Result Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="text-center pb-12 overflow-hidden relative shadow-2xl shadow-blue-900/5 border-white/80">
               {/* Decorative background gradient */}
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-blue-500 to-indigo-500"></div>
               
              <h1 className="text-3xl font-bold text-gray-900 mb-2 mt-2">نتيجة الفحص المبدئي</h1>
              <p className="text-gray-500 text-sm mb-10">تم تحليل الصورة بنجاح بواسطة نموذج بيّن الذكي</p>
              
              <RiskIndicator level={result.riskLevel} probability={result.probability} />
              
              <div className="mt-10 p-6 bg-white/60 backdrop-blur rounded-2xl border border-gray-100 text-right mx-auto max-w-lg shadow-inner">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                  تفسير النتيجة:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {result.message}
                </p>
              </div>
            </Card>

            {/* Disclaimer Box */}
            <div className="bg-orange-50/80 backdrop-blur border-s-4 border-orange-400 p-6 rounded-r-xl shadow-sm flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="flex-shrink-0 mt-1">
                  <AlertOctagon className="h-6 w-6 text-orange-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-orange-900 mb-1">تذكير هام</h3>
                  <p className="text-sm text-orange-800 leading-relaxed">
                      هذه النتيجة لا تغني عن زيارة الطبيب. اضطراب طيف التوحد يتم تشخيصه عبر مجموعة شاملة من الاختبارات السلوكية والطبية التي لا يمكن للذكاء الاصطناعي تغطيتها بالكامل بمفرده.
                  </p>
                </div>
            </div>
          </div>

          {/* Sidebar / Actions Column */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            
            {/* Image Preview */}
            <Card className="p-4 border-white/60">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">الصورة المحللة</h3>
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 aspect-square shadow-inner relative group">
                <img src={imagePreview} alt="Analyzed" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Face Scanning Overlay Effect */}
                <div className="absolute inset-0 border-2 border-primary-400/0 group-hover:border-primary-400/50 transition-all duration-500 rounded-2xl"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary-400/50 blur-sm transform -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-pulse"></div>
              </div>
            </Card>

            {/* Guidance / Next Steps */}
            <Card className="bg-white/80">
              <h3 className="text-lg font-bold text-gray-800 mb-5 pb-2 border-b border-gray-100">الخطوات المقترحة</h3>
              <ul className="space-y-4">
                {result.riskLevel === 'low' ? (
                  <li className="flex items-start gap-3 p-2 hover:bg-green-50 rounded-lg transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">استمر في مراقبة نمو الطفل وتطوره الاجتماعي واللغوي.</span>
                  </li>
                ) : (
                  <>
                    <li className="flex items-start gap-3 p-2 hover:bg-primary-50 rounded-lg transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">سجّل ملاحظاتك حول سلوك الطفل اليومي.</span>
                    </li>
                    <li className="flex items-start gap-3 p-2 hover:bg-primary-50 rounded-lg transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">قم بحجز موعد مع طبيب أطفال أو مختص في النمو والسلوك.</span>
                    </li>
                  </>
                )}
                <li className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">اقرأ المزيد في قسم <Link to="/learn-asd" className="text-primary-600 font-bold hover:underline">التوعية</Link>.</span>
                </li>
              </ul>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
               <Link to="/screening" className="w-full">
                <Button variant="outline" className="w-full justify-between group">
                  <span className="flex items-center"><RefreshCw className="w-4 h-4 me-2 group-hover:rotate-180 transition-transform" /> فحص صورة أخرى</span>
                </Button>
               </Link>
               <Link to="/" className="w-full">
                <Button variant="secondary" className="w-full justify-between">
                  <span className="flex items-center"><HomeIcon className="w-4 h-4 me-2" /> العودة للرئيسية</span>
                </Button>
               </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;