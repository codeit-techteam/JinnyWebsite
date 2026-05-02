import React from "react";
import { Sparkles, CheckCircle2, Clock, ShieldCheck, Star } from "lucide-react";

export default function BathroomCleaningPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b0120] selection:bg-purple-500/30">
      {/* Navigation */}
      {/* Hero */}
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 bg-[#0b0120] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Premium Service</span>
            </div>
            <h1 className="heading-xl">
              Bathroom <br />
              <span className="text-[#6c2bd9]">Deep Cleaning</span>
            </h1>
            <p className="body-text-dark text-xl max-w-xl">
              Every corner scrubbed, every surface sanitized. Our signature bathroom deep clean restores the magic to your most private space.
            </p>
            
            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#6c2bd9]" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/40">45-60 Mins</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#f5b21c]" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/40">Top Rated</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="heading-md">Starting at</h3>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#f5b21c]">₹499</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Inclusive of all tools</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Floor & Wall Tile Scrubbing",
                "Sanitization of toilet, sink & taps",
                "Mirror & cabinet cleaning",
                "Exhaust fan & light cleaning",
                "Drain cleaning & odor removal"
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

      {/* Why Jinny */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="heading-lg">The Jinny Standard</h2>
            <p className="body-text">We don&apos;t just clean; we restore.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Certified Partners",
                desc: "Only partners with a 4.8+ Jinny Score and specific bathroom certification are assigned."
              },
              {
                icon: Sparkles,
                title: "Eco-Friendly Kits",
                desc: "We use non-toxic, high-grade hospital sanitizers safe for children and pets."
              },
              {
                icon: Clock,
                title: "Magic Speed",
                desc: "The nearest partner arrives within 15 minutes, fully equipped and ready."
              }
            ].map((feature, i) => (
              <div key={i} className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F5F3FF] flex items-center justify-center text-[#6c2bd9]">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="heading-md">{feature.title}</h3>
                <p className="body-text leading-relaxed">{feature.desc}</p>
              </div>
            ))}
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
          © 2026 MTB ALPHA Private Limited · Bathroom Cleaning
        </p>
      </footer>
    </main>
  );
}
