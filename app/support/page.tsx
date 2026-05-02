import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, MessageCircle, Phone, Mail, FileText, Search, Plus } from "lucide-react";

export default function SupportPage() {
  const categories = [
    { icon: MessageCircle, title: "Chat with Us", desc: "Available 24/7 via the Jinny app." },
    { icon: Phone, title: "Call Support", desc: "Priority support for active bookings." },
    { icon: Mail, title: "Email Us", desc: "Response within 24 hours for all queries." },
    { icon: FileText, title: "Help Articles", desc: "Browse through our extensive library." },
  ];

  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b0120]/80 backdrop-blur-xl border-b border-white/5 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white group-hover:-translate-x-1 transition-all" />
            <span className="text-3xl">🪔</span>
            <span className="text-2xl font-serif font-bold italic tracking-tight">Jinny</span>
          </Link>
          <button className="px-6 py-2 bg-[#6c2bd9] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-purple-900/20">
            Live Chat
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Sparkles className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Jinny Support</span>
            </div>
            <h1 className="heading-xl">
              How can we <br />
              <span className="text-[#6c2bd9]">help you today?</span>
            </h1>
            
            <div className="max-w-xl mx-auto relative group pt-8">
              <Search className="absolute left-6 top-[calc(2rem+1.25rem)] w-5 h-5 text-white/20 group-focus-within:text-[#6c2bd9] transition-colors" />
              <input 
                type="text" 
                placeholder="Search for articles, topics, or queries..."
                className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-sm focus:outline-none focus:border-[#6c2bd9] focus:ring-4 focus:ring-[#6c2bd9]/10 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#6c2bd9]/50 transition-all group cursor-pointer">
                <cat.icon className="w-8 h-8 text-[#6c2bd9] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="heading-md mb-2">{cat.title}</h3>
                <p className="body-text-dark text-xs">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white text-[#0b0120]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="heading-lg">Popular Questions</h2>
            <p className="body-text">Quick answers to common queries.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How do I cancel a booking?", a: "You can cancel any booking via the 'My Bookings' section in the Jinny app. Free cancellation is available up to 2 hours before the scheduled time." },
              { q: "What is the Jinny Score?", a: "The Jinny Score is our proprietary quality metric for partners, ensuring you always get top-rated service." },
              { q: "Do I need to provide cleaning supplies?", a: "No, Jinny partners arrive fully equipped with premium, eco-friendly cleaning kits and advanced tools." },
              { q: "Is there a subscription fee?", a: "No, Jinny is a pay-per-service platform. You only pay for the services you book, with no hidden monthly charges." },
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#F5F3FF] border border-[#DDD6FE] space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="heading-md">{faq.q}</h3>
                  <Plus className="w-5 h-5 text-[#6c2bd9]" />
                </div>
                <p className="body-text text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 text-center space-y-8 bg-[#0b0120]">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl">🪔</span>
          <span className="text-3xl font-serif font-bold italic tracking-tight">Jinny</span>
        </div>
        <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.2em]">
          © 2026 MTB ALPHA Private Limited · Support
        </p>
      </footer>
    </main>
  );
}
