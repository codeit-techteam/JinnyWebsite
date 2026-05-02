import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Building2, Users, PieChart, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Building2 className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Enterprise Solutions</span>
            </div>
            <h1 className="heading-xl">
              Home Care as <br />
              <span className="text-[#6c2bd9]">Employee Benefit</span>
            </h1>
            <p className="body-text-dark text-xl max-w-xl">
              Gift your team the most valuable luxury of all: Time. Jinny for Business offers managed home services for forward-thinking organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Users, title: "Employee Perks", desc: "Special corporate rates for your entire workforce." },
              { icon: PieChart, title: "Admin Portal", desc: "Consolidated billing and usage analytics." },
              { icon: ShieldCheck, title: "Priority Support", desc: "Dedicated account managers for your team." },
              { icon: Sparkles, title: "Event Service", desc: "On-demand cleaning for corporate events." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-4">
                <item.icon className="w-8 h-8 text-[#6c2bd9]" />
                <h3 className="heading-md text-base">{item.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </main>
  );
}


