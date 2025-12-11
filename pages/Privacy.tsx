import React from 'react';
import Card from '../components/Card';

const Privacy: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">سياسة الخصوصية والاستخدام</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">1. مقدمة</h2>
              <p className="leading-relaxed">
                نحن في "بيّن" نأخذ خصوصية بياناتك وأطفالك على محمل الجد. توضح هذه الوثيقة كيفية تعاملنا مع البيانات والصور التي يتم استخدامها في الموقع. استخدامك للموقع يعني موافقتك الضمنية على هذه السياسة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">2. الصور والبيانات الحيوية</h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>
                  <strong>المعالجة الفورية:</strong> يتم معالجة الصور المرفوعة بشكل فوري لاستخراج السمات اللازمة للتحليل.
                </li>
                <li>
                  <strong>عدم التخزين الافتراضي:</strong> لا نقوم بتخزين الصور في قواعد بياناتنا بشكل دائم، بل يتم حذفها تلقائياً بعد انتهاء جلسة التحليل، ما لم يوافق المستخدم صراحة على غير ذلك.
                </li>
                <li>
                  <strong>الموافقة البحثية:</strong> في حال اختيارك خيار "المساهمة في البحث"، يتم حفظ الصورة بشكل مشفر ومجهول الهوية (بدون أسماء أو بيانات اتصال) لأغراض البحث العلمي وتحسين خوارزميات الذكاء الاصطناعي فقط.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">3. طبيعة الخدمة (إخلاء المسؤولية)</h2>
              <p className="leading-relaxed bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                موقع "بيّن" ليس عيادة طبية ولا يقدّم خدمات تشخيصية طبية. النتائج الصادرة هي احتمالات إحصائية مبنية على نماذج حاسوبية. لا تتحمل إدارة الموقع أي مسؤولية قانونية أو طبية تجاه القرارات المتخذة بناءً على هذه النتائج. المرجع الأول والأخير هو الطبيب المختص.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">4. أمن المعلومات</h2>
              <p className="leading-relaxed">
                نستخدم بروتوكولات تشفير قياسية (SSL/TLS) لحماية البيانات أثناء انتقالها بين جهازك وخوادمنا. ومع ذلك، لا يمكن ضمان أمان الإنترنت بنسبة 100%.
              </p>
            </section>

             <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">5. اتصل بنا</h2>
              <p className="leading-relaxed">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر البريد الإلكتروني: privacy@bayyin.app
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;