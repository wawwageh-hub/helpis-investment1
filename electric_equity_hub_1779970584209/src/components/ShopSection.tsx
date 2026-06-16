تمام! دلوقتي روح GitHub → `src/components` واضغط **Add file → Create new file** وسميه `ShopSection.tsx` واكتب الكود ده جوا:

```tsx
import React from 'react';

const products = [
  {
    name: 'Manta EV Charger 22kW 3-Phase',
    price: 'EGP 29,599',
    image: '/charger1.webp.webp',
    features: ['Power: 22kW AC', 'Phase: 3-phase', 'Control: Bluetooth app', 'Build: Stainless steel', 'Warranty: 3 years'],
  },
  {
    name: 'Manta EV Charger 7kW 1-Phase',
    price: 'EGP 24,599',
    image: '/charger1.webp.webp',
    features: ['Power: 7kW AC', 'Phase: 1-phase', 'Control: Bluetooth app', 'Build: Stainless steel', 'Warranty: 3 years'],
  },
];

export const ShopSection = () => {
  return (
    <section id="shop" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Our Products</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Shop EV Chargers</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product, i) => (
            <div key={i} className="bg-card rounded-3xl overflow-hidden border border-white/10">
              <img src={product.image} alt={product.name} className="w-full aspect-video object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-primary text-xl font-bold mb-6">{product.price}</p>
                <ul className="space-y-2 mb-8">
                  {product.features.map((f, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{f}</li>
                  ))}
                </ul>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition">
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
```

اضغط **Commit changes** وبعدين نضيفه في `App.tsx` 🙂
