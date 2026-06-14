import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Inquiry received. A senior advisor will contact you within 24 hours.');
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Start Your <br />Energy Journey</h2>
              <p className="text-muted-foreground max-w-md font-light leading-relaxed">
                Whether you are an institutional investor or a developer, we are ready to discuss your vision for the charging future.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Headquarters', value: '3 Homosani St Ibn sendr sq Cairo' },
                { icon: Phone, label: 'Direct Line', value: '+41 22 555 0199' },
                { icon: Mail, label: 'Investment Inquiries', value: 'invest@helpis.ev' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold text-foreground tracking-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="uppercase text-[10px] tracking-widest font-bold">First Name</Label>
                  <Input id="firstName" placeholder="James" className="bg-white/5 border-white/10 focus:border-primary/50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="uppercase text-[10px] tracking-widest font-bold">Last Name</Label>
                  <Input id="lastName" placeholder="Sutherland" className="bg-white/5 border-white/10 focus:border-primary/50" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="uppercase text-[10px] tracking-widest font-bold">Email Address</Label>
                <Input id="email" type="email" placeholder="james@luxury-assets.com" className="bg-white/5 border-white/10 focus:border-primary/50" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="uppercase text-[10px] tracking-widest font-bold">Inquiry Details</Label>
                <Textarea id="message" placeholder="How can we assist your investment?" className="bg-white/5 border-white/10 focus:border-primary/50 min-h-[120px]" required />
              </div>

              <Button type="submit" className="w-full h-14 uppercase tracking-[0.2em] text-xs font-bold">
                Send Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
