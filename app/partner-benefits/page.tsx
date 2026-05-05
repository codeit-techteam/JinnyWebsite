import Footer from "../components/Footer";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Heart, ShieldCheck, Wallet, Zap, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";

export default function PartnerBenefitsPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Sparkles className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">More than a Platform</span>
            </div>
            <h1 className="heading-xl">
              Partnering for <br />
              <span className="text-[#6c2bd9]">A Better Future</span>
            </h1>
            <p className="body-text-on-dark text-xl max-w-2xl">
              We believe in shared success. Jinny partners receive a comprehensive benefits package that ensures safety, growth, and financial stability.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#0b0120]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Health Insurance", desc: "Full coverage for you and your immediate family members." },
              { icon: Wallet, title: "Weekly Payouts", desc: "No more waiting. Get your earnings settled every Monday morning." },
              { icon: Heart, title: "Social Security", desc: "Provident fund and accidental insurance for all active partners." },
              { icon: Zap, title: "Fuel Allowance", desc: "Extra stipends for partners maintaining long-distance service zones." },
              { icon: TrendingUp, title: "Skill Upgrades", desc: "Free certifications and English speaking workshops." },
              { icon: Sparkles, title: "Family Stipends", desc: "Educational support for children of top-performing partners." },
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-[3rem] bg-[#F5F3FF] border border-[#DDD6FE] space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] flex items-center justify-center text-[#6c2bd9] shadow-sm">
                   <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-md">{benefit.title}</h3>
                <p className="body-text text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/5 text-center space-y-8 bg-[#0b0120]">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl"></span>
          <span className="text-3xl font-serif font-bold italic tracking-tight">Jinny</span>
        </div>
        <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.2em]">
          © 2026 MTB ALPHA Private Limited · Partner Benefits
        </p>
      </footer>
    </main>
  );
}


