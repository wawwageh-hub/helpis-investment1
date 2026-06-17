import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 mb-16 justify-items-end">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.jpg.jpeg" className="h-14 w-auto rounded-xl border-4 border-yellow-400 p-1" alt="Helpis Logo" />
            </div>
            <p className="text-muted-foreground max-w-sm font-light leading-relaxed">
              Pioneering the next generation of electric vehicle infrastructure. We combine luxury design with sustainable technology to create investment-grade charging solutions.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#vision" className="hover:text-primary transition-colors">Our Vision</a></li>
              <li><a href="#investment" className="hover:text-primary transition-colors">Investment</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Solutions</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-1">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="/shop" className="hover:text-primary transition-colors">EV Chargers</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-xs text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} HELPIS EV INFRASTRUCTURE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
