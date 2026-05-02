import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Newspaper, Mic, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PressPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Newspaper className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Jinny Press Kit</span>
            </div>
            <h1 className="heading-xl">
              Spreading the <br />
              <span className="text-[#6c2bd9]">Magic</span>
            </h1>
            <p className="body-text-dark text-xl max-w-2xl mx-auto">
              Follow our journey as we redefine home services in India. For press inquiries, please reach out to <span className="text-[#6c2bd9] font-bold">press@jinny.in</span>
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#0b0120]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { date: "April 20, 2026", source: "TechCrunch India", title: "Jinny raises $15M to expand AI-powered home services to 10 more cities." },
              { date: "March 15, 2026", source: "The Economic Times", title: "How Jinny is solving the trust gap in the unorganized home service sector." },
              { date: "February 28, 2026", source: "YourStory", title: "MTB ALPHA's Jinny introduces 'Jinny Score' to standardize quality." },
            ].map((news, i) => (
              <div key={i} className="space-y-6 p-8 rounded-[2rem] bg-[#F5F3FF] border border-[#DDD6FE] hover:border-[#6c2bd9]/50 transition-all cursor-pointer">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-40">
                   <span>{news.source}</span>
                   <span>{news.date}</span>
                </div>
                <h3 className="heading-md leading-tight">{news.title}</h3>
                <div className="flex items-center gap-2 text-[#6c2bd9] text-xs font-bold uppercase tracking-widest">
                   <span>Read Article</span>
                   <Globe className="w-3 h-3" />
                </div>
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


