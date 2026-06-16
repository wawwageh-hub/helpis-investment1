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
  const
