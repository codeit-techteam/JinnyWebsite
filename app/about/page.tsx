import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Target, Users, ShieldCheck, Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Sparkles className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">The Magic Behind the Genie</span>
            </div>
            <h1 className="heading-xl leading-tight">
              We&apos;re redefining <br />
              <span className="text-[#6c2bd9]">Home Services</span>
            </h1>
            <p className="body-text-dark text-xl max-w-2xl mx-auto">
              Jinny isn&apos;t just an app; it&apos;s your home&apos;s personal genie. We combine cutting-edge AI with a human-first approach to make home maintenance effortless, transparent, and magical.
            </p>
          </div>
        </div>
      </section>

      {/* Vision/Mission */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#0b0120]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="heading-lg">Our Vision</h2>
            <p className="body-text text-lg">
              We believe that in a world moving faster than ever, your home should be your sanctuary, not a source of stress. Our mission is to give people their time back by handling the chores that weigh them down, delivered with a level of quality and trust never seen before in India.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <h3 className="heading-md text-[#6c2bd9]">15 Mins</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-black/40">Average Arrival</p>
              </div>
              <div className="space-y-2">
                <h3 className="heading-md text-[#6c2bd9]">10k+</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-black/40">Waitlist Members</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-[#6c2bd9] rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 opacity-10" />
            <div className="relative bg-[#F5F3FF] p-12 rounded-[3rem] border border-[#DDD6FE] space-y-8">
              <Target className="w-12 h-12 text-[#6c2bd9]" />
              <h3 className="heading-md">The AI Difference</h3>
              <p className="body-text">
                By using computer vision for quality checks and smart routing algorithms, we ensure that every Jinny partner is exactly where they need to be, when they need to be there, delivering a perfect score every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0b0120]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h2 className="heading-lg">Our Core Values</h2>
            <p className="body-text-dark max-w-2xl mx-auto">The principles that guide every decision we make at Jinny.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Trust Over Everything",
                desc: "Every partner is Aadhaar verified, police cleared, and Jinny certified. Your safety is our non-negotiable priority."
              },
              {
                icon: Users,
                title: "Partner Prosperity",
                desc: "We don't just provide jobs; we build careers. Higher earnings, social security, and health benefits for every Jinny partner."
              },
              {
                icon: Heart,
                title: "Customer Magic",
                desc: "We aim for more than 'satisfied'. We want every interaction with Jinny to feel like a small moment of magic."
              }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#6c2bd9]/50 transition-all group">
                <value.icon className="w-10 h-10 text-[#6c2bd9] mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="heading-md mb-4">{value.title}</h3>
                <p className="body-text-dark text-sm leading-relaxed">{value.desc}</p>
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


