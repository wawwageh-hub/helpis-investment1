import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-10'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<img src="/logo.jpg.jpeg" className="h-14 w-auto rounded-xl border-4 border-yellow-400 p-1" alt="Helpis Logo" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Vision', 'Investment', 'Solutions', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-white/5 p-6 md:hidden flex flex-col gap-6"
          >
            {['Vision', 'Investment', 'Solutions', 'Contact', 'Shop'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium tracking-widest uppercase"
              >
                {item}
              </a>
            ))}
            <Button className="w-full">Inquire Now</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
