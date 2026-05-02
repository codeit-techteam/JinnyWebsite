import React from "react";
import { Sparkles, CheckCircle2, Clock, ShieldCheck, Star, Home } from "lucide-react";

export default function FullHomeCleaningPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b0120] selection:bg-purple-500/30">
      {/* Navigation */}
      {/* Hero */}
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 bg-[#0b0120] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#6c2bd9]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Home className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">The Complete Reset</span>
            </div>
            <h1 className="heading-xl">
              Full Home <br />
              <span className="text-[#6c2bd9]">Deep Cleaning</span>
            </h1>
            <p className="body-text-dark text-xl max-w-xl">
              The ultimate transformation. Every room, every corner, every speck of dust. We don&apos;t leave until your home feels brand new.
            </p>
            
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#6c2bd9]" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/40">4-6 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#f5b21c]" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/40">Best Value</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="heading-md">Starting at</h3>
              <div className="text-right">
                <p className="text-4xl font-bold text-[#f5b21c]">₹2,999</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Full Team Deployment</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Living, Bedroom & Balcony Deep Clean",
                "Full Kitchen & Bathroom Deep Clean",
                "Upholstery Vacuuming & Dusting",
                "Window & Fan detailing",
                "Full floor mopping & polishing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6c2bd9]" />
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-6 bg-[#f5b21c] text-[#0b0120] rounded-2xl font-bold text-lg active:scale-95 transition-all shadow-xl shadow-yellow-950/20">
              Transform my Home 🪔
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-100 text-center space-y-8 bg-[#FDFCFB]">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl">🪔</span>
          <span className="text-3xl font-serif font-bold italic tracking-tight text-[#0b0120]">Jinny</span>
        </div>
        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">
          © 2026 MTB ALPHA Private Limited · Full Home Cleaning
        </p>
      </footer>
    </main>
  );
}
