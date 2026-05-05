"use client";

import React from "react";
import {
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Search,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SupportPage() {
  const faqs = [
    {
      q: "How do I cancel a booking?",
      a: "You can cancel any booking via the 'My Bookings' section in the Jinny app. Free cancellation is available up to 2 hours before the scheduled time.",
    },
    {
      q: "What is the Jinny Score?",
      a: "The Jinny Score is our proprietary quality metric for partners, ensuring you always get top-rated service.",
    },
    {
      q: "Do I need to provide cleaning supplies?",
      a: "No, Jinny partners arrive fully equipped with premium, eco-friendly cleaning kits and advanced tools.",
    },
    {
      q: "Is there a subscription fee?",
      a: "No, Jinny is a pay-per-service platform. You only pay for the services you book, with no hidden monthly charges.",
    },
  ];

  const categories = [
    {
      icon: MessageCircle,
      title: "Chat with Us",
      desc: "In-app live chat is launching soon for instant help during bookings.",
      meta: "Launching soon",
    },
    {
      icon: Phone,
      title: "Call Support",
      desc: "Phone support will be available for active bookings and urgent issues.",
      meta: "At launch",
    },
    {
      icon: Mail,
      title: "Email Us",
      desc: "Write to hello@jinny.in and our team will respond as quickly as possible.",
      meta: "Best for detailed queries",
    },
    {
      icon: FileText,
      title: "Help Articles",
      desc: "Use the search below to filter common questions and find answers faster.",
      meta: "Instant answers",
    },
  ];
  const [query, setQuery] = React.useState("");
  const [openFaq, setOpenFaq] = React.useState(0);

  const filteredFaqs = faqs.filter(({ q, a }) => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return true;
    }

    return q.toLowerCase().includes(term) || a.toLowerCase().includes(term);
  });

  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Sparkles className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Jinny Support</span>
            </div>
            <h1 className="heading-xl leading-tight max-w-3xl mx-auto">
              How can we <br />
              <span className="text-[#6c2bd9]">help you today?</span>
            </h1>
            <p className="body-text-on-dark max-w-2xl mx-auto text-base md:text-lg">
              Search common questions, explore support options, or reach out to the Jinny team using the channel that fits your issue best.
            </p>
            
            <div className="max-w-2xl mx-auto relative group pt-4">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/35 group-focus-within:text-[#6c2bd9] transition-colors" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search support articles, topics, or questions..."
                className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#6c2bd9]/60 focus:ring-4 focus:ring-[#6c2bd9]/10 transition-all"
              />
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white/35">
                {query.trim()
                  ? `${filteredFaqs.length} matching question${filteredFaqs.length === 1 ? "" : "s"}`
                  : "Type to instantly filter common questions"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#0b0120]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-lg">Choose a Support Channel</h2>
            <p className="body-text max-w-2xl mx-auto">
              Pick the fastest route for your issue. For most questions, the FAQ search below will get you an answer immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="p-8 rounded-[2rem] bg-white border border-[#e7ddfb] shadow-[0_12px_30px_rgba(17,12,34,0.04)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(108,43,217,0.08)] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#f5f0ff] border border-[#e3d7ff] flex items-center justify-center mb-6 text-[#6c2bd9]">
                  <cat.icon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6c2bd9]">
                    {cat.meta}
                  </p>
                  <h3 className="heading-md text-[#140a24]">{cat.title}</h3>
                  <p className="body-text text-sm">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="popular-questions" className="pb-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#0b0120]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="heading-lg">Popular Questions</h2>
            <p className="body-text">Quick answers to common queries, filtered as you type above.</p>
          </div>

          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 rounded-3xl bg-white border border-[#DDD6FE] text-center space-y-3">
                <h3 className="heading-md">No matching questions found</h3>
                <p className="body-text">
                  Try a different keyword, or email us at `hello@jinny.in` for help.
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const index = faqs.findIndex((item) => item.q === faq.q);
                const isOpen = openFaq === index;

                return (
                  <button
                    type="button"
                    key={faq.q}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full p-8 rounded-3xl bg-[#F5F3FF] border border-[#DDD6FE] text-left space-y-4 hover:border-[#cdb9fb] transition-all"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="heading-md">{faq.q}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#6c2bd9] transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                    {isOpen ? (
                      <p className="body-text text-sm leading-relaxed">{faq.a}</p>
                    ) : null}
                  </button>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}


