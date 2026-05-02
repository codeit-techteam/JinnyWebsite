import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
                <MessageCircle className="w-3 h-3 text-[#f5b21c]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Get in touch</span>
              </div>
              <h1 className="heading-xl">
                We'd love to <br />
                <span className="text-[#6c2bd9]">Hear from You</span>
              </h1>
              <p className="body-text-dark text-xl max-w-xl">
                Have a question, feedback, or just want to say hi? We're always listening. Our team usually responds within 2 hours.
              </p>
            </div>

            <div className="space-y-8">
               {[
                 { icon: Mail, title: "Email Us", val: "hello@jinny.in" },
                 { icon: MapPin, title: "Our Office", val: "South Delhi, NCR, India" },
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-center p-6 rounded-3xl bg-white/5 border border-white/10 w-fit pr-12">
                    <div className="w-12 h-12 rounded-2xl bg-[#6c2bd9]/20 flex items-center justify-center text-[#6c2bd9]">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{item.title}</p>
                      <p className="text-lg font-bold">{item.val}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] space-y-8 backdrop-blur-xl">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                 <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#6c2bd9] text-sm" />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Email</label>
                 <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#6c2bd9] text-sm" />
               </div>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
                <textarea rows={4} placeholder="How can we help?" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#6c2bd9] text-sm resize-none"></textarea>
             </div>
             <button className="w-full py-5 bg-[#6c2bd9] text-white rounded-2xl font-bold uppercase tracking-widest text-xs active:scale-95 transition-all flex items-center justify-center gap-2">
                <span>Send Message</span>
                <Send className="w-3 h-3" />
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}


