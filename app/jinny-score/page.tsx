import React from "react";
import { Sparkles, Trophy, Star, ShieldCheck, Activity } from "lucide-react";

export default function JinnyScorePage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      {/* Navigation */}
      {/* Hero */}
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="space-y-6">
            <h1 className="heading-xl">
              The <span className="text-[#6c2bd9]">Jinny Score</span>
            </h1>
            <p className="body-text-dark text-xl max-w-2xl mx-auto">
              A task-level quality rating for every partner — calculated from AI photo verification and real-time customer feedback.
            </p>
          </div>

          <div className="flex justify-center gap-4">
             <div className="w-24 h-24 rounded-full border-4 border-[#6c2bd9] flex items-center justify-center bg-[#6c2bd9]/10">
                <span className="heading-lg">4.9</span>
             </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white text-[#0b0120]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Trophy, title: "Performance Based", desc: "Partners earn points for quality, punctuality, and professionalism." },
            { icon: Activity, title: "AI Verification", desc: "Our AI analyzes before/after photos to verify cleanliness standards." },
            { icon: ShieldCheck, title: "Verified Reviews", desc: "100% of reviews are from customers who completed a booking." },
          ].map((item, i) => (
            <div key={i} className="space-y-6 p-8 rounded-[2rem] bg-[#F5F3FF] border border-[#DDD6FE]">
              <item.icon className="w-10 h-10 text-[#6c2bd9]" />
              <h3 className="heading-md">{item.title}</h3>
              <p className="body-text text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 text-center space-y-8">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl">🪔</span>
          <span className="text-3xl font-serif font-bold italic tracking-tight">Jinny</span>
        </div>
        <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.2em]">
          © 2026 MTB ALPHA Private Limited · Jinny Score
        </p>
      </footer>
    </main>
  );
}
