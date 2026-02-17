"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { products } from "@/data/products";
import { ArrowLeft, Heart, ShieldCheck, Factory, Check, Info, Minus, Plus, ShoppingBag } from "lucide-react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useCart } from "@/components/CartContext";
import { OriginBadge } from "@/components/EthicalComponents";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCart();
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-drma-cream text-drma-charcoal font-interface overflow-x-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-6 md:py-16">
        <Link href="/shop" className="inline-flex items-center space-x-3 text-xs uppercase tracking-widest font-bold mb-8 md:mb-12 hover:text-drma-terracotta transition-all group font-detail">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>The Collection</span>
        </Link>

        {/* Main Product Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-24">
          
          {/* Mobile Header: Title & Price (Visible only on Mobile) */}
          <div className="lg:hidden mb-8">
            <p className="text-[10px] uppercase tracking-[0.5em] text-drma-terracotta font-bold mb-3 font-detail opacity-60">{product.category}</p>
            <div className="flex justify-between items-start">
              <h1 className="text-4xl font-display leading-[0.9] italic text-drma-charcoal pr-4">{product.name}</h1>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-interface text-drma-terracotta font-bold">${product.price}.00</span>
                <span className="text-[8px] font-detail uppercase tracking-widest opacity-30 mt-1">Artisan Fixed</span>
              </div>
            </div>
          </div>

          {/* Column 1: Gallery & Visual Storytelling */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            <div className="aspect-[4/5] bg-drma-sand/20 rounded-sm relative overflow-hidden group border border-drma-charcoal/5 shadow-sm">
              <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10 flex flex-col gap-2 font-detail">
                  {product.tags.map(tag => (
                    <span key={tag} className="bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-5 md:py-2 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold shadow-md text-drma-charcoal">
                      {tag}
                    </span>
                  ))}
              </div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" 
                suppressHydrationWarning
              />
            </div>
            
            {/* Desktop Weaver's Mark (Hidden on Mobile, moved lower) */}
            <div className="hidden lg:grid grid-cols-2 gap-12 pt-12 border-t accent-border">
              <div className="space-y-6">
                <span className="uppercase text-[10px] tracking-[0.4em] text-drma-terracotta font-bold block font-detail">The Weaver's Mark</span>
                <div className="aspect-square bg-drma-sand/10 rounded-sm overflow-hidden border accent-border group cursor-crosshair">
                  <img src={product.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 grayscale group-hover:grayscale-0" alt="Texture Detail" suppressHydrationWarning />
                </div>
                <p className="font-interface text-xs opacity-60 leading-relaxed italic">
                  Close-up detail showing the unique weave of the {product.variations.find(v => v.type === 'Material')?.options[0] || 'fabric'}.
                </p>
              </div>
              <div className="flex flex-col justify-end">
                 <div className="bg-white/40 p-8 border accent-border backdrop-blur-sm rounded-sm shadow-sm">
                    <OriginBadge location={product.origin} auditDate={product.auditDate} />
                    <p className="mt-6 text-xs font-interface opacity-70 leading-relaxed italic">
                      Every stitch is documented. Our supply chain is woman-to-woman, direct from the cooperative.
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* Column 2: Selection & Purchase (Right side on desktop, stacked on mobile) */}
          <div className="lg:col-span-5 space-y-10 md:space-y-16 mt-12 lg:mt-0">
            {/* Desktop Header (Hidden on Mobile) */}
            <header className="hidden lg:block border-b border-drma-charcoal/10 pb-12">
              <div className="flex justify-between items-start mb-8">
                <div className="max-w-[80%] text-drma-charcoal">
                  <p className="text-xs uppercase tracking-[0.5em] text-drma-terracotta font-bold mb-6 font-detail opacity-60">{product.category}</p>
                  <h1 className="text-6xl md:text-7xl font-display mb-2 leading-[0.85] italic text-balance">{product.name}</h1>
                </div>
                <button className="p-5 border-2 border-drma-charcoal/5 rounded-full hover:bg-drma-terracotta hover:text-white transition-all shadow-sm">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-interface text-drma-terracotta font-bold">${product.price}.00</span>
                <span className="text-[10px] font-detail uppercase tracking-widest opacity-30">Artisan Fixed Price</span>
              </div>
            </header>

            <div className="space-y-10 md:space-y-16">
              <div className="font-interface text-lg md:text-2xl opacity-80 leading-relaxed italic text-drma-charcoal border-l-2 border-drma-terracotta pl-6 md:pl-8">
                {product.description}
              </div>

              {/* Variations & Quantity */}
              <div className="space-y-8 md:space-y-12">
                {product.variations.map((variation) => (
                  <div key={variation.type} className="space-y-4">
                    <div className="flex justify-between items-center border-b accent-border pb-3">
                      <h3 className="uppercase text-[10px] tracking-[0.4em] font-bold opacity-40 font-detail">{variation.type}</h3>
                      {selections[variation.type] && (
                        <span className="text-[10px] font-bold text-drma-olive font-detail italic">Selected: {selections[variation.type]}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {variation.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => setSelections({...selections, [variation.type]: option})}
                          className={`px-6 py-3 text-[10px] md:text-xs font-interface rounded-sm border transition-all duration-500 ${
                            selections[variation.type] === option 
                            ? 'bg-drma-charcoal text-white border-drma-charcoal shadow-lg' 
                            : 'border-drma-charcoal/10 hover:border-drma-terracotta bg-white/20'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="space-y-4">
                  <h3 className="uppercase text-[10px] tracking-[0.4em] font-bold opacity-40 font-detail border-b accent-border pb-3">Quantity</h3>
                  <div className="inline-flex items-center border border-drma-charcoal/10 rounded-sm bg-white/20">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 md:p-4 hover:text-drma-terracotta transition-colors border-r border-drma-charcoal/10"><Minus className="w-4 h-4" /></button>
                    <span className="px-6 md:px-8 font-interface font-bold text-sm">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 md:p-4 hover:text-drma-terracotta transition-colors border-l border-drma-charcoal/10"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>

              {/* Add to Bag */}
              <div className="space-y-6 pt-4">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-drma-charcoal text-white py-8 md:py-10 uppercase tracking-[0.5em] font-bold text-xs hover:bg-drma-terracotta transition-all rounded-sm shadow-2xl flex items-center justify-center space-x-4 md:space-x-6 group overflow-hidden"
                >
                  {isAdded ? (
                    <div className="flex items-center space-x-3 animate-in slide-in-from-bottom-full duration-500">
                      <Check className="w-5 h-5" />
                      <span className="font-interface">Added to Bag</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3 font-interface">
                      <ShoppingBag className="w-5 h-5" />
                      <span>Place in Shopping Bag</span>
                    </div>
                  )}
                </button>
                <p className="text-center text-[10px] font-detail uppercase tracking-widest opacity-40 italic">
                  Free carbon-neutral shipping on all artisan orders.
                </p>
              </div>

              {/* Mobile Weaver's Mark (Moved from Column 1 for Mobile flow) */}
              <div className="lg:hidden space-y-10 pt-12 border-t accent-border">
                <div className="space-y-6">
                  <span className="uppercase text-[10px] tracking-[0.4em] text-drma-terracotta font-bold block font-detail">The Weaver's Mark</span>
                  <div className="aspect-square bg-drma-sand/10 rounded-sm overflow-hidden border accent-border">
                    <img src={product.image} className="w-full h-full object-cover opacity-80 grayscale" alt="Texture Detail" suppressHydrationWarning />
                  </div>
                  <p className="font-interface text-xs opacity-60 leading-relaxed italic">
                    Close-up detail showing the unique weave of the {product.variations.find(v => v.type === 'Material')?.options[0] || 'fabric'}.
                  </p>
                </div>
                <div className="bg-white/40 p-8 border accent-border backdrop-blur-sm rounded-sm shadow-sm">
                    <OriginBadge location={product.origin} auditDate={product.auditDate} />
                    <p className="mt-6 text-xs font-interface opacity-70 leading-relaxed italic">
                      Every stitch is documented. Our supply chain is woman-to-woman, direct from the cooperative.
                    </p>
                </div>
              </div>

              {/* Ethical Context Cards */}
              <div className="grid grid-cols-1 gap-6 pt-12 md:pt-16 border-t accent-border">
                 <div className="p-8 md:p-10 rounded-sm border-2 border-drma-olive/10 bg-drma-olive/5 space-y-4">
                    <div className="flex items-center space-x-4 text-drma-olive">
                       <ShieldCheck className="w-6 h-6" />
                       <h3 className="uppercase text-[10px] md:text-xs tracking-[0.3em] font-bold font-detail text-drma-charcoal">The Ethical Guarantee</h3>
                    </div>
                    <p className="text-xs md:text-sm font-interface leading-relaxed opacity-70 italic text-drma-charcoal">
                      Verified 100% child-labor free through physical audits. We pay artisans 2.5x the local minimum wage.
                    </p>
                 </div>

                 <div className="p-8 md:p-10 rounded-sm border-2 border-drma-terracotta/10 bg-drma-terracotta/5 space-y-4">
                    <div className="flex items-center space-x-4 text-drma-terracotta">
                       <Factory className="w-6 h-6" />
                       <h3 className="uppercase text-[10px] md:text-xs tracking-[0.3em] font-bold font-detail text-drma-charcoal">Production Insight</h3>
                    </div>
                    <p className="text-xs md:text-sm font-interface leading-relaxed opacity-70 italic text-balance text-drma-charcoal">
                      Mineral pigments and traditional hand-stitching by woman-led cooperatives in {product.origin.split(',')[0]}.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency Journey Section */}
        <section className="py-24 md:py-40 border-t accent-border overflow-hidden">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-10 md:gap-12">
              <div className="max-w-2xl text-drma-charcoal">
                 <span className="uppercase text-[10px] tracking-[0.5em] text-drma-terracotta font-bold mb-6 md:mb-8 block font-detail opacity-60">The Journey</span>
                 <h2 className="text-4xl md:text-8xl font-display leading-[0.85] italic text-balance">From Fiber to <br /> Final Stitch.</h2>
              </div>
              <div className="md:w-1/3 space-y-6 md:space-y-8">
                <p className="font-interface text-lg md:text-xl opacity-70 leading-relaxed italic border-l-2 border-drma-terracotta pl-6 md:pl-10 text-drma-charcoal">
                   While fast-fashion giants track less than 15%, we embrace radical accountability for every thread.
                </p>
                <div className="flex items-center space-x-4 text-[10px] font-detail uppercase tracking-widest font-bold text-drma-olive">
                   <div className="w-8 h-[1px] bg-drma-olive"></div>
                   <span>GOTS Certified Process</span>
                </div>
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-drma-charcoal/10 -z-10"></div>
              {[
                { step: "01", title: "Organic Sourcing", desc: "Sustainable cooperatives harvesting raw natural fibers." },
                { step: "02", title: "Artisan Weaving", desc: "Heritage techniques preserved on traditional looms." },
                { step: "03", title: "Natural Dyeing", desc: "GOTS mineral pigments with zero chemical runoff." },
                { step: "04", title: "Ethical Tailoring", desc: "Fair-wage workshops verified 100% child-labor free." },
              ].map((item, i) => (
                <div key={i} className="bg-white/40 backdrop-blur-sm p-8 border accent-border rounded-sm hover:shadow-2xl transition-all duration-700 group">
                   <span className="text-4xl font-display text-drma-terracotta/15 group-hover:text-drma-terracotta transition-colors mb-6 block italic">{item.step}</span>
                   <h4 className="text-xl font-display mb-4 italic leading-tight text-drma-charcoal">{item.title}</h4>
                   <p className="font-interface text-xs opacity-60 leading-relaxed italic text-drma-charcoal">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Modesty & Care Section */}
        <section className="py-20 md:py-40 bg-drma-charcoal text-drma-cream -mx-6 md:-mx-20 px-6 md:px-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-drma-terracotta/5 -skew-x-12 translate-x-1/2"></div>
           
           <div className="flex flex-col lg:grid lg:grid-cols-12 relative z-10 gap-y-16 md:gap-y-24 items-center">
              <div className="lg:col-span-6 border-b border-drma-cream/10 pb-12 md:pb-16 w-full">
                 <span className="uppercase text-[10px] tracking-[0.5em] text-drma-terracotta font-bold mb-8 md:mb-10 block font-detail text-drma-cream/60">The Ritual</span>
                 <h3 className="text-4xl md:text-8xl font-display mb-12 md:mb-16 italic leading-[0.85]">Artisan Care & <br /> Modesty Standard.</h3>
                 
                 <div className="space-y-12">
                    <div className="flex items-start space-x-6 md:space-x-10 group text-drma-cream">
                       <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-drma-cream/20 flex items-center justify-center shrink-0 group-hover:border-drma-terracotta transition-colors duration-500">
                          <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-drma-terracotta" />
                       </div>
                       <div>
                          <h4 className="text-xl md:text-2xl font-display mb-3 md:mb-4 italic">100% Opaque Index</h4>
                          <p className="font-interface text-base md:text-lg opacity-60 leading-relaxed italic text-balance">High-density fiber weave ensuring absolute modesty. No under-layer required.</p>
                       </div>
                    </div>
                    <div className="flex items-start space-x-6 md:space-x-10 group text-drma-cream">
                       <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-drma-cream/20 flex items-center justify-center shrink-0 group-hover:border-drma-terracotta transition-colors duration-500">
                          <Info className="w-5 h-5 md:w-6 md:h-6 text-drma-terracotta" />
                       </div>
                       <div>
                          <h4 className="text-xl md:text-2xl font-display mb-3 md:mb-4 italic">Structured Flow Silhouette</h4>
                          <p className="font-interface text-base md:text-lg opacity-60 leading-relaxed italic text-balance">A graceful, loose drape designed to move with gravity without clinging.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 w-full">
                 <div className="p-8 md:p-16 border-2 border-drma-cream/10 rounded-sm bg-white/5 backdrop-blur-xl shadow-2xl relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-drma-terracotta"></div>
                    <h4 className="text-2xl md:text-3xl font-display mb-10 italic text-drma-terracotta">Care Ritual</h4>
                    <ul className="space-y-8 font-interface text-sm md:text-base opacity-80">
                       <li className="flex justify-between border-b border-drma-cream/10 pb-4 italic">
                          <span>Method</span>
                          <span className="font-bold">Hand-wash / Delicate</span>
                       </li>
                       <li className="flex justify-between border-b border-drma-cream/10 pb-4 italic">
                          <span>Water Temp</span>
                          <span className="font-bold">Cool (30°C)</span>
                       </li>
                       <li className="flex justify-between border-b border-drma-cream/10 pb-4 italic">
                          <span>Drying</span>
                          <span className="font-bold">Air dry in shade</span>
                       </li>
                       <li className="flex justify-between border-b border-drma-cream/10 pb-4 italic">
                          <span>Ironing</span>
                          <span className="font-bold">Low steam</span>
                       </li>
                    </ul>
                    <div className="mt-12 pt-6 border-t border-drma-cream/10">
                       <p className="text-[9px] md:text-[11px] font-detail uppercase tracking-[0.3em] opacity-40 leading-relaxed text-center italic text-balance">
                          Legacy garments possess a soul. Treat them with respect.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </div>

      <footer className="py-12 md:py-16 px-6 md:px-20 border-t accent-border flex flex-col md:flex-row justify-between items-center opacity-40 text-xs uppercase tracking-widest font-detail">
        <div className="mb-4 md:mb-0 text-center md:text-left text-drma-charcoal">&copy; 2026 DRMA Official - Conscious Design</div>
        <div className="flex space-x-10 md:space-x-12 mt-4 md:mt-0 font-interface text-sm text-drma-charcoal">
          <span className="hover:text-drma-terracotta cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-drma-terracotta cursor-pointer transition-colors">Twitter</span>
          <span className="hover:text-drma-terracotta cursor-pointer transition-colors">Contact</span>
        </div>
      </footer>
    </main>
  );
}
