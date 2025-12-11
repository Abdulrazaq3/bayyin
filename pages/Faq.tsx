import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "هل يعطي بيّن تشخيصاً طبياً نهائياً؟",
    answer: "لا، بيّن هو أداة مساعدة للفحص المبكر (Screening Tool) تعطي مؤشرات احتمالية فقط. التشخيص النهائي للتوحد عملية معقدة تتطلب فريقاً طبياً وتقييماً سريرياً شاملاً."
  },
  {
    question: "هل استخدام الموقع مجاني؟",
    answer: "نعم، الأداة متاحة حالياً بشكل مجاني لجميع المستخدمين، كجزء من مبادرتنا لخدمة المجتمع."
  },
  {
    question: "هل يتم حفظ صور طفلي في النظام؟",
    answer: "افتراضياً، لا يتم حفظ أي صور. يتم تحليل الصورة وحذفها فوراً من الذاكرة المؤقتة. الحفظ يتم فقط إذا قمت باختيار خيار 'الموافقة على المشاركة في البحث' لدعم تحسين النظام."
  },
  {
    question: "ما مدى دقة النتائج؟",
    answer: "تعتمد الدقة على جودة الصورة المدخلة ونموذج الذكاء الاصطناعي المستخدم. ومع ذلك، لا توجد أداة آلية دقيقة بنسبة 100%. النتائج هي للتوجيه وليست حقيقة مطلقة."
  },
  {
    question: "ما هو العمر المناسب لاستخدام الأداة؟",
    answer: "الأداة مصممة بشكل أساسي للأطفال الصغار (ما بين 18 شهراً إلى 6 سنوات)، حيث تظهر السمات الشكلية والسلوكية بشكل أكثر وضوحاً لأغراض الكشف المبكر."
  }
];

const AccordionItem: React.FC<{ item: FaqItem; delay: number }> = ({ item, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-xl overflow-hidden mb-4 reveal transition-all duration-500" style={{ transitionDelay: `${delay}ms` }}>
      <button
        className={`w-full px-6 py-5 text-right flex justify-between items-center focus:outline-none transition-colors duration-300 ${isOpen ? 'bg-primary-50/50' : 'hover:bg-gray-50/50'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-primary-700' : 'text-gray-800'}`}>{item.question}</span>
        <div className={`p-1.5 rounded-full transition-all duration-300 ${isOpen ? 'bg-primary-200 rotate-180 text-primary-700' : 'bg-gray-100 text-gray-500'}`}>
             <ChevronDown size={20} />
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'max-h-48 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        } overflow-hidden`}
      >
        <div className="px-6 text-gray-600 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-tr from-primary-100 to-white rounded-2xl shadow-sm text-primary-600 mb-6">
            <HelpCircle size={40} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">الأسئلة الشائعة</h1>
          <p className="text-xl text-gray-500">إجابات على أكثر الاستفسارات شيوعاً حول بيّن</p>
        </div>

        <div className="space-y-2">
          {faqData.map((item, index) => (
            <AccordionItem key={index} item={item} delay={index * 100} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;