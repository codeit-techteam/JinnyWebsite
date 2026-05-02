import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Smartphone, Download, ShieldCheck, Zap } from "lucide-react";

export default function DownloadAppPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 30%, #2a0a5e 0%, #150835 40%, #0b0120 100%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#6c2bd9]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Smartphone className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Partner App</span>
            </div>
            <h1 className="heading-xl">Get the <span className="text-[#6c2bd9]">Partner App</span></h1>
            <p className="body-text-dark text-xl max-w-2xl mx-auto">
              Ready to start earning? Download the official Jinny Partner app and join the magic.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] max-w-xl mx-auto backdrop-blur-xl shadow-2xl space-y-10">
            <div className="w-24 h-24 bg-[#6c2bd9]/20 rounded-[2.5rem] flex items-center justify-center mx-auto text-[#6c2bd9] animate-pulse">
              <Download className="w-10 h-10" />
            </div>
            
            <div className="space-y-4">
              <button className="w-full py-6 bg-[#f5b21c] text-black rounded-[2rem] font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(245,178,28,0.3)]">
                <Download className="w-6 h-6" />
                Download APK (24MB)
              </button>
              <p className="text-[10px] text-white/20 font-medium tracking-widest uppercase">Version 1.0.2 • Requires Android 8.0+</p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 text-left">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <p className="text-[11px] font-medium text-white/40 leading-tight">Verified Safe & Secure</p>
              </div>
              <div className="flex items-center gap-3 text-left">
                <Zap className="w-5 h-5 text-blue-400" />
                <p className="text-[11px] font-medium text-white/40 leading-tight">Fast One-tap Setup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


