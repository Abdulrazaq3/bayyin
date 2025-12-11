import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Scroll Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }); // Run on every render to catch new elements

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden relative">
      
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-[80px] animate-float"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-secondary-200/20 rounded-full blur-[60px] animate-float-delayed"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;