import React, { useState } from 'react';

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
  const [cart, setCart] = useState<typeof products>([]);
  const [showCart, setShowCart] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const addToCart = (product: typeof products[0]) => {
    setCart([...cart, product]);
  };

  const sendOrder = () => {
    if (!name || !phone || !address) {
      alert('من فضلك املأ كل البيانات');
      return;
    }
    const items = cart.map(p => p.name).join('\n');
    const message = `طلب جديد من موقع Helpis:\n\nالاسم: ${name}\nالهاتف: ${phone}\nالعنوان: ${address}\n\nالمنتجات:\n${items}`;
    const url = `https://wa.me/201202375740?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="shop" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Our Products</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Shop EV Chargers</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
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
                  onClick={() => { addToCart(product); setShowCart(true); }}
                  className="w-full bg-primary text-black py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {showCart && cart.length > 0 && (
          <div className="bg-card rounded-3xl border border-white/10 p-8 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold mb-6">Cart</h3>
            <ul className="mb-6 space-y-2">
              {cart.map((item, i) => (
                <li key={i} className="text-muted-foreground text-sm">{item.name} — {item.price}</li>
              ))}
            </ul>
            <div className="space-y-4">
              <input
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm"
                placeholder="اسمك"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm"
                placeholder="رقم هاتفك"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <input
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm"
                placeholder="عنوانك"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
              <button
                onClick={sendOrder}
                className="w-full bg-green-500 text-white py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition"
              >
                إرسال الطلب على واتساب
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
