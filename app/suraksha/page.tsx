import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, ShieldCheck, Heart, UserCheck, PhoneCall } from "lucide-react";

export default function SurakshaPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <nav className="fixed top-0 w-full z-50 bg-[#0b0120]/80 backdrop-blur-xl border-b border-white/5 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white group-hover:-translate-x-1 transition-all" />
            <span className="text-3xl">🪔</span>
            <span className="text-2xl font-serif font-bold italic tracking-tight">Jinny</span>
          </Link>
          <div className="px-6 py-2 bg-[#6c2bd9] text-white rounded-full text-xs font-bold uppercase tracking-widest">Safety Hub</div>
        </div>
      </nav>

      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <ShieldCheck className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Jinny Suraksha</span>
            </div>
            <h1 className="heading-xl">Your safety is <br /><span className="text-[#6c2bd9]">Our Guarantee</span></h1>
            <p className="body-text-dark text-xl max-w-2xl mx-auto">Jinny Suraksha is our comprehensive safety program designed to protect both our customers and our partners.</p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white text-[#0b0120]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { icon: UserCheck, title: "Background Checks", desc: "Every partner undergo Aadhaar verification, PAN card check, and police clearance review." },
            { icon: ShieldCheck, title: "Service Insurance", desc: "Every booking is covered by insurance for any accidental damages to your property." },
            { icon: PhoneCall, title: "Emergency SOS", desc: "The Jinny app includes a one-tap SOS button for both customers and partners during active bookings." },
            { icon: Heart, title: "Health Protocols", desc: "Partners follow strict sanitization and health protocols, including temperature checks." }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-[#F5F3FF] border border-[#DDD6FE] space-y-6">
              <item.icon className="w-10 h-10 text-[#6c2bd9]" />
              <h3 className="heading-md">{item.title}</h3>
              <p className="body-text text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-24 px-6 text-center border-t border-white/5 bg-[#0b0120]">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">© 2026 MTB ALPHA Private Limited</p>
      </footer>
    </main>
  );
}
