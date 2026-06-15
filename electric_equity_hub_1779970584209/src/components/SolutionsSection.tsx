import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    title: 'Building Excellence',
    subtitle: 'Infrastructure Construction',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/b9788d6e-d9ef-4a95-80ed-c43bbaa12c96/charging-hub-investment-ea9908f0-1779969022634.webp',
    features: ['Site Survey & Engineering', 'Civil Works & Grid Connection', 'Permit Management', 'Quality Assurance'],
  },
  {
    title: 'Premium Distribution',
    subtitle: 'Hardware Sales',
image: '/charger.jpg.png',
    features: ['Luxury AC/DC Chargers', 'Smart Load Management', 'Custom Branding Options', 'White-glove Delivery'],
  },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Our Solutions</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Built to Last. Designed to Lead.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Whether you are looking to deploy a nationwide network or secure a premium residential installation, Helpis provides end-to-end expertise.
          </p>
        </div>

        <div className="space-y-32">
          {solutions.map((sol, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="relative group overflow-hidden rounded-3xl">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full aspect-video md:aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-2">{sol.subtitle}</h4>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{sol.title}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {sol.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
