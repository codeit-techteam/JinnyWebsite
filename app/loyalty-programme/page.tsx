import Footer from "../components/Footer";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Trophy, Crown, Gift, Zap } from "lucide-react";
import Navbar from "../components/Navbar";

export default function LoyaltyPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#f5b21c]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Crown className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Jinny Magic Rewards</span>
            </div>
            <h1 className="heading-xl leading-tight">
              Earn magic with <br />
              <span className="text-[#6c2bd9]">Every Booking</span>
            </h1>
            <p className="body-text-on-dark text-xl max-w-2xl mx-auto">
              Our tiered loyalty programme rewards your commitment to a better home. Unlock exclusive perks, faster ETAs, and magical surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#0b0120]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Silver", points: "0-500 pts", perks: ["10% discount on first 5 bookings", "Standard support", "Standard ETA"] },
            { name: "Gold", points: "500-2500 pts", perks: ["15% recurring discount", "Priority support", "Early access to bundles"] },
            { name: "Platinum", points: "2500+ pts", perks: ["20% recurring discount", "Instant refunds", "10-min priority ETA"] },
          ].map((tier, i) => (
            <div key={i} className={`p-12 rounded-[3rem] border-2 flex flex-col items-center text-center space-y-8 ${i === 2 ? 'border-[#f5b21c] bg-[#FFFBEB]' : 'border-gray-100 bg-gray-50'}`}>
              <div className="space-y-2">
                <h3 className="heading-lg">{tier.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-black/40">{tier.points}</p>
              </div>
              <ul className="space-y-4 w-full">
                {tier.perks.map((perk, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium justify-center">
                    <Zap className="w-4 h-4 text-[#6c2bd9]" />
                    {perk}
                  </li>
                ))}
              </ul>
              {i === 2 && (
                 <div className="px-4 py-1 bg-[#f5b21c]/20 border border-[#f5b21c]/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">
                    Top Tier
                 </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/5 text-center space-y-8">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl"></span>
          <span className="text-3xl font-serif font-bold italic tracking-tight">Jinny</span>
        </div>
        <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.2em]">
          © 2026 MTB ALPHA Private Limited · Loyalty Programme
        </p>
      </footer>
    </main>
  );
}


