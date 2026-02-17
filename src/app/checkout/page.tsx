"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import { useCart } from "@/components/CartContext";
import { ShoppingBag, Truck, ShieldCheck, CreditCard, ChevronRight, CheckCircle2, Loader2 } from "lucide-react";
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'info' | 'processing' | 'success'>('info');
  const [shippingRate, setShippingRate] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: 'TX',
    zip: '',
  });

  // Simulate Tax and Shipping calculation
  useEffect(() => {
    if (form.zip.length >= 5) {
      // Simulate TaxJar calculation for Texas (8.25%)
      const taxRate = form.state === 'TX' ? 0.0825 : 0.06;
      setTaxAmount(totalPrice * taxRate);

      // Simulate UPS Live Rates
      setShippingRate(12.50 + (cart.length * 2.5));
    } else {
      setTaxAmount(0);
      setShippingRate(0);
    }
  }, [form.zip, form.state, totalPrice, cart.length]);

  const handleProcessOrder = () => {
    // Sanitize basic inputs before processing
    const sanitize = (str: string) => str.replace(/[<>]/g, '');
    const sanitizedEmail = sanitize(form.email);
    
    if (!sanitizedEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    setStep('processing');
    setTimeout(() => {
      setStep('success');
      clearCart();
    }, 3000);
  };

  if (step === 'success') {
    return (
      <main className="min-h-screen bg-drma-cream flex flex-col items-center justify-center p-8 text-center font-interface">
        <CheckCircle2 className="w-20 h-20 text-drma-olive mb-8 animate-in zoom-in duration-500" />
        <h1 className="text-4xl md:text-6xl font-display mb-6 italic text-drma-charcoal leading-tight">BarakAllah Feekum.</h1>
        <p className="max-w-md font-interface opacity-70 mb-12 text-lg">
          Your order has been placed successfully. An email confirmation has been sent to <strong>{form.email}</strong>.
        </p>
        <Link 
          href="/shop" 
          className="bg-drma-charcoal text-white px-12 py-5 rounded-full uppercase text-[10px] tracking-widest font-bold hover:bg-drma-terracotta transition-all shadow-xl font-detail"
        >
          Return to Marketplace
        </Link>
      </main>
    );
  }

  if (step === 'processing') {
    return (
      <main className="min-h-screen bg-drma-cream flex flex-col items-center justify-center p-8 text-center font-interface">
        <Loader2 className="w-12 h-12 text-drma-terracotta animate-spin mb-8" />
        <h2 className="text-2xl font-display italic mb-4">Processing Secure Payment...</h2>
        <p className="font-detail opacity-60 text-[10px] uppercase tracking-widest">Simulating PayPal Gateway & Order Validation</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-drma-cream text-drma-charcoal pb-20 md:pb-32 font-interface">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-8 md:py-16">
        <header className="mb-12 md:mb-16 text-drma-charcoal">
          <h1 className="text-4xl md:text-6xl font-display mb-4 italic">Checkout</h1>
          <p className="opacity-60 font-detail uppercase text-[10px] tracking-widest font-bold">Secure Marketplace Processing</p>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 md:gap-20">
          {/* Form Side */}
          <div className="lg:col-span-7 space-y-10 md:space-y-12">
            <section>
              <div className="flex items-center space-x-4 mb-6 md:mb-8">
                <div className="w-8 h-8 rounded-full bg-drma-charcoal text-white flex items-center justify-center text-[10px] font-bold font-detail">1</div>
                <h2 className="text-xl uppercase tracking-widest text-[10px] font-bold font-detail text-drma-charcoal">Contact Information</h2>
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-drma-charcoal/20 py-4 outline-none focus:border-drma-terracotta transition-colors font-interface text-lg text-drma-charcoal"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
              />
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-6 md:mb-8">
                <div className="w-8 h-8 rounded-full bg-drma-charcoal text-white flex items-center justify-center text-[10px] font-bold font-detail">2</div>
                <h2 className="text-xl uppercase tracking-widest text-[10px] font-bold font-detail text-drma-charcoal">Shipping Address</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8 text-drma-charcoal">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="bg-transparent border-b border-drma-charcoal/20 py-4 outline-none focus:border-drma-terracotta transition-colors font-interface"
                  onChange={(e) => setForm({...form, firstName: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="bg-transparent border-b border-drma-charcoal/20 py-4 outline-none focus:border-drma-terracotta transition-colors font-interface"
                  onChange={(e) => setForm({...form, lastName: e.target.value})}
                />
              </div>
              <input 
                type="text" 
                placeholder="Full Street Address" 
                className="w-full bg-transparent border-b border-drma-charcoal/20 py-4 mb-6 md:mb-8 outline-none focus:border-drma-terracotta transition-colors font-interface text-drma-charcoal"
                onChange={(e) => setForm({...form, address: e.target.value})}
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-drma-charcoal">
                <input 
                  type="text" 
                  placeholder="City" 
                  className="bg-transparent border-b border-drma-charcoal/20 py-4 outline-none focus:border-drma-terracotta transition-colors font-interface"
                  onChange={(e) => setForm({...form, city: e.target.value})}
                />
                <select 
                  className="bg-transparent border-b border-drma-charcoal/20 py-4 outline-none focus:border-drma-terracotta transition-colors font-interface"
                  value={form.state}
                  onChange={(e) => setForm({...form, state: e.target.value})}
                >
                  <option value="TX">Texas (Local Hub)</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="FL">Florida</option>
                </select>
                <input 
                  type="text" 
                  placeholder="ZIP / Postal Code" 
                  className="bg-transparent border-b border-drma-charcoal/20 py-4 outline-none focus:border-drma-terracotta transition-colors font-interface"
                  value={form.zip}
                  onChange={(e) => setForm({...form, zip: e.target.value})}
                />
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-6 md:mb-8">
                <div className="w-8 h-8 rounded-full bg-drma-charcoal text-white flex items-center justify-center text-[10px] font-bold font-detail">3</div>
                <h2 className="text-xl uppercase tracking-widest text-[10px] font-bold font-detail text-drma-charcoal">Payment Method</h2>
              </div>
              <div className="p-6 md:p-8 border-2 border-drma-terracotta bg-drma-terracotta/5 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <CreditCard className="w-6 h-6 text-drma-terracotta" />
                  <div>
                    <p className="font-display italic text-lg text-drma-charcoal">PayPal / Credit Secure</p>
                    <p className="text-[10px] font-detail uppercase tracking-widest opacity-40 text-drma-charcoal">Encrypted by PayPal Gateway</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-10 h-6 bg-drma-charcoal/10 rounded"></div>
                  <div className="w-10 h-6 bg-drma-charcoal/10 rounded"></div>
                </div>
              </div>
            </section>
          </div>

          {/* Summary Side */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 md:p-12 border accent-border lg:sticky lg:top-32 rounded-sm shadow-2xl shadow-drma-charcoal/5">
              <h3 className="text-2xl font-display italic mb-6 md:mb-8 border-b accent-border pb-6 text-drma-charcoal text-balance leading-tight">Bag Summary</h3>
              
              <div className="space-y-6 mb-8 md:mb-12 max-h-[30vh] overflow-y-auto pr-4 custom-scrollbar font-interface">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-16 bg-drma-sand/20 overflow-hidden rounded-sm border border-drma-charcoal/5">
                        <img src={item.image} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" suppressHydrationWarning />
                      </div>
                      <div className="text-drma-charcoal">
                        <p className="font-display italic text-sm leading-tight">{item.name}</p>
                        <p className="text-[10px] uppercase font-detail opacity-40">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-interface text-sm font-bold text-drma-charcoal">${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 font-interface text-sm border-t accent-border pt-8 mb-8 text-drma-charcoal">
                <div className="flex justify-between">
                  <span className="opacity-60 italic">Subtotal</span>
                  <span className="font-bold">${totalPrice}.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-60 flex items-center space-x-2">
                    <Truck className="w-3 h-3" />
                    <span className="italic">Shipping (UPS Ground)</span>
                  </span>
                  <span className="font-bold">{shippingRate > 0 ? `$${shippingRate.toFixed(2)}` : 'Calculated next'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-60 flex items-center space-x-2">
                    <ShieldCheck className="w-3 h-3" />
                    <span className="italic">Est. Tax (TaxJar Proxy)</span>
                  </span>
                  <span className="font-bold">{taxAmount > 0 ? `$${taxAmount.toFixed(2)}` : 'Calculated next'}</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-drma-charcoal text-lg font-display italic">
                  <span>Grand Total</span>
                  <span className="text-drma-terracotta font-bold">${(totalPrice + shippingRate + taxAmount).toFixed(2)}</span>
                </div>
              </div>

              <button 
                disabled={!form.email || !form.zip}
                onClick={handleProcessOrder}
                className="w-full bg-drma-charcoal text-white py-6 flex items-center justify-center space-x-4 uppercase tracking-[0.3em] font-bold text-xs hover:bg-drma-terracotta transition-all disabled:opacity-20 disabled:cursor-not-allowed group font-detail"
              >
                <span>Authorize & Pay</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-8 flex items-center justify-center space-x-2 text-drma-olive opacity-60">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-widest font-detail">Ethically Certified Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
