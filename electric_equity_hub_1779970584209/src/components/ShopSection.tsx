import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const products = [
  {
    id: 1,
    name: 'Manta EV Charger 22kW 3-Phase',
    price: 'EGP 29,599',
    image: '/charger1.webp.webp',
    features: ['Power: 22kW AC', 'Phase: 3-phase', 'Control: Bluetooth app', 'Build: Stainless steel', 'Warranty: 3 years'],
  },
  {
    id: 2,
    name: 'Manta EV Charger 7kW 1-Phase',
    price: 'EGP 24,599',
    image: '/charger1.webp.webp',
    features: ['Power: 7kW AC', 'Phase: 1-phase', 'Control: Bluetooth app', 'Build: Stainless steel', 'Warranty: 3 years'],
  },
];

export const ShopSection = () => {
  const [cart, setCart] = useState<typeof products[0] | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [form, setForm] = useState({ from_name: '', phone: '', governorate: '', city: '', address: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const addToCart = (product: typeof products[0]) => {
    setCart(product);
    setShowCheckout(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendOrder = async () => {
    if (!form.from_name || !form.phone || !form.governorate || !form.city || !form.address) {
      alert('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        'service_dofj8zm',
        'template_zd2e4gn',
        {
          from_name: form.from_name,
          phone: form.phone,
          governorate: form.governorate,
          city: form.city,
          address: form.address,
          product: cart?.name,
          price: cart?.price,
        },
        'BF-13QkE62Bm0oidq'
      );
      setSent(true);
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section id="shop" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Our Products</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Shop EV Chargers</h2>
        </div>

        {!showCheckout ? (
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product) => (
              <div key={product.id} className="bg-card rounded-3xl overflow-hidden border border-white/10">
                <img src={product.image} alt={product.name} className="w-full aspect-video object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-primary text-xl font-bold mb-6">{product.price}</p>
                  <ul className="space-y-2 mb-8">
                    {product.features.map((f, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm">{f}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-primary text-black py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : sent ? (
          <div className="text-center py-20">
            <h3 className="text-3xl font-bold mb-4 text-primary">Order Placed Successfully!</h3>
            <p className="text-muted-foreground mb-8">We will contact you shortly.</p>
            <button onClick={() => { setSent(false); setShowCheckout(false); setForm({ from_name: '', phone: '', governorate: '', city: '', address: '' }); }}
              className="bg-primary text-black px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm">
              Back to Shop
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <button onClick={() => setShowCheckout(false)} className="text-muted-foreground mb-8 flex items-center gap-2
