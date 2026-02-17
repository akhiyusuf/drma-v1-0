import Link from "next/link";
import { Star, Mail, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-drma-cream text-drma-charcoal font-interface">
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-[70vh] md:h-[80vh] flex items-center px-6 md:px-20 overflow-hidden border-b accent-border py-20 md:py-0 font-display">
        <div className="absolute inset-0 z-0 bg-drma-olive/10 flex items-center justify-center">
          <div className="w-full h-full bg-[url('/images/hero-about.png')] bg-cover bg-center mix-blend-multiply opacity-20" suppressHydrationWarning></div>
        </div>
        
        <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-12 pt-12 md:pt-0 text-drma-charcoal">
          <div className="max-w-4xl">
            <span className="uppercase text-xs md:text-sm tracking-[0.4em] text-drma-terracotta font-bold mb-8 block font-detail">The Story Behind the Brand</span>
            <h1 className="text-4xl md:text-8xl lg:text-9xl leading-[0.85] text-balance">
              Designing <br />
              Resourceful <br />
              <span className="italic text-drma-terracotta text-nowrap">Modest Attire.</span>
            </h1>
          </div>
          <div className="md:w-1/3 pb-4">
             <p className="font-interface text-lg md:text-2xl opacity-80 leading-relaxed italic border-l border-drma-terracotta pl-6">
               "We wanted to build a bridge between ethical craftsmanship and affordable modesty."
             </p>
          </div>
        </div>
      </header>

      {/* Team Section */}
      <section className="py-20 md:py-32 px-6 md:px-20">
        <div className="flex items-center space-x-4 mb-16 font-display text-drma-charcoal">
           <Star className="w-6 h-6 text-drma-terracotta fill-drma-terracotta" />
           <h2 className="text-2xl md:text-3xl uppercase tracking-widest text-xs font-bold font-detail">The Management Team</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
           {[1, 2, 3].map(i => (
             <div key={i} className="group">
                <div className="aspect-[4/5] bg-drma-sand/20 mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm relative border border-drma-charcoal/5 shadow-sm">
                   <div className="absolute inset-0 border-[0.5px] border-drma-charcoal/10 m-4"></div>
                </div>
                <h3 className="text-2xl mb-2 italic font-display text-drma-charcoal">Manager {i === 1 ? "Blossom" : i === 2 ? "Bubbles" : "Buttercup"}</h3>
                <p className="uppercase text-xs tracking-widest font-bold text-drma-terracotta mb-4 font-detail text-balance">Core Management</p>
                <p className="font-interface text-base opacity-60 leading-relaxed max-w-xs text-balance text-drma-charcoal">
                   Part of the dedicated 3-person team managing content, products, and global orders for DRMA.
                </p>
             </div>
           ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-drma-charcoal text-drma-cream">
         <div className="editorial-grid gap-y-16 md:gap-y-20">
            <div className="col-span-12 md:col-span-6 border-b border-drma-cream/10 pb-12">
               <h3 className="text-3xl md:text-5xl mb-8 font-display italic">Our Philosophy</h3>
               <p className="font-interface opacity-70 leading-relaxed text-lg md:text-xl text-balance">
                 In an era of disposable fashion, we choose the slow path. Every garment in the DRMA marketplace is a testament to the belief that modesty and ethics are inseparable. We work with artisans who have mastered their craft over generations, ensuring that their traditions thrive in the modern market.
               </p>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8">
               <div className="space-y-12 md:space-y-16">
                  <div>
                     <h4 className="text-xl md:text-2xl italic mb-4 font-display text-drma-terracotta">Affordable Modesty</h4>
                     <p className="font-interface text-base opacity-60">Ethical fashion shouldn't be a luxury. We optimize our supply chain to keep prices accessible for Muslim women everywhere.</p>
                  </div>
                  <div>
                     <h4 className="text-xl md:text-2xl italic mb-4 font-display text-drma-terracotta">Personal Connection</h4>
                     <p className="font-interface text-base opacity-60">We are small by choice. This allows us to maintain direct relationships with our vendors and personal service for our customers.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 px-6 md:px-20 text-center">
         <h2 className="text-3xl md:text-7xl mb-12 font-display italic text-drma-charcoal">Connect With Us</h2>
         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 font-detail">
            <div className="w-full sm:w-auto flex items-center justify-center space-x-4 border-2 border-drma-charcoal/5 px-10 py-5 md:px-12 md:py-6 rounded-full hover:bg-drma-sand/20 transition-colors cursor-pointer group text-drma-charcoal">
               <Mail className="w-5 h-5 text-drma-terracotta group-hover:scale-110 transition-transform" />
               <span className="uppercase text-xs tracking-widest font-bold">Email Our Team</span>
            </div>
            <div className="w-full sm:w-auto flex items-center justify-center space-x-4 border-2 border-drma-charcoal/5 px-10 py-5 md:px-12 md:py-6 rounded-full hover:bg-drma-sand/20 transition-colors cursor-pointer group text-drma-charcoal">
               <Instagram className="w-5 h-5 text-drma-terracotta group-hover:scale-110 transition-transform" />
               <span className="uppercase text-xs tracking-widest font-bold">Follow Our Journey</span>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t accent-border flex flex-col md:flex-row justify-between items-center opacity-40 text-xs uppercase tracking-widest font-detail">
        <div className="mb-4 md:mb-0 text-center md:text-left text-drma-charcoal">&copy; 2026 DRMA Official - Designing Resourceful Modest Attire</div>
        <div className="flex space-x-8 font-interface text-sm text-drma-charcoal">
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Contact</span>
        </div>
      </footer>
    </main>
  );
}
