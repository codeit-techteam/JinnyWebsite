/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
    setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`Jinny contact form message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@jinny.in?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
                We&apos;d love to <br />
                <span className="text-[#6c2bd9]">Hear from You</span>
              </h1>
              <p className="body-text-on-dark text-xl max-w-xl">
                Have a question, feedback, or just want to say hi? We&apos;re always listening. Our team usually responds within 2 hours.
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

          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 p-12 rounded-[3rem] space-y-8 backdrop-blur-xl"
          >
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                 <input
                   id="name"
                   name="name"
                   type="text"
                   value={formData.name}
                   onChange={handleChange}
                   placeholder="John Doe"
                   className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#6c2bd9]/60 focus:ring-4 focus:ring-[#6c2bd9]/10 transition-all"
                 />
               </div>
               <div className="space-y-2">
                 <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Email</label>
                 <input
                   id="email"
                   name="email"
                   type="email"
                   value={formData.email}
                   onChange={handleChange}
                   placeholder="john@example.com"
                   className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#6c2bd9]/60 focus:ring-4 focus:ring-[#6c2bd9]/10 transition-all"
                 />
               </div>
             </div>
             <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
               <textarea
                 id="message"
                 name="message"
                 rows={4}
                 value={formData.message}
                 onChange={handleChange}
                 placeholder="How can we help?"
                 className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#6c2bd9]/60 focus:ring-4 focus:ring-[#6c2bd9]/10 transition-all resize-none"
               />
             </div>
             <div className="space-y-3">
               <button
                 type="submit"
                 className="w-full rounded-2xl border border-[#6c2bd9]/30 bg-[#6c2bd9] px-6 py-5 text-center text-sm font-semibold text-white transition-all hover:bg-[#5b23b9] active:scale-[0.99]"
               >
                 Send message
               </button>
               {error ? (
                 <p className="text-sm text-red-300">{error}</p>
               ) : null}
               {submitted ? (
                 <p className="text-sm text-white/75">
                   Your email app should open with this message pre-filled to `hello@jinny.in`.
                 </p>
               ) : (
                 <p className="text-sm text-white/55">
                   No backend needed. This sends your message through your default email app.
                 </p>
               )}
             </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}


