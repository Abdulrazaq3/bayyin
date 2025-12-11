import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 pt-16 pb-10 relative mt-auto">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src="https://i.postimg.cc/L4z7Bfp2/mbk-r.png" 
                alt="Bayyin Logo" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="font-bold text-2xl text-gray-800">بيّن</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              مشروع تقني يهدف إلى تسخير الذكاء الاصطناعي للكشف المبكر والدعم في حالات طيف التوحد، من أجل مستقبل أفضل لأطفالنا.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-primary-600 hover:ps-1 transition-all">عن المشروع</Link></li>
              <li><Link to="/screening" className="hover:text-primary-600 hover:ps-1 transition-all">ابدأ الفحص</Link></li>
              <li><Link to="/professionals" className="hover:text-primary-600 hover:ps-1 transition-all">للمختصين</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">الدعم والمساعدة</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/faq" className="hover:text-primary-600 hover:ps-1 transition-all">الأسئلة الشائعة</Link></li>
              <li><Link to="/learn-asd" className="hover:text-primary-600 hover:ps-1 transition-all">مصادر التعلم</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-600 hover:ps-1 transition-all">سياسة الخصوصية</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">تواصل معنا</h4>
            <div className="flex flex-col gap-4">
               <a href="mailto:support@bayyin.app" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors p-3 rounded-xl bg-gray-50 hover:bg-primary-50 group">
                 <Mail size={18} className="text-gray-400 group-hover:text-primary-500" />
                 <span className="text-sm font-medium">support@bayyin.app</span>
               </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} بيّن. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-1.5 px-4 py-2 bg-gray-50 rounded-full">
            <span>صُنع بـ</span>
            <Heart size={14} className="text-red-400 fill-red-400 animate-pulse" />
            <span>من أجل أطفالنا</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;