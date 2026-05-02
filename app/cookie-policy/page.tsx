import Footer from "../components/Footer";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Cookie, Info } from "lucide-react";
import Navbar from "../components/Navbar";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h1 className="heading-xl">Cookie Policy</h1>
            <p className="body-text-dark">Last updated: May 1, 2026</p>
          </div>

          <div className="space-y-12">
            {[
              { title: "What are cookies?", content: "Cookies are small text files stored on your device to improve your browsing experience and remember your preferences." },
              { title: "How we use cookies", content: "We use essential cookies for login security, preference cookies to remember your city, and analytical cookies to understand how you interact with our platform." },
              { title: "Managing cookies", content: "You can manage or disable cookies through your browser settings. However, some parts of the Jinny platform may not function correctly without them." }
            ].map((section, i) => (
              <div key={i} className="space-y-4">
                <h2 className="heading-md text-[#6c2bd9]">{section.title}</h2>
                <p className="body-text-dark leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 text-center border-t border-white/5">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">© 2026 MTB ALPHA Private Limited</p>
      </footer>
    </main>
  );
}


