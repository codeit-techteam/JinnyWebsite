import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <nav className="fixed top-0 w-full z-50 bg-[#0b0120]/80 backdrop-blur-xl border-b border-white/5 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white group-hover:-translate-x-1 transition-all" />
            <span className="text-3xl">🪔</span>
            <span className="text-2xl font-serif font-bold italic tracking-tight">Jinny</span>
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#6c2bd9]">Get in Touch</span>
        </div>
      </nav>

      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="heading-xl">Contact the <br /><span className="text-[#6c2bd9]">Magic Team</span></h1>
              <p className="body-text-dark text-xl">Have a question? Need help with a booking? Our team is ready to assist you 24/7.</p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email Us", detail: "hello@jinny.in", label: "For general queries" },
                { icon: Phone, title: "Call Support", detail: "+91 11 4000 0000", label: "Available 24/7" },
                { icon: MapPin, title: "Office", detail: "MTB ALPHA, DLF Cyber City, Gurgaon, Haryana", label: "Headquarters" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6c2bd9]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">{item.label}</p>
                    <h3 className="heading-md text-base">{item.title}</h3>
                    <p className="text-sm font-medium text-white/60">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl space-y-8">
            <div className="space-y-4">
              <h3 className="heading-md">Send us a Message</h3>
              <p className="body-text-dark text-xs">Fill out the form below and we&apos;ll get back to you magically fast.</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#6c2bd9] text-sm" />
                <input type="email" placeholder="Email" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#6c2bd9] text-sm" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#6c2bd9] text-sm" />
              <textarea placeholder="Your message..." rows={4} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#6c2bd9] text-sm resize-none"></textarea>
              <button className="w-full py-5 bg-[#6c2bd9] text-white rounded-2xl font-bold uppercase tracking-widest text-xs active:scale-95 transition-all">Send Message</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 px-6 text-center border-t border-white/5 bg-[#0b0120]">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">© 2026 MTB ALPHA Private Limited</p>
      </footer>
    </main>
  );
}
