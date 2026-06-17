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

type Product = typeof products[0];

interface FormData {
  from_name: string;
  phone: string;
  governorate: string;
  city: string;
  address: string;
}

export const ShopSection = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [form, setForm] = useState<FormData>({ from_name: '', phone: '', governorate: '', city: '', address: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setShowCheckout(true);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
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
          product: cart.map(p => p.name).join(', '),
          price: cart.map(p => p.price).join(', '),
        },
        'BF-13QkE62Bm0oidq'
      );
      setSent(true);
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  if (sent) {
    return (
      <section id="shop" className="py-24">
        <div className="container mx-auto px-6 text-center py-20">
          <h3 className="text-3xl font-bold mb-4 text-primary">Order Placed Successfully!</h3>
          <p className="text-muted-foreground mb-8">We will contact you shortly.</p>
          <button onClick={() => { setSent(false); setShowCheckout(false); setCart([]); setForm({ from_name: '', phone: '', governorate: '', city: '', address: '' }); }} className="bg-primary text-black px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm">
            Back to Shop
          </button>
        </div>
      </section>
    );
  }

  if (showCheckout && cart.length > 0) {
    return (
      <section id="shop" className="py-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <button onClick={() => setShowCheckout(false)} className="text-muted-foreground mb-8 flex items-center gap-2 hover:text-primary transition">
            Back to Shop
          </button>
          <div className="bg-card rounded-3xl border border-white/10 p-8 mb-6">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">{item.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-primary font-bold">{item.price}</span>
                  <button onClick={() => removeFromCart(i)} className="text-red-400 text-xs hover:text-red-300">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-3xl border border-white/10 p-8">
            <h3 className="text-xl font-bold mb-6">Shipping Information</h3>
            <div className="space-y-4">
              <input name="from_name" placeholder="Full Name" value={form.from_name} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm" />
              <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm" />
              <input name="governorate" placeholder="Governorate" value={form.governorate} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm" />
              <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm" />
              <input name="address" placeholder="Street Address" value={form.address} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm" />
              <button onClick={sendOrder} disabled={loading} className="w-full bg-primary text-black py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition">
                {loading ? 'Sending...' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="shop" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Our Products</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Shop EV Chargers</h2>
        </div>
        {cart.length > 0 && (
          <div className="flex justify-end mb-8">
            <button onClick={() => setShowCheckout(true)} className="bg-primary text-black px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition">
              Checkout ({cart.length})
            </button>
          </div>
        )}
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
                <button onClick={() => addToCart(product)} className="w-full bg-primary text-black py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
