import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, PieChart, Wallet } from 'lucide-react';

const investmentCards = [
  {
    title: 'High-Yield Assets',
    description: 'Our infrastructure projects offer stable, long-term returns backed by the rapidly growing EV market.',
    icon: LineChart,
    badge: 'ROI Focused',
  },
  {
    title: 'Sustainable Portfolios',
    description: 'Align your capital with the global energy transition. Helpis creates ESG-compliant investment vehicles.',
    icon: PieChart,
    badge: 'Green Growth',
  },
  {
    title: 'Strategic Partnerships',
    description: 'We co-invest with real estate developers and municipalities to build future-proof charging hubs.',
    icon: Wallet,
    badge: 'B2B Networks',
  },
];

export const InvestmentSection = () => {
  return (
    <section id="investment" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Investment Vision</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Architecture of Future Capital</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-right hidden md:block">
            We provide a transparent and secure gateway for institutional and private investors to participate in the electrification of global transport.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {investmentCards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="glass-card border-none h-full p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:bg-primary/10 transition-colors" />
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="w-fit mb-4 border-primary/20 text-primary bg-primary/5 uppercase tracking-tighter text-[10px]">
                    {card.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};