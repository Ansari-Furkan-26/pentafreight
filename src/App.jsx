import { Routes, Route } from 'react-router-dom';
import Navbar from './components/global/Navbar.jsx';
import Footer from './components/global/Footer.jsx';
import BrandSidebar from './components/global/BrandSidebar.jsx';
import ScrollToTop from './components/global/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Industries from './pages/Industries.jsx';
import PentaKuhl from './pages/PentaKuhl.jsx';
import Placeholder from './pages/Placeholder.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-ink">
      <ScrollToTop />
      <Navbar />
      <BrandSidebar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Placeholder title="About" />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<Placeholder title="Industry" />} />
          <Route path="/pentakuhl" element={<PentaKuhl />} />
          <Route path="/services" element={<Placeholder title="Services" />} />
          <Route path="/services/:slug" element={<Placeholder title="Service Detail" />} />
          <Route path="/news" element={<Placeholder title="News" />} />
          <Route path="/careers" element={<Placeholder title="Careers" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
          <Route path="*" element={<Placeholder title="Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
