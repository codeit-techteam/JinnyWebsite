import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Coffee, GraduationCap, Heart, Rocket } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Rocket className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">We are hiring</span>
            </div>
            <h1 className="heading-xl">
              Help us build the <br />
              <span className="text-[#6c2bd9]">Future of Work</span>
            </h1>
            <p className="body-text-on-dark text-xl max-w-2xl mx-auto">
              Join a team of dreamers and doers building the world's most trusted home service platform. We are always looking for people who care.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#0b0120]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Coffee, title: "Uncapped Time Off", desc: "We trust you to manage your own time and take breaks when you need them." },
              { icon: GraduationCap, title: "Learning Budget", desc: "Monthly stipend for books, courses, or any skill you want to learn." },
              { icon: Heart, title: "Full Health Cover", desc: "Comprehensive insurance for you and your immediate family members." },
            ].map((benefit, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-[#6c2bd9]">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-md text-base">{benefit.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{benefit.desc}</p>
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


