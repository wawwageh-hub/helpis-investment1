import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InvestmentSection } from './components/InvestmentSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ShopSection } from './components/ShopSection';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <InvestmentSection />
        <SolutionsSection />
        <ContactSection />
        <ShopSection />
      </main>
      <Footer />
      <Toaster position="top-center" expand={true} richColors />
    </div>
  );
}

export default App;
