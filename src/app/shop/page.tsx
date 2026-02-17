import Link from "next/link";
import { products } from "@/data/products";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-drma-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center px-6 md:px-20 overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0 bg-drma-sand/30 flex items-center justify-center">
          <div className="w-full h-full bg-[url('/images/hero-shop.png')] bg-cover bg-center mix-blend-multiply opacity-30" suppressHydrationWarning></div>
        </div>
        
        <div className="relative z-10 max-w-3xl pt-12 md:pt-0 text-drma-charcoal">
          <span className="uppercase text-xs md:text-sm tracking-[0.3em] text-drma-terracotta font-bold mb-6 block text-balance font-detail">Curation of Values</span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl mb-8 leading-[0.9] font-display text-drma-charcoal">
            The <br /> 
            <span className="italic text-drma-terracotta underline decoration-drma-terracotta/20 underline-offset-8">Collection.</span>
          </h1>
          <p className="text-lg md:text-2xl opacity-80 leading-relaxed font-interface max-w-md italic">
            Each piece is selected for its beauty and the ethical hands that made it.
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="px-6 md:px-20 py-8 md:py-12">
        <div className="flex flex-wrap items-center justify-between mb-12 md:mb-20 gap-6 border-b border-drma-charcoal/10 pb-6 md:pb-8 sticky top-[72px] md:top-[88px] bg-drma-cream/90 backdrop-blur-md z-40">
           <div className="flex space-x-6 md:space-x-10 text-[10px] md:text-xs uppercase tracking-widest font-bold font-detail overflow-x-auto no-scrollbar py-2">
              <span className="flex items-center cursor-pointer border-b-2 border-drma-terracotta pb-1 text-drma-charcoal whitespace-nowrap">All Products</span>
              <span className="flex items-center cursor-pointer opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap">Abayas</span>
              <span className="flex items-center cursor-pointer opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap">Hijabs</span>
              <span className="flex items-center cursor-pointer opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap">Sets</span>
           </div>
           
           <div className="flex space-x-4">
              <button className="flex items-center space-x-2 md:space-x-3 border-2 border-drma-charcoal/5 px-6 py-3 md:px-8 md:py-4 text-[10px] md:text-xs uppercase tracking-widest font-bold bg-white font-detail hover:border-drma-terracotta transition-all shadow-sm group text-drma-charcoal">
                <span>Filter By Ethics</span>
                <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-20 md:gap-y-32">
          {products.map((product) => (
            <Link href={`/shop/${product.id}`} key={product.id} className="group flex flex-col">
              <div className="aspect-[4/5] bg-drma-sand/20 mb-6 md:mb-10 overflow-hidden relative border border-drma-charcoal/5 rounded-sm shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 flex flex-col gap-2 font-detail">
                   {product.tags.map(tag => (
                     <span key={tag} className="bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 text-[8px] uppercase tracking-widest font-bold shadow-sm text-drma-charcoal">
                       {tag}
                     </span>
                   ))}
                </div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  suppressHydrationWarning
                />
                
                <div className="absolute inset-0 bg-drma-terracotta/0 group-hover:bg-drma-terracotta/10 transition-colors duration-500 mix-blend-overlay"></div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-drma-charcoal text-white py-5 md:py-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 uppercase text-center text-[10px] tracking-[0.3em] font-bold font-interface italic">
                  View Detail
                </div>
              </div>
              
              <div className="flex justify-between items-start border-l border-drma-terracotta/20 pl-4 md:pl-6 transition-colors group-hover:border-drma-terracotta">
                <div>
                  <h3 className="text-xl md:text-2xl mb-1 md:mb-2 font-display group-hover:text-drma-terracotta transition-colors leading-tight italic text-drma-charcoal">{product.name}</h3>
                  <p className="text-[10px] md:text-xs font-interface opacity-50 italic text-drma-charcoal">{product.origin}</p>
                </div>
                <p className="text-drma-terracotta font-interface text-lg md:text-xl font-bold">${product.price}.00</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t accent-border flex flex-col md:flex-row justify-between items-center opacity-60 text-xs uppercase tracking-widest bg-white font-detail">
        <div>&copy; 2026 DRMA Official</div>
        <div className="flex space-x-8 mt-4 md:mt-0 font-interface text-sm">
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Contact</span>
        </div>
      </footer>
    </main>
  );
}
