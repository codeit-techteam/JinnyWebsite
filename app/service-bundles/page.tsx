import React from "react";
import { Sparkles, CheckCircle2, Clock, Star, Gift } from "lucide-react";

export default function ServiceBundlesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b0120] selection:bg-purple-500/30">
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 bg-[#0b0120] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Gift className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Value Packs</span>
            </div>
            <h1 className="heading-xl">Curated <br /><span className="text-[#6c2bd9]">Magic Bundles</span></h1>
            <p className="body-text-dark text-xl max-w-xl">Save more with our carefully selected service combinations. Perfect for deep resets or routine maintenance.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl space-y-8">
             <div className="space-y-4">
                {[
                  { name: "Deep Clean Duo", desc: "Bathroom + Kitchen Deep Clean", price: "₹1,299", save: "Save ₹100" },
                  { name: "All-in-One Reset", desc: "Full Home + Laundry + Car", price: "₹3,499", save: "Save ₹400" },
                  { name: "Kitchen King", desc: "Kitchen + Chimney + Fridge", price: "₹1,499", save: "Save ₹200" },
                ].map((bundle, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center group hover:bg-[#6c2bd9]/20 transition-all cursor-pointer">
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg">{bundle.name}</h4>
                      <p className="text-xs text-white/40">{bundle.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#f5b21c]">{bundle.price}</p>
                      <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest">{bundle.save}</p>
                    </div>
                  </div>
                ))}
             </div>
             <button className="w-full py-5 bg-[#6c2bd9] text-white rounded-2xl font-bold">Explore All Bundles</button>
          </div>
        </div>
      </section>

      <footer className="py-24 px-6 text-center border-t border-gray-100 bg-[#FDFCFB]">
        <span className="text-2xl">🪔</span><span className="text-2xl font-serif font-bold italic text-[#0b0120] ml-2">Jinny</span>
        <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-[0.2em]">© 2026 MTB ALPHA Private Limited</p>
      </footer>
    </main>
  );
}
