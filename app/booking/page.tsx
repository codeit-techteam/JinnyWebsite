import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, CreditCard, ShieldCheck } from "lucide-react";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left: Checkout Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h1 className="heading-xl">Your <span className="text-[#6c2bd9]">Booking Preview</span></h1>
              <p className="body-text-on-dark text-lg">A display-only overview of how scheduling and payment details will appear at launch.</p>
            </div>

            {/* Address Selection */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#6c2bd9]" />
                <h3 className="heading-md text-xl">Service Address</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-[#6c2bd9] text-left">
                  <div className="w-5 h-5 rounded-full border-2 border-[#6c2bd9] flex items-center justify-center p-1 mt-1">
                    <div className="w-full h-full bg-[#6c2bd9] rounded-full" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Home</p>
                    <p className="text-sm text-white/40">Primary Delhi NCR address on file</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left text-white/40 text-sm">
                  Additional addresses can be added once booking goes live
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] space-y-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#6c2bd9]" />
                <h3 className="heading-md text-xl">Schedule Slot</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Today', 'Tomorrow', '3 May', '4 May'].map((day, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${i === 0 ? 'bg-[#6c2bd9] border-[#6c2bd9]' : 'bg-white/5 border-white/10'} text-center`}>
                    <p className="text-xs uppercase font-bold tracking-widest">{day}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['10:00 AM', '12:30 PM', '03:00 PM', '05:30 PM'].map((time, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${i === 1 ? 'bg-[#6c2bd9] border-[#6c2bd9]' : 'bg-white/5 border-white/10'} text-center`}>
                    <p className="text-sm font-bold">{time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] space-y-6">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-[#6c2bd9]" />
                <h3 className="heading-md text-xl">Payment Method</h3>
              </div>
              <div className="space-y-3">
                <div className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-6 bg-blue-500/20 rounded" />
                    <p className="text-sm font-bold">UPI / Cards / NetBanking</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">Preview</span>
                </div>
                <div className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-6 bg-green-500/20 rounded" />
                    <p className="text-sm font-bold">Cash after service</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">Preview</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Summary Card */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] sticky top-32 shadow-2xl">
              <h3 className="heading-md text-xl mb-8">Booking Summary</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-white">Weekend Deep Clean</p>
                    <p className="text-xs text-white/40">Includes Bathroom & Kitchen</p>
                  </div>
                  <p className="font-bold text-brand-gold">₹ XXX</p>
                </div>
                <div className="pt-6 border-t border-white/5 space-y-3">
                  <div className="flex justify-between text-sm">
                    <p className="text-white/40">Subtotal</p>
                    <p className="text-white">₹ XXX</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-white/40">Taxes & Fees</p>
                    <p className="text-white">₹ XX</p>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-3">
                    <p className="text-white">Total Amount</p>
                    <p className="text-brand-gold">₹ XXXX</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex gap-3 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    Informational Preview
                  </div>
                  <div className="static-info-pill w-full justify-center rounded-[2rem] border border-white/10 bg-white/6 px-6 py-5 text-center text-sm text-white/80">
                    Payment and confirmation will be available soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


