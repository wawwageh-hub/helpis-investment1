import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InvestmentSection } from './components/InvestmentSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ShopSection } from './components/ShopSection';
import { Toaster } from '@/components/ui/sonner';

function Home() {
  return (
    <main>
      <Hero />
      <InvestmentSection />
      <SolutionsSection />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopSection />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" expand={true} richColors />
      </div>
    </BrowserRouter>
  );
}

export default App;
