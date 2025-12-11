import React from 'react';
import { Target, ShieldCheck, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">عن مشروع بيّن</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            بيّن هي مبادرة تقنية طموحة تسعى لتوظيف أحدث تقنيات الذكاء الاصطناعي لخدمة المجتمع، وتحديداً في مجال الكشف المبكر عن اضطرابات النمو.
          </p>
        </div>

        <div className="space-y-16">
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-primary-50 p-4 rounded-xl text-primary-600 flex-shrink-0">
               <Target size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">المشكلة التي نعالجها</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                يواجه العديد من الآباء صعوبة في التعرف على العلامات المبكرة للتوحد، مما يؤدي إلى تأخر في التشخيص والتدخل. الدراسات تشير إلى أن التدخل المبكر يحسن بشكل كبير من جودة حياة الطفل وتطوره المستقبلي.
              </p>
              <p className="text-gray-600 leading-relaxed">
                "بيّن" يهدف إلى سد هذه الفجوة عبر توفير أداة سهلة الوصول، سريعة، ومجانية تعطي مؤشراً أولياً يدفع الآباء لاتخاذ الخطوة الصحيحة في الوقت المناسب.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-indigo-50 p-4 rounded-xl text-indigo-600 flex-shrink-0">
               <Cpu size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">كيف تعمل التقنية؟</h2>
              <p className="text-gray-600 leading-relaxed">
                يعتمد النظام على نماذج تعلم عميق (Deep Learning) مدربة على آلاف الصور لأطفال تم تشخيصهم وأطفال طبيعيين. يقوم النموذج بتحليل أنماط دقيقة في ملامح الوجه قد ترتبط باضطراب طيف التوحد، وهي أنماط قد لا تكون ملحوظة للعين البشرية غير الخبيرة.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-green-50 p-4 rounded-xl text-green-600 flex-shrink-0">
               <ShieldCheck size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا للمستقبل</h2>
              <p className="text-gray-600 leading-relaxed">
                نسعى لأن يكون "بيّن" المعيار الأول للفحص المنزلي الداعم، وأن نساهم في رفع الوعي المجتمعي وتقليل متوسط عمر التشخيص في العالم العربي، مما يتيح للأطفال فرصاً أفضل للنمو والاندماج.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;