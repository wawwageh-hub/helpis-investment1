import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, TrendingUp, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="vision" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b9788d6e-d9ef-4a95-80ed-c43bbaa12c96/hero-charger-luxury-63a0857a-1779969022261.webp"
          alt="Luxury EV Charger"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full bg-primary/5">
            Electrifying the Future
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
            Investing in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Infinite Energy
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 font-light leading-relaxed">
            Helpis leads the transition to sustainable mobility. We build and deliver high-end EV charging infrastructure for the world's most demanding locations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="h-14 px-10 text-base font-semibold tracking-wide bg-primary hover:bg-primary/90">
              View Opportunities <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-semibold tracking-wide border-white/10 hover:bg-white/5 backdrop-blur-sm">
              Our Infrastructure
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto"
        >
          {[
            { label: 'Built Projects', value: '450+', icon: Zap },
            { label: 'Market Growth', value: '128%', icon: TrendingUp },
            { label: 'Investor Trust', value: '100%', icon: Shield },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group">
              <stat.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};