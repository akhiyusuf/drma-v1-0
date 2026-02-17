"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "./CartContext";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const { setIsOpen, totalItems } = useCart();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Our Mission", href: "/mission" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b accent-border sticky top-0 bg-drma-cream/80 backdrop-blur-md z-50">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl md:text-2xl font-display tracking-widest font-bold hover:text-drma-terracotta transition-colors">DRMA</Link>
          <span className="hidden lg:block text-[10px] uppercase tracking-[0.3em] font-bold bg-drma-terracotta/10 text-drma-terracotta px-3 py-1 rounded-sm font-detail">MVP Phase 1.0</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12 uppercase text-xs tracking-[0.2em] font-bold font-interface">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={clsx(
                "transition-colors hover:text-drma-terracotta",
                pathname === link.href ? "text-drma-terracotta" : "opacity-60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="relative p-2 hover:bg-drma-sand/20 rounded-full transition-colors group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {mounted && totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-drma-terracotta text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-in zoom-in duration-300">
                {totalItems}
              </span>
            )}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 hover:bg-drma-sand/20 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-drma-cream flex flex-col animate-in fade-in slide-in-from-top duration-300">
          <div className="flex items-center justify-between px-6 py-6 border-b accent-border">
            <Link href="/" className="text-xl font-display tracking-widest font-bold">DRMA</Link>
            <button 
              className="p-2 hover:bg-drma-sand/20 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={clsx(
                  "text-3xl uppercase tracking-[0.3em] font-bold font-display italic transition-colors",
                  pathname === link.href ? "text-drma-terracotta" : "text-drma-charcoal opacity-40"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="p-12 text-center border-t accent-border">
            <p className="font-detail text-xs uppercase tracking-widest opacity-40">Designing Resourceful Modest Attire</p>
          </div>
        </div>
      )}
    </>
  );
}
