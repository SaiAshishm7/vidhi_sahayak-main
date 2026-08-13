import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/categories";
import VoiceSearch from "@/components/voice-search";

export default function Home() {
  return (
    <div id="main-content" className="bg-[#f8fafc] min-h-screen text-slate-800">

      {/* ═══════════════════════════════════════════════════════════════════
          HERO BANNER SECTION — Clean Aadhaar-Style Card Carousel Banner
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
            <div className="inline-flex items-center gap-2 rounded-md bg-[#1a237e]/10 border border-[#1a237e]/20 px-3 py-1 text-xs font-bold text-[#1a237e] w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-[#e65100] animate-pulse" />
              Official AI Legal Services Portal
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a237e] tracking-tight leading-tight mb-4">
              Get Expert Legal Advice &amp; Documents <span className="text-[#e65100]">No Queues.</span>
            </h1>

            <p className="text-base text-slate-600 mb-8 max-w-xl leading-relaxed">
              Connect with top verified Indian advocates starting at <strong className="text-[#1a237e]">₹31/min</strong>. Generate court-ready legal agreements in minutes with AI.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/consultation"
                className="vs-cta-btn px-6 py-3 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                Explore Consultation Services →
              </Link>
              <Link
                href="/documents/new"
                className="border-2 border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e]/5 px-6 py-2.5 rounded-lg text-sm font-bold transition-all"
              >
                Draft Document
              </Link>
            </div>
          </div>

          {/* Right Banner Image / Graphic */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1a237e] to-[#283593] p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="text-xs uppercase font-bold tracking-widest text-[#ff9933] mb-2">Instant Assistance</div>
              <h2 className="text-2xl font-bold mb-3">24/7 AI Legal Counsel</h2>
              <p className="text-sm text-indigo-100 leading-relaxed mb-6">
                Ask questions in 12+ Indian languages. Instant answers grounded in IPC, CrPC, CPC, &amp; Consumer Laws.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between text-xs text-indigo-200 mb-2">
                <span>Verified Legal Network</span>
                <span className="text-[#ff9933] font-bold">4.9 ★ Rating</span>
              </div>
              <div className="text-lg font-bold text-white mb-1">Over 50,000+ Citizens Helped</div>
              <p className="text-xs text-indigo-100">Across Delhi, Mumbai, Bengaluru, Hyderabad &amp; 100+ cities</p>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          ACCESS SERVICES GRID — Aadhaar-Inspired Icon Grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1a237e]">Access VidhiSahayak Services</h2>
            <p className="text-sm text-slate-500">Quick links to key legal capabilities and document tools</p>
          </div>
          <Link href="/categories" className="text-sm font-semibold text-[#e65100] hover:underline">
            View All Services →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            {
              title: "Talk to Lawyer",
              desc: "Instant audio & video calls",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              ),
              href: "/consultation",
            },
            {
              title: "Rental Agreement",
              desc: "Draft & e-stamp ready",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              ),
              href: "/documents/new?type=rental",
            },
            {
              title: "Affidavits",
              desc: "Name change, address & KYC",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              ),
              href: "/documents/new?type=affidavit",
            },
            {
              title: "AI Legal Advice",
              desc: "Multilingual guidance",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              ),
              href: "/chat",
            },
            {
              title: "Land & Property",
              desc: "Sale deed & verification",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              ),
              href: "/categories/land",
            },
            {
              title: "IPR & Patents",
              desc: "Trademark & Copyright",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
                </svg>
              ),
              href: "/categories/ipr",
            },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="vs-service-tile group">
              <div className="vs-tile-icon">{item.icon}</div>
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#1a237e] mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STEPS SECTION — Clean Process Cards
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#e65100] uppercase tracking-wider">How It Works</span>
            <h2 className="text-2xl font-bold text-[#1a237e] mt-1">Get Legal Guidance in 3 Simple Steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Select Legal Category",
                desc: "Choose from Property, Rental, Marriage, Criminal, or Business legal topics.",
              },
              {
                step: "02",
                title: "Choose Consult or AI",
                desc: "Get instant answers with AI or book a 1-on-1 private call with a verified lawyer.",
              },
              {
                step: "03",
                title: "Download & Take Action",
                desc: "Receive customized legal document drafts, stamp paper guidance, and case steps.",
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative">
                <div className="text-3xl font-black text-[#1a237e]/20 mb-3">{step.step}</div>
                <h3 className="text-base font-bold text-[#1a237e] mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          VERIFIED ADVOCATES SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-[#e65100] uppercase tracking-wider">Advocate Directory</span>
            <h2 className="text-2xl font-bold text-[#1a237e] mt-1">Verified High Court &amp; District Advocates</h2>
          </div>
          <Link href="/consultation" className="text-sm font-semibold text-[#1a237e] hover:underline">
            View All Advocates →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Adv. Rajesh Sharma", city: "Delhi High Court", practice: "Property & Civil Law", exp: "14 Yrs", rate: "₹31/min" },
            { name: "Adv. Sunita Iyer", city: "Bengaluru District Court", practice: "Corporate & Contracts", exp: "10 Yrs", rate: "₹40/min" },
            { name: "Adv. Pradeep Singh", city: "Mumbai High Court", practice: "Criminal & Family Law", exp: "16 Yrs", rate: "₹35/min" },
            { name: "Adv. Neha Gupta", city: "Hyderabad High Court", practice: "IPR & Startup Advisory", exp: "12 Yrs", rate: "₹50/min" },
          ].map((l, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1a237e] text-white font-bold flex items-center justify-center text-base">
                  {l.name.split(" ")[1]?.[0] || "A"}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{l.name}</h3>
                  <p className="text-xs text-slate-500">{l.city}</p>
                </div>
              </div>
              <div className="text-xs text-slate-600 space-y-1 mb-4 border-y border-slate-100 py-3">
                <div><span className="font-semibold text-slate-800">Specialization:</span> {l.practice}</div>
                <div><span className="font-semibold text-slate-800">Experience:</span> {l.exp}</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#e65100]">{l.rate}</span>
                <Link href="/consultation" className="bg-[#1a237e] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#0d1757] transition-colors">
                  Book Call
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GOVERNMENT & LEGAL CATEGORIES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a237e]">Browse Legal Knowledge Base</h2>
            <p className="text-sm text-slate-500">Comprehensive guides and documents categorized by topic</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {CATEGORIES.slice(0, 12).map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg hover:border-[#1a237e] hover:bg-indigo-50/50 transition-all text-center block"
              >
                <div className="text-xs font-bold text-[#1a237e] truncate">{cat.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Guides &amp; Templates</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
