import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, CheckCircle2, Clock, ShieldCheck, Star, Utensils } from "lucide-react";

export default function KitchenCleaningPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b0120] selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 text-[#0b0120]/40 group-hover:text-[#0b0120] group-hover:-translate-x-1 transition-all" />
            <span className="text-3xl">🪔</span>
            <span className="text-2xl font-serif font-bold italic tracking-tight">Jinny</span>
          </Link>
          <button className="px-6 py-2 bg-[#6c2bd9] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-purple-900/20">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 bg-[#0b0120] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Utensils className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Chef-Grade Cleaning</span>
            </div>
            <h1 className="heading-xl">
              Kitchen <br />
              <span className="text-[#6c2bd9]">Deep Cleaning</span>
            </h1>
            <p className="body-text-dark text-xl max-w-xl">
              From degreasing chimneys to scrubbing grout, we restore your kitchen to its factory-fresh shine. Magic for the heart of your home.
            </p>
            
            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#6c2bd9]" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/40">90-120 Mins</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#f5b21c]" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/40">Premium Care</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="heading-md">Starting at</h3>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#f5b21c]">₹899</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Degreasing included</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Chimney & Exhaust Degreasing",
                "Cabinet exterior & interior scrubbing",
                "Countertop & Grout deep clean",
                "Appliance exterior detailing",
                "Floor sanitization & shine"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6c2bd9]" />
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-5 bg-[#f5b21c] text-[#0b0120] rounded-2xl font-bold text-lg active:scale-95 transition-all shadow-xl shadow-yellow-950/20">
              Book the Magic 🪔
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
          © 2026 MTB ALPHA Private Limited · Kitchen Cleaning
        </p>
      </footer>
    </main>
  );
}
