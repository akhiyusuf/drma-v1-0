import Link from "next/link";
import { Heart, Globe, Factory, Eye, Users, ShieldAlert, Award, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import { EthicalMetric } from "@/components/EthicalComponents";

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-drma-cream text-drma-charcoal font-interface">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[70vh] md:h-[80vh] flex items-center px-6 md:px-20 overflow-hidden border-b accent-border font-display py-20 md:py-0">
        <div className="absolute inset-0 z-0 bg-drma-sand/20 flex items-center justify-center">
          <div className="w-full h-full bg-[url('/images/hero-mission.png')] bg-cover bg-center mix-blend-multiply opacity-30" suppressHydrationWarning></div>
        </div>
        
        <div className="relative z-10 max-w-5xl pt-12 md:pt-0">
          <span className="uppercase text-xs md:text-sm tracking-[0.4em] text-drma-terracotta font-bold mb-8 block font-detail">Our Manifesto</span>
          <h1 className="text-4xl md:text-8xl lg:text-9xl leading-[0.85] mb-12 text-balance text-drma-charcoal">
            Beauty <span className="italic text-drma-terracotta">shouldn't</span> <br /> 
            cost a childhood.
          </h1>
          <p className="max-w-2xl font-interface text-xl md:text-3xl opacity-80 leading-relaxed text-drma-charcoal">
            Rewriting the fashion narrative, one stitch at a time.
          </p>
        </div>
      </header>

      {/* The Pillars */}
      <section className="py-20 md:py-32 px-6 md:px-20 border-b accent-border text-drma-charcoal">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-drma-charcoal font-interface">
            <EthicalMetric 
              label="Audit Rigor" 
              value="100%" 
              description="We personally inspect every factory to ensure zero child labor and fair living wages. No third-party obfuscation." 
              icon={<Award className="w-4 h-4 text-drma-terracotta" />}
              theme="terracotta"
            />
            <EthicalMetric 
              label="Wage Standard" 
              value="2.5x" 
              description="Empowering local artisans by paying 2.5x the local minimum wage, ensuring families thrive." 
              icon={<Users className="w-4 h-4 text-drma-olive" />}
              theme="olive"
            />
            <EthicalMetric 
              label="Education" 
              value="5%" 
              description="5% of every purchase goes directly into educational programs for children in manufacturing hubs." 
              icon={<Globe className="w-4 h-4 text-drma-charcoal" />}
              theme="charcoal"
            />
         </div>
      </section>

      {/* Brand Comparison */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16 md:mb-20 gap-8">
            <div className="lg:w-1/2 text-drma-charcoal">
              <h2 className="text-3xl md:text-6xl mb-8 leading-tight font-display italic">The Real Cost <br /><span className="italic opacity-40">of Modern Fashion</span></h2>
              <p className="font-interface text-lg md:text-xl opacity-70 leading-relaxed italic">
                "While fast-fashion giants prioritize velocity and volume, we prioritize the person over the product. Transparency isn't a buzzword; it's our foundational requirement."
              </p>
            </div>
            <div className="lg:w-1/3 p-6 md:p-8 border accent-border bg-drma-cream/30">
               <Info className="w-6 h-6 text-drma-terracotta mb-4" />
               <p className="text-xs font-interface opacity-60 leading-relaxed italic">
                 Based on the 2025 Ethical Fashion Watchdog reports. Comparison metrics focus on supply chain visibility and child labor prevention audits.
               </p>
            </div>
          </div>

          <div className="overflow-x-auto -mx-6 px-6 no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-drma-charcoal uppercase text-xs tracking-[0.3em] font-bold font-detail">
                  <th className="pb-6 w-1/4 text-drma-charcoal">Evaluation Metric</th>
                  <th className="pb-6 text-drma-terracotta">DRMA (Our Goal)</th>
                  <th className="pb-6 opacity-40">Shein / Zara / H&M</th>
                </tr>
              </thead>
              <tbody className="font-interface text-drma-charcoal">
                <tr className="border-b accent-border">
                  <td className="py-8 md:py-10 font-display italic text-xl">Supply Chain Visibility</td>
                  <td className="py-8 md:py-10 text-lg">
                    <span className="flex items-center space-x-2 text-drma-olive font-bold">
                      <ShieldAlert className="w-4 h-4" />
                      <span>100% Tracking (Fiber to Stitch)</span>
                    </span>
                  </td>
                  <td className="py-8 md:py-10 opacity-40 font-bold text-lg">Estimated less than 15%</td>
                </tr>
                <tr className="border-b accent-border">
                  <td className="py-8 md:py-10 font-display italic text-xl">Audit Frequency</td>
                  <td className="py-8 md:py-10 text-lg">
                    <span className="font-bold text-drma-olive">Monthly Physical Inspections</span>
                  </td>
                  <td className="py-8 md:py-10 opacity-40 font-bold text-lg">Self-reported / Annual</td>
                </tr>
                <tr className="border-b accent-border">
                  <td className="py-8 md:py-10 font-display italic text-xl">Material Ethics</td>
                  <td className="py-8 md:py-10 text-lg">
                    <span className="font-bold text-drma-olive text-balance">Only Organic & Natural Fibers</span>
                  </td>
                  <td className="py-8 md:py-10 opacity-40 font-bold text-lg">Predominantly Synthetic</td>
                </tr>
                <tr className="border-b border-drma-charcoal">
                  <td className="py-8 md:py-10 font-display italic text-xl">Worker Earnings</td>
                  <td className="py-8 md:py-10 text-lg">
                    <span className="font-bold text-drma-olive font-bold">Living Wage + Education Subsidy</span>
                  </td>
                  <td className="py-8 md:py-10 opacity-40 font-bold text-lg">Local minimum</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Video / Article Section */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-drma-charcoal text-white">
        <div className="editorial-grid gap-y-16">
          <div className="col-span-12 lg:col-span-5">
            <span className="uppercase text-xs tracking-[0.4em] text-drma-terracotta font-bold mb-8 block text-balance font-detail">Educational Library</span>
            <h2 className="text-3xl md:text-6xl mb-10 md:mb-12 italic font-display text-balance text-drma-cream">Deep Dive into Ethics.</h2>
            <p className="font-interface opacity-70 leading-relaxed text-lg md:text-xl mb-10 md:mb-12 text-balance">
              Education is the first step toward change. Browse our curated selection of articles and behind-the-scenes footage from our partner artisan cooperatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-detail">
               <button className="border border-white/20 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-drma-charcoal transition-all">Latest Articles</button>
               <button className="border border-white/20 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-drma-charcoal transition-all">Production Videos</button>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="group cursor-pointer">
                <div className="aspect-video bg-white/5 border border-white/10 rounded-sm mb-6 flex items-center justify-center group-hover:bg-white/10 transition-colors overflow-hidden relative">
                   <div className="w-full h-full bg-[url('/images/mission-ethical.png')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" suppressHydrationWarning></div>
                   <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                         <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                      </div>
                   </div>
                </div>
                <h4 className="text-lg italic mb-2 font-display text-drma-cream text-balance">Our Morrocan Cooperative</h4>
                <p className="font-detail text-xs uppercase tracking-widest opacity-40">Documentary • 4:20 min</p>
             </div>
             <div className="group cursor-pointer">
                <div className="aspect-video bg-white/5 border border-white/10 rounded-sm mb-6 flex items-center justify-center group-hover:bg-white/10 transition-colors overflow-hidden relative">
                   <div className="w-full h-full bg-[url('/images/mission-artisan.png')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" suppressHydrationWarning></div>
                   <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                         <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                      </div>
                   </div>
                </div>
                <h4 className="text-lg italic mb-2 font-display text-drma-cream text-balance">Tracing the Thread</h4>
                <p className="font-detail text-xs uppercase tracking-widest opacity-40">Factory Audit • 6:15 min</p>
             </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 md:py-32 px-6 md:px-20 text-center">
         <div className="max-w-4xl mx-auto bg-drma-sand/20 py-16 md:py-24 px-6 md:px-8 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 md:w-24 h-16 md:h-24 border-t-2 border-l-2 accent-border"></div>
            <div className="absolute bottom-0 right-0 w-16 md:w-24 h-16 md:h-24 border-b-2 border-r-2 accent-border"></div>
            
            <h2 className="text-3xl md:text-7xl mb-10 md:mb-12 font-display italic leading-tight text-balance text-drma-charcoal">Ready to wear your values?</h2>
            <Link href="/shop" className="inline-block bg-drma-charcoal text-white px-10 md:px-16 py-5 md:py-6 text-xs uppercase tracking-[0.3em] font-bold hover:bg-drma-terracotta transition-all shadow-2xl font-interface">
               Explore the Shop
            </Link>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t accent-border flex flex-col md:flex-row justify-between items-center opacity-40 text-xs uppercase tracking-widest bg-white font-detail">
        <div>&copy; 2026 DRMA Official - Conscious Design</div>
        <div className="flex space-x-8 mt-4 md:mt-0 font-interface text-sm text-drma-charcoal">
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Contact</span>
        </div>
      </footer>
    </main>
  );
}
