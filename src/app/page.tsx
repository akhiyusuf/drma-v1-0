import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:h-[85vh] flex items-center px-6 md:px-20 overflow-hidden mt-0 py-20 md:py-0">
        <div className="absolute inset-0 z-0 bg-drma-sand/30 flex items-center justify-center">
          <div className="w-full h-full bg-[url('/images/hero-main.png')] bg-cover bg-center mix-blend-multiply opacity-30" suppressHydrationWarning></div>
        </div>
        
        <div className="relative z-10 max-w-3xl pt-8 md:pt-0">
          <span className="uppercase text-[10px] md:text-sm tracking-[0.3em] text-drma-terracotta font-bold mb-6 block font-detail">Crafted with Conscience</span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl mb-8 leading-[0.9] text-balance font-display">
            Modesty <br /> 
            <span className="italic text-drma-terracotta">Redefined.</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 opacity-80 leading-relaxed font-interface max-w-md">
            Ethically sourced, artisan-made attire for the modern woman who refuses to compromise on values or style.
          </p>
          <Link href="/shop" className="inline-flex items-center space-x-4 group">
            <span className="bg-drma-charcoal text-white px-8 py-4 md:px-10 md:py-5 rounded-full flex items-center space-x-2 group-hover:bg-drma-terracotta transition-all shadow-xl shadow-drma-charcoal/20 font-interface">
              <span className="uppercase text-xs md:text-sm tracking-widest font-bold">Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="absolute right-0 bottom-0 hidden lg:block w-1/3 h-1/2 border-l border-t accent-border p-8 backdrop-blur-sm bg-white/5">
           <div className="w-full h-full bg-drma-olive/10 flex items-center justify-center relative rounded-sm">
              <div className="p-8 text-center">
                 <Heart className="w-8 h-8 mx-auto mb-4 text-drma-terracotta" />
                 <h3 className="font-display text-xl mb-2 text-drma-charcoal">100% Child Labor Free</h3>
                 <p className="text-xs font-interface opacity-60 text-drma-charcoal">Every stitch is verified through our rigorous ethical inspection process.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Featured Products (Preview) - Leading with Selection */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-white text-drma-charcoal">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="uppercase text-[10px] tracking-[0.4em] text-drma-terracotta font-bold mb-6 block text-balance font-detail">The Seasonal Edit</span>
            <h2 className="text-3xl md:text-6xl leading-tight italic font-display text-balance">Curated for the Conscious.</h2>
          </div>
          <Link href="/shop" className="uppercase text-[10px] tracking-[0.3em] font-bold border-b-2 border-drma-terracotta pb-2 hover:text-drma-terracotta transition-colors font-detail">View All Collections</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {products.slice(0, 3).map((product) => (
            <Link href={`/shop/${product.id}`} key={product.id} className="group block">
              <div className="aspect-[3/4] bg-drma-sand/10 mb-8 overflow-hidden relative rounded-sm border border-drma-charcoal/5">
                <div className="absolute top-6 left-6 z-10 font-detail">
                   <span className="bg-white/95 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold shadow-sm">
                     {product.tags[0]}
                   </span>
                </div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out" 
                  suppressHydrationWarning
                />
                <div className="absolute inset-0 border-[0.5px] border-white/20 m-4 pointer-events-none group-hover:m-2 transition-all duration-700"></div>
              </div>
              <div className="flex justify-between items-start border-l-2 border-drma-terracotta/20 pl-6 py-2 transition-colors group-hover:border-drma-terracotta">
                <div>
                  <h3 className="text-xl md:text-2xl mb-2 font-display italic leading-tight">{product.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 font-interface">{product.category}</p>
                </div>
                <p className="text-drma-terracotta font-interface text-lg font-bold">${product.price}.00</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mission Block - Explaining the 'Why' */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-drma-charcoal text-drma-cream">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-7xl mb-8 md:mb-12 font-display italic leading-tight">Beyond the <br />Seams.</h2>
            <p className="font-interface opacity-70 mb-10 md:mb-12 leading-relaxed text-lg md:text-xl text-balance italic border-l-2 border-drma-terracotta pl-6 md:pl-10">
              DRMA was born from a simple question: Why should modest fashion be synonymous with exploitation? We believe style is a statement of identity, but your clothes shouldn't come at the cost of another's childhood.
            </p>
            <Link href="/mission" className="bg-drma-terracotta text-white px-8 py-4 md:px-10 md:py-5 rounded-full inline-block uppercase text-xs tracking-widest font-bold font-detail hover:bg-white hover:text-drma-terracotta transition-all shadow-xl">
               Read our Transparency Report
            </Link>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4 md:gap-6 relative">
             <div className="h-[250px] md:h-[400px] bg-drma-sand/20 rounded-sm bg-[url('/images/mission-ethical.png')] bg-cover bg-center shadow-2xl" suppressHydrationWarning></div>
             <div className="h-[250px] md:h-[400px] bg-drma-sand/10 rounded-sm mt-8 md:mt-12 bg-[url('/images/mission-artisan.png')] bg-cover bg-center shadow-2xl" suppressHydrationWarning></div>
             <div className="absolute inset-0 border border-white/5 m-4 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Must-Have: Texture & Detail focus - Highlighting Quality */}
      <section className="py-20 md:py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6 md:px-20">
            <div className="text-center mb-16 md:mb-24 text-drma-charcoal">
               <span className="uppercase text-[10px] tracking-[0.4em] text-drma-terracotta font-bold mb-6 block font-detail">The Tactile Experience</span>
               <h2 className="text-3xl md:text-7xl font-display italic leading-tight text-balance">Feel the Craft.</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
               {[
                 { title: "Pure Silk", label: "Medina Sheen", img: "/images/product-silk-hijab.png" },
                 { title: "Organic Linen", label: "Breathable Flow", img: "/images/product-linen-abaya.png" },
                 { title: "Fine Thread", label: "Artisan Stitch", img: "/images/product-kaftan.png" },
                 { title: "Raw Cotton", label: "Earth Pigments", img: "/images/product-prayer-set.png" }
               ].map((item, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="aspect-square bg-drma-sand/10 rounded-sm overflow-hidden mb-6 relative border border-drma-charcoal/5 shadow-sm">
                       <img src={item.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={item.title} suppressHydrationWarning />
                       <div className="absolute inset-0 bg-gradient-to-t from-drma-charcoal/40 via-transparent to-transparent opacity-60"></div>
                       <div className="absolute bottom-6 left-6 font-detail text-white">
                          <p className="text-[8px] uppercase tracking-[0.3em] font-bold text-drma-terracotta mb-1">{item.label}</p>
                          <h4 className="text-lg md:text-xl font-display italic leading-tight">{item.title}</h4>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Artisan Spotlight - Connecting the Maker */}
      <section className="py-20 md:py-32 px-6 md:px-20 border-t border-drma-charcoal/5 overflow-hidden bg-drma-cream/30">
         <div className="editorial-grid items-center gap-y-16">
            <div className="col-span-12 lg:col-span-6 relative">
               <div className="aspect-[4/5] bg-drma-sand/20 rounded-sm overflow-hidden relative border border-drma-charcoal/10 shadow-2xl">
                  <img src="/images/mission-artisan.png" className="w-full h-full object-cover" alt="Artisan at work" suppressHydrationWarning />
                  <div className="absolute inset-0 bg-drma-terracotta/5 mix-blend-multiply"></div>
               </div>
               <div className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-8 bg-drma-charcoal text-drma-cream p-8 md:p-12 max-w-[200px] md:max-w-xs rounded-sm shadow-2xl border border-white/10">
                  <span className="uppercase text-[8px] tracking-[0.4em] font-bold text-drma-terracotta mb-4 block font-detail">Who Made This?</span>
                  <h4 className="text-lg md:text-2xl font-display mb-4 italic leading-tight text-drma-cream">Amina & the Moroccan Cooperative.</h4>
                  <p className="font-interface text-[10px] md:text-xs opacity-60 leading-relaxed italic">"Every thread woven is a legacy protected. We preserve childhoods through fair wages."</p>
               </div>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
               <span className="uppercase text-[10px] tracking-[0.4em] text-drma-terracotta font-bold mb-8 block font-detail text-balance text-drma-charcoal">The Artisan Spotlight</span>
               <h2 className="text-3xl md:text-7xl font-display mb-8 md:mb-12 italic leading-[0.85] text-balance text-drma-charcoal">People over <br /> Product.</h2>
               <p className="font-interface text-lg md:text-xl opacity-70 mb-10 md:mb-12 border-l border-drma-terracotta pl-6 md:pl-8 italic text-drma-charcoal">
                  We believe you should know the hands that crafted your attire. Our 'Woman-to-Woman' supply chain connects independent artisans directly to your wardrobe, eliminating exploitative middlemen.
               </p>
               <Link href="/about" className="inline-block border-2 border-drma-charcoal px-10 py-4 md:px-12 md:py-5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-drma-charcoal hover:text-white transition-all font-detail text-drma-charcoal">
                  Meet the Artisans
               </Link>
            </div>
         </div>
      </section>

      {/* Comparison Teaser - Rational Reinforcement */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-drma-olive/5 border-y accent-border">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-5xl mb-8 italic font-display text-balance text-drma-charcoal">Compare the Impact.</h3>
          <p className="font-interface text-lg md:text-xl opacity-70 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed text-balance italic text-drma-charcoal">
            "We don't hide behind complex supply chains. See how DRMA measures up against industry giants in our full transparency disclosure."
          </p>
          <Link href="/mission" className="inline-flex items-center space-x-4 group">
            <span className="bg-drma-olive text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-drma-charcoal transition-all font-detail shadow-lg">
              Read Disclosure
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t accent-border flex flex-col md:flex-row justify-between items-center opacity-60 text-xs uppercase tracking-widest font-detail">
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
