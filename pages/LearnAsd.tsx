import React from 'react';
import Card from '../components/Card';
import { BookOpen, AlertCircle, HeartHandshake, Star } from 'lucide-react';

const LearnAsd: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <span className="inline-block p-3 rounded-full bg-primary-100 text-primary-600 mb-4">
             <BookOpen size={32} />
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">التوعية عن اضطراب طيف التوحد (ASD)</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">دليلك المختصر لفهم التوحد وأهمية الكشف المبكر لتحسين حياة الطفل</p>
        </div>

        <div className="space-y-10">
          
          <div className="reveal transition-all delay-100">
            <Card className="border-l-4 border-l-primary-500 relative overflow-hidden" hoverEffect>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -mr-10 -mt-10 opacity-50 pointer-events-none"></div>
              <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                <div className="p-4 bg-primary-50 rounded-2xl text-primary-600 shadow-sm flex-shrink-0">
                  <BookOpen size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">ما هو اضطراب طيف التوحّد؟</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    اضطراب طيف التوحد (ASD) هو حالة عصبية نموية تؤثر على كيفية تواصل الفرد وتفاعله مع الآخرين، وكيفية إدراكه للعالم. يُسمى "طيفاً" لأن الأعراض وشدتها تختلف بشكل كبير من طفل لآخر. لا يوجد "شكل واحد" للتوحد، فكل طفل هو حالة فريدة.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="reveal transition-all delay-200">
            <Card className="border-l-4 border-l-orange-500 relative overflow-hidden" hoverEffect>
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-10 -mt-10 opacity-50 pointer-events-none"></div>
              <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                <div className="p-4 bg-orange-50 rounded-2xl text-orange-600 shadow-sm flex-shrink-0">
                  <AlertCircle size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">لماذا يُعد الكشف المبكر مهماً؟</h2>
                  <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                    دماغ الطفل في سنواته الأولى يتمتع بمرونة عالية (Neuroplasticity). التدخل المبكر (العلاج السلوكي، النطق، المهارات الاجتماعية) في هذه المرحلة يمكن أن يحدث فرقاً جذرياً في تطور الطفل.
                  </p>
                  <div className="bg-orange-50/50 rounded-xl p-4">
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-center gap-2 text-gray-700 font-medium"><Star className="w-4 h-4 text-orange-400 fill-orange-400" /> تحسين التواصل</li>
                      <li className="flex items-center gap-2 text-gray-700 font-medium"><Star className="w-4 h-4 text-orange-400 fill-orange-400" /> تقليل السلوكيات الصعبة</li>
                      <li className="flex items-center gap-2 text-gray-700 font-medium"><Star className="w-4 h-4 text-orange-400 fill-orange-400" /> رفع الاستقلالية</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal transition-all delay-300">
            <Card className="bg-white/60">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">مؤشرات اجتماعية شائعة</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <span className="w-2 h-2 mt-2 bg-primary-400 rounded-full flex-shrink-0"></span>
                  قلة التواصل البصري (لا ينظر في العين مباشرة).
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <span className="w-2 h-2 mt-2 bg-primary-400 rounded-full flex-shrink-0"></span>
                  عدم الاستجابة عند المناداة بالاسم.
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <span className="w-2 h-2 mt-2 bg-primary-400 rounded-full flex-shrink-0"></span>
                  تفضيل اللعب منفرداً وعدم المشاركة.
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <span className="w-2 h-2 mt-2 bg-primary-400 rounded-full flex-shrink-0"></span>
                  صعوبة في فهم مشاعر الآخرين.
                </li>
              </ul>
            </Card>

            <Card className="bg-white/60">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">مؤشرات سلوكية وتواصلية</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <span className="w-2 h-2 mt-2 bg-indigo-400 rounded-full flex-shrink-0"></span>
                  تأخر في الكلام أو تكرار الكلمات (Echolalia).
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <span className="w-2 h-2 mt-2 bg-indigo-400 rounded-full flex-shrink-0"></span>
                  حركات تكرارية (رفرفة اليدين، الدوران).
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <span className="w-2 h-2 mt-2 bg-indigo-400 rounded-full flex-shrink-0"></span>
                  التعلق الشديد بالروتين ورفض التغيير.
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <span className="w-2 h-2 mt-2 bg-indigo-400 rounded-full flex-shrink-0"></span>
                  حساسية مفرطة للأضواء أو الأصوات.
                </li>
              </ul>
            </Card>
          </div>

          <div className="reveal transition-all delay-500">
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                    <HeartHandshake size={40} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">هل لاحظت أياً من هذه العلامات؟</h3>
                    <p className="text-blue-100 text-lg leading-relaxed opacity-90">
                    لا داعي للذعر. وجود علامة أو علامتين لا يعني بالضرورة وجود توحد. الخطوة الأفضل هي استشارة طبيب أطفال أو استخدام أداتنا كخطوة أولية للاطمئنان.
                    </p>
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LearnAsd;