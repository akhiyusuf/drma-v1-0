"use client";

import React from 'react';
import { useCart } from './CartContext';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CartOverlay() {
  const { cart, removeFromCart, totalPrice, totalItems, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
      />
      
      {/* Panel */}
      <div className="relative w-full max-w-full md:max-w-md bg-drma-cream h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 font-interface">
        <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b accent-border">
          <div className="flex items-center space-x-4">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-xl font-display">Shopping Bag ({totalItems})</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-drma-sand/20 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <p className="font-interface opacity-60 italic text-lg">Your bag is currently empty.</p>
              <Link 
                href="/shop" 
                onClick={() => setIsOpen(false)}
                className="text-drma-terracotta border-b border-drma-terracotta pb-1 uppercase text-xs tracking-widest font-bold font-detail"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex space-x-4 md:space-x-6 group">
                  <div className="w-20 md:w-24 aspect-[3/4] bg-drma-sand/20 rounded-sm overflow-hidden flex-shrink-0 border border-drma-charcoal/5">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" suppressHydrationWarning />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-base md:text-lg font-display italic leading-tight text-drma-charcoal">{item.name}</h3>
                        <p className="font-interface text-drma-terracotta font-bold text-sm md:text-base">${item.price}</p>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mt-1 font-detail">{item.category}</p>
                      <p className="text-xs font-interface opacity-60 mt-2 italic">Qty: {item.quantity}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-red-800/60 hover:text-red-800 transition-colors font-detail mt-4"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="px-6 md:px-8 py-8 border-t accent-border bg-white/50">
            <div className="flex justify-between items-end mb-8">
              <span className="uppercase text-xs tracking-[0.2em] font-bold opacity-60 font-detail">Total Amount</span>
              <span className="text-2xl md:text-3xl font-display text-drma-terracotta">${totalPrice}.00</span>
            </div>
            <Link 
              href="/checkout" 
              onClick={() => setIsOpen(false)}
              className="block w-full bg-drma-charcoal text-white py-5 md:py-6 text-center uppercase tracking-[0.3em] font-bold text-xs hover:bg-drma-terracotta transition-all shadow-xl shadow-drma-charcoal/10 font-detail"
            >
              Checkout Now
            </Link>
            <p className="text-center text-[10px] opacity-40 mt-6 font-interface italic">
              Shipping & taxes calculated at checkout.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
