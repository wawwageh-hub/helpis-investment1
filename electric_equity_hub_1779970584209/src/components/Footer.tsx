import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-background py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
        {/* الجزء الشمال: اللوجو والكلام اللي تحته */}
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg.jpeg" className="h-10 w-auto rounded-lg border-2 border-yellow-400 p-0.5" alt="Helpis Logo" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pioneering the next generation of electric vehicle infrastructure. We combine luxury design with sustainable technology to create investment-grade charging solutions.
          </p>
        </div>

        {/* الجزء اليمين: القوائم جمب بعض بمسافة مريحة */}
        <div className="flex flex-row gap-16 md:gap-32 justify-start items-start min-w-max">
          
          {/* قسم Company */}
          <div className="flex flex-col gap-3 text-left min-w-[120px]">
            <h3 className="font-bold tracking-widest uppercase text-white text-sm">Company</h3>
            <a href="#vision" className="text-muted-foreground hover:text-primary transition-colors text-sm whitespace-nowrap">Our Vision</a>
            <a href="#investment" className="text-muted-foreground hover:text-primary transition-colors text-sm whitespace-nowrap">Investment</a>
            <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors text-sm whitespace-nowrap">Solutions</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm whitespace-nowrap">Contact</a>
          </div>

          {/* قسم Shop */}
          <div className="flex flex-col gap-3 text-left min-w-[120px]">
            <h3 className="font-bold tracking-widest uppercase text-white text-sm">Shop</h3>
            <a href="/shop" className="text-muted-foreground hover:text-primary transition-colors text-sm whitespace-nowrap">EV Chargers</a>
          </div>

        </div>

      </div>

      {/* حقوق النشر تحت خالص */}
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-white/5 text-center md:text-left">
        <p className="text-xs text-muted-foreground">
          &copy; 2026 HELPIS EV INFRASTRUCTURE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
