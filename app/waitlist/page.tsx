"use client";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CustomSelect from "@/app/components/CustomSelect";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 30%, #2a0a5e 0%, #150835 40%, #0b0120 100%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#6c2bd9]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <span className="text-xs"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">EARLY ACCESS</span>
            </div>
            <h1 className="heading-xl">
              Be first. <br />
              <span className="text-[#6c2bd9]">Get early access.</span>
            </h1>
            <p className="body-text-on-dark max-w-2xl mx-auto text-lg">
              Jinny is coming to Delhi NCR soon. Join our waitlist and be the first to know when we launch in your neighbourhood - plus get an exclusive early-access offer.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[3rem] space-y-6 max-w-2xl mx-auto backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#f5b21c]/70 focus:ring-4 focus:ring-[#f5b21c]/10 text-sm placeholder:text-white/30 transition-all" />
              <input type="text" placeholder="Mobile number" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#f5b21c]/70 focus:ring-4 focus:ring-[#f5b21c]/10 text-sm placeholder:text-white/30 transition-all" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CustomSelect
                placeholder="Select your city"
                className="waitlist-select"
                theme="dark"
                options={[
                  { value: 'gurugram', label: 'Gurugram' },
                  { value: 'south-delhi', label: 'South Delhi' },
                  { value: 'noida', label: 'Noida' },
                  { value: 'dwarka', label: 'Dwarka' },
                  { value: 'east-delhi', label: 'East Delhi' },
                  { value: 'west-delhi', label: 'West Delhi' },
                  { value: 'north-delhi', label: 'North Delhi' },
                  { value: 'faridabad', label: 'Faridabad' },
                  { value: 'ghaziabad', label: 'Ghaziabad' },
                  { value: 'other', label: 'Other' },
                ]}
              />
              <CustomSelect
                placeholder="I am joining as"
                className="waitlist-select"
                theme="dark"
                options={[
                  { value: 'customer', label: 'Customer - I need home help' },
                  { value: 'partner', label: 'Partner - I want to earn with Jinny' },
                  { value: 'business', label: 'Business - I need regular services' },
                ]}
              />
            </div>
            <input type="text" placeholder="Email address (optional - for launch updates)" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#f5b21c]/70 focus:ring-4 focus:ring-[#f5b21c]/10 text-sm placeholder:text-white/30 transition-all" />

            <button className="w-full py-6 bg-[#f5b21c] text-[#0b0120] rounded-[2rem] font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(245,178,28,0.3)]">
              Join the waitlist - get early access
            </button>

            <p className="text-[10px] text-white/20 font-medium">No spam. No calls. Just a message when Jinny is ready for you.</p>
          </div>

          <div className="flex justify-center gap-12 md:gap-24 pt-8">
            <div className="space-y-1">
              <div className="heading-md text-[#f5b21c]">500+</div>
              <div className="section-label text-white/40">Already on waitlist</div>
            </div>
            <div className="space-y-1">
              <div className="heading-md text-[#f5b21c]">4</div>
              <div className="section-label text-white/40">Launch zones - NCR</div>
            </div>
            <div className="space-y-1">
              <div className="heading-md text-[#f5b21c]">Soon</div>
              <div className="section-label text-white/40">Going live</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


