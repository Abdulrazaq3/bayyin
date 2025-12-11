import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, ScanFace, FileText, Users, Lock, Baby, BrainCircuit, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-48 lg:pt-48 lg:pb-64 overflow-hidden">
        {/* Hero Background Content */}
        <div className="absolute inset-0 z-0">
             {/* Gradient Mesh is handled in Layout, but we can add specific hero blobs here */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/50 backdrop-blur border border-white/60 text-primary-600 text-sm font-bold shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              تقنية من أجل مستقبل أفضل
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-8 max-w-5xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            بيّن: أداة فحص مبكر داعمة <br className="hidden md:block"/>
            <span className="gradient-text">لاضطراب طيف التوحد</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
            نساعدك في الحصول على مؤشرات أولية مبنية على الذكاء الاصطناعي لتحليل السمات الوجهية للطفل، لتقديم الدعم والتوجيه المناسب في وقت مبكر.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
            <Link to="/screening">
              <Button size="lg" className="w-full sm:w-auto px-10 py-4 text-xl shadow-xl shadow-primary-500/20 group hover:shadow-primary-500/40">
                ابدأ الفحص الآن
                <ArrowLeft className="ms-2 w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/learn-asd">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto px-10 py-4 text-xl bg-white/80 backdrop-blur">
                اعرف أكثر عن التوحّد
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
           <ChevronDown className="w-8 h-8 text-primary-400" />
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-none overflow-hidden">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px] fill-white">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">كيف يعمل بيّن؟</h2>
            <p className="text-xl text-gray-500 max-w-xl mx-auto">خطوات بسيطة وسريعة للحصول على نتيجة فورية داعمة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="reveal transition-all duration-700 delay-100">
                <Card className="text-center p-10 h-full border-t-4 border-t-blue-400" hoverEffect>
                  <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner transform rotate-3 transition-transform hover:rotate-6">
                    <Upload size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">1. ارفع صورة الطفل</h3>
                  <p className="text-gray-500 leading-relaxed">قم برفع صورة واضحة لوجه الطفل (يفضل إضاءة جيدة ونظرة أمامية) عبر أداتنا الآمنة.</p>
                </Card>
            </div>

            {/* Step 2 */}
            <div className="reveal transition-all duration-700 delay-200">
                <Card className="text-center p-10 h-full border-t-4 border-t-indigo-400" hoverEffect>
                  <div className="w-20 h-20 bg-indigo-50 text-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner transform -rotate-2 transition-transform hover:-rotate-4">
                    <BrainCircuit size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">2. التحليل الذكي</h3>
                  <p className="text-gray-500 leading-relaxed">يقوم نموذج الذكاء الاصطناعي بتحليل السمات والمؤشرات الوجهية الدقيقة بناءً على بيانات علمية.</p>
                </Card>
            </div>

            {/* Step 3 */}
            <div className="reveal transition-all duration-700 delay-300">
                <Card className="text-center p-10 h-full border-t-4 border-t-emerald-400" hoverEffect>
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner transform rotate-3 transition-transform hover:rotate-6">
                    <FileText size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">3. النتيجة والتوجيه</h3>
                  <p className="text-gray-500 leading-relaxed">احصل على مؤشر احتمالية فوري مع نصائح وإرشادات للخطوات القادمة المناسبة.</p>
                </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience with Curve background */}
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white relative reveal">
         {/* Top Curve */}
         <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">لمن صُمّم هذا النظام؟</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <Users size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">أولياء الأمور</h3>
               <p className="text-gray-500 text-sm leading-relaxed">للاطمئنان الأولي والحصول على توجيه مبكر في حال وجود شكوك.</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center transform md:-translate-y-6">
               <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <ScanFace size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">المختصون</h3>
               <p className="text-gray-500 text-sm leading-relaxed">أداة مساعدة سريعة للفرز المبدئي قبل إجراء التشخيصات السريرية المعمقة.</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <Baby size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">الباحثون</h3>
               <p className="text-gray-500 text-sm leading-relaxed">لجمع البيانات (بموافقة المستخدم) وتحسين دقة نماذج الكشف المبكر.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Highlight */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 border border-white/50 reveal">
            <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-50 text-primary-600 rounded-full flex-shrink-0 shadow-inner">
              <Lock size={48} />
            </div>
            <div className="flex-1 text-center md:text-start">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">خصوصيتك أولويتنا</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                نحن نلتزم بأعلى معايير الخصوصية. الصور التي يتم رفعها للفحص لا تُخزّن في خوادمنا إلا إذا منحتنا موافقة صريحة للمساهمة في تحسين النظام.
              </p>
              <Link to="/privacy">
                <Button variant="outline" className="border-primary-200 text-primary-700 hover:bg-primary-50">اقرأ سياسة الخصوصية</Button>
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;