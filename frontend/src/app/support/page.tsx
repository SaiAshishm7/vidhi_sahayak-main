"use client";

import { useState } from "react";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";

const faqs = [
  {
    q: "How do I create a legal document?",
    a: "Go to the Documents section, select a category (e.g., Rental Agreement, Affidavit), and fill in the form. A live preview will update as you type, and you can print or save as PDF.",
  },
  {
    q: "How do I book a lawyer consultation?",
    a: "Visit the Consultation page, browse verified lawyers by practice area, location, and fee range. Click 'Book Call' to schedule a private audio/video session.",
  },
  {
    q: "Is the AI legal advice legally binding?",
    a: "No. VidhiSahayak provides general legal information and guidance based on Indian legislation (IPC, CrPC, CPC, etc.). It is not a substitute for formal legal counsel.",
  },
  {
    q: "Which languages are supported?",
    a: "The AI assistant supports 12+ Indian languages including English, Hindi, Telugu, Tamil, Bengali, Malayalam, Kannada, Gujarati, Punjabi, Marathi, and Urdu.",
  },
  {
    q: "Is my data secure and private?",
    a: "Yes. All communications use 256-bit SSL encryption. Chat sessions and document drafts are confidential and accessible only to your account.",
  },
  {
    q: "How are lawyers verified?",
    a: "Lawyers submit their State Bar Council enrollment details. Our verification team cross-checks credentials before granting 'Verified' status on the portal.",
  },
];

const contactCards = [
  {
    title: "24/7 AI Legal Counsel",
    description: "Get instant answers grounded in Indian laws from our virtual assistant.",
    href: "/chat",
    cta: "Launch Virtual Assistant →",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
      </svg>
    ),
    badge: "Instant 24/7",
  },
  {
    title: "Email Support",
    description: "For complex platform queries or technical assistance, email our support team.",
    href: "mailto:support@vidhisahayak.in",
    cta: "Send Email Message →",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    badge: "24h Response",
  },
  {
    title: "Browse Legal Topics",
    description: "Explore step-by-step guides, required documents, and submission offices.",
    href: "/categories",
    cta: "View All Categories →",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    badge: "Knowledge Base",
  },
];

export default function SupportPage() {
  const [status, setStatus] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");

    try {
      await apiClient.post("/support", { name, email, message });
      setStatus("✅ Message sent successfully! Our team will respond within 24 hours.");
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setStatus(`⚠️ Could not send message: ${msg}`);
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ─── Header ────────────────────────────────────────── */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#e65100] uppercase tracking-widest">
            Help &amp; Customer Care
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1a237e] mt-1 tracking-tight">
            VidhiSahayak Support Portal
          </h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Need help with document creation, advocate bookings, or legal guidance? We are available 24/7 to assist you.
          </p>
        </div>

        {/* ─── Quick Contact Cards ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactCards.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-[#1a237e] hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1a237e]/10 text-[#1a237e] flex items-center justify-center">
                    {c.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#e65100] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-md">
                    {c.badge}
                  </span>
                </div>
                <h3 className="font-bold text-base text-[#1a237e] mb-1.5">{c.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">{c.description}</p>
              </div>
              <Link
                href={c.href}
                className="text-xs font-bold text-[#1a237e] hover:text-[#0d1757] hover:underline"
              >
                {c.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* ─── Contact Form & FAQs Grid ──────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Contact Form (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a237e] mb-1">Send Us a Direct Message</h2>
            <p className="text-xs text-slate-500 mb-6">Our support officers reply within 24 hours.</p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                <input
                  name="name"
                  required
                  placeholder="e.g. Anjali Gupta"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">How can we help you?</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your issue or legal enquiry..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a237e] hover:bg-[#0d1757] text-white font-bold py-2.5 rounded-lg text-sm transition-colors shadow-sm"
              >
                Submit Support Query →
              </button>

              {status && (
                <div className="p-3 rounded-lg bg-slate-100 text-xs font-medium text-slate-700 mt-2">
                  {status}
                </div>
              )}
            </form>
          </div>

          {/* FAQs Accordion (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a237e] mb-1">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 mb-6">Quick answers to common questions about VidhiSahayak.</p>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-[#1a237e] hover:bg-slate-100/80 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-lg font-normal text-slate-400 ml-2">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === i && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
