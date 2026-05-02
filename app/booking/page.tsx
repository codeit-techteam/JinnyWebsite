import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, Clock, MapPin, CreditCard, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left: Checkout Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h1 className="heading-xl">Finalize your <span className="text-[#6c2bd9]">Booking</span></h1>
              <p className="body-text-dark text-lg">Select your preferred slot and confirm your magical experience.</p>
            </div>

            {/* Address Selection */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#6c2bd9]" />
                <h3 className="heading-md text-xl">Service Address</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <button className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-[#6c2bd9] text-left">
                  <div className="w-5 h-5 rounded-full border-2 border-[#6c2bd9] flex items-center justify-center p-1 mt-1">
                    <div className="w-full h-full bg-[#6c2bd9] rounded-full" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Home</p>
                    <p className="text-sm text-white/40">Select an address from your Delhi NCR profile</p>
                  </div>
                </button>
                <button className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left text-white/40 text-sm hover:bg-white/10 transition-all">
                  + Add new address
                </button>
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
                  <button key={i} className={`p-4 rounded-xl border ${i === 0 ? 'bg-[#6c2bd9] border-[#6c2bd9]' : 'bg-white/5 border-white/10'} text-center`}>
                    <p className="text-xs uppercase font-bold tracking-widest">{day}</p>
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['10:00 AM', '12:30 PM', '03:00 PM', '05:30 PM'].map((time, i) => (
                  <button key={i} className={`p-4 rounded-xl border ${i === 1 ? 'bg-[#6c2bd9] border-[#6c2bd9]' : 'bg-white/5 border-white/10'} text-center`}>
                    <p className="text-sm font-bold">{time}</p>
                  </button>
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
                <button className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-6 bg-blue-500/20 rounded" />
                    <p className="text-sm font-bold">UPI / Cards / NetBanking</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20" />
                </button>
                <button className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-6 bg-green-500/20 rounded" />
                    <p className="text-sm font-bold">Cash after service</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20" />
                </button>
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
                    Secure Checkout
                  </div>
                  <button className="w-full py-6 bg-[#6c2bd9] text-white rounded-[2rem] font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(108,43,217,0.4)]">
                    Pay & Confirm ✓
                  </button>
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


