import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Smartphone, TrendingUp, ShieldCheck, Heart } from "lucide-react";

export default function PartnerAppPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b0120]/80 backdrop-blur-xl border-b border-white/5 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white group-hover:-translate-x-1 transition-all" />
            <span className="text-3xl">🪔</span>
            <span className="text-2xl font-serif font-bold italic tracking-tight">Jinny</span>
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5b21c]">Partner Portal</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Smartphone className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Jinny Partner App</span>
            </div>
            <h1 className="heading-xl">
              Earnings at your <br />
              <span className="text-[#6c2bd9]">Finger Tips</span>
            </h1>
            <p className="body-text-dark text-xl max-w-xl">
              Managed earnings, live navigation, and real-time support. The Jinny Partner App is designed to help you succeed as a home service professional.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] space-y-10">
             <div className="space-y-6">
                {[
                  { icon: TrendingUp, title: "Track Earnings", desc: "See your daily, weekly, and monthly earnings in real-time." },
                  { icon: ShieldCheck, title: "Smart Verification", desc: "Easy check-ins and photo-based task completion." },
                  { icon: Heart, title: "Partner Support", desc: "Dedicated 24/7 helpline for any on-site issues." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#6c2bd9]/10 flex items-center justify-center text-[#6c2bd9]">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="heading-md text-base">{item.title}</h3>
                      <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
             <button className="w-full py-5 bg-[#6c2bd9] text-white rounded-2xl font-bold uppercase tracking-widest text-xs active:scale-95 transition-all">
                Download Partner App (APK)
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 text-center space-y-8 bg-[#0b0120]">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl">🪔</span>
          <span className="text-3xl font-serif font-bold italic tracking-tight">Jinny</span>
        </div>
        <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.2em]">
          © 2026 MTB ALPHA Private Limited · Partner App
        </p>
      </footer>
    </main>
  );
}
