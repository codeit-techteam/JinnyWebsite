import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Wallet, Zap, Calendar, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EarlySalaryPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Wallet className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Jinny Early Salary</span>
            </div>
            <h1 className="heading-xl">
              Access your earnings <br />
              <span className="text-[#6c2bd9]">When you need them</span>
            </h1>
            <p className="body-text-dark text-xl max-w-2xl mx-auto">
              No more waiting for the end of the month. Jinny partners can withdraw a portion of their earned wages instantly for emergencies or planned expenses.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#0b0120]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Zap, title: "Instant Transfer", desc: "Money hits your bank account in seconds, not days." },
            { icon: Calendar, title: "Flexibility", desc: "Withdraw anytime after completing a verified task." },
            { icon: ShieldCheck, title: "Zero Interest", desc: "This is your money, already earned. No interest or hidden fees." },
          ].map((item, i) => (
            <div key={i} className="space-y-6 p-8 rounded-[2rem] bg-[#F5F3FF] border border-[#DDD6FE]">
              <item.icon className="w-10 h-10 text-[#6c2bd9]" />
              <h3 className="heading-md">{item.title}</h3>
              <p className="body-text text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}


