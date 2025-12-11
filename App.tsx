import React from 'react';
import { HashRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Screening from './pages/Screening';
import Result from './pages/Result';
import About from './pages/About';
import LearnAsd from './pages/LearnAsd';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import Professionals from './pages/Professionals';

// Wrapper to handle scroll on route change (simulated since HashRouter doesn't support ScrollRestoration fully in v6 out of box nicely without data router, but we can do a simple effect component or just let it be standard)
const ScrollToTop = () => {
    const { pathname } = React.useMemo(() => ({ pathname: window.location.hash }), []);
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop /> 
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screening" element={<Screening />} />
          <Route path="/result" element={<Result />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn-asd" element={<LearnAsd />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/professionals" element={<Professionals />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;