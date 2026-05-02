import React from "react";
import { Sparkles, CheckCircle2, Clock, Star, Car } from "lucide-react";

export default function CarCleaningPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b0120] selection:bg-purple-500/30">
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 bg-[#0b0120] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Car className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Showroom Shine</span>
            </div>
            <h1 className="heading-xl">Professional <br /><span className="text-[#6c2bd9]">Car Detailing</span></h1>
            <p className="body-text-dark text-xl max-w-xl">From exterior waterless wash to interior deep sanitization. We bring the garage to your driveway.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl space-y-8">
            <div className="flex justify-between items-center"><h3 className="heading-md">Starting at</h3><div className="text-right"><p className="text-3xl font-bold text-[#f5b21c]">₹399</p></div></div>
            <div className="space-y-4">
              {["Waterless eco-friendly wash", "Interior vacuuming & dashboard polish", "Tire dressing & rim cleaning", "Glass streak-free finish", "AC vent sanitization"].map((item, i) => (
                <div key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#6c2bd9]" /><span className="text-sm text-white/60">{item}</span></div>
              ))}
            </div>
            <button className="w-full py-5 bg-[#f5b21c] text-[#0b0120] rounded-2xl font-bold text-lg">Book Now 🪔</button>
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
