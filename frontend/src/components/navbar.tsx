"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Legal Topics" },
  { href: "/consultation", label: "Talk to Lawyer" },
  { href: "/documents", label: "Documents" },
  { href: "/chat", label: "AI Counsel" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/support", label: "Help" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function onSignOut() {
    signOut();
    router.push("/");
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  }

  return (
    <header className={`w-full sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>

      {/* ── Layer 1: Utility Bar ─────────────────────────────────────────── */}
      <div className="vs-utility-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <a href="#main-content" className="vs-skip-link">Skip to Main Content</a>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:flex items-center gap-1.5 text-white/70">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Secure Portal
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-medium text-white/80">
            <button className="vs-utility-link flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
              Screen Reader
            </button>
            <div className="w-px h-3 bg-white/20" />
            <button className="vs-utility-link font-bold text-white">EN</button>
            <span className="text-white/40">/</span>
            <button className="vs-utility-link">हिंदी</button>
            {user ? (
              <>
                <div className="w-px h-3 bg-white/20" />
                <button onClick={onSignOut} className="vs-utility-link">Sign Out</button>
              </>
            ) : (
              <>
                <div className="w-px h-3 bg-white/20" />
                <Link href="/auth/signin" className="vs-utility-link">Sign In</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Layer 2: Brand Bar ───────────────────────────────────────────── */}
      <div className="vs-brand-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl text-white vs-logo-icon transition-transform duration-300 group-hover:scale-105">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-black text-[#1a237e] tracking-tight leading-none">
                    Vidhi<span className="text-[#e65100]">Sahayak</span>
                  </span>
                </div>
                <p className="text-[10px] font-medium text-slate-500 tracking-widest uppercase mt-0.5">
                  विधि सहायक · AI Legal Copilot
                </p>
              </div>
            </Link>

            {/* Search Box */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl items-center">
              <div className="vs-search-bar w-full flex items-center gap-2">
                <svg className="shrink-0 text-slate-400 ml-4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search legal topics, e.g. rental agreement, FIR..."
                  className="flex-1 bg-transparent py-3 px-2 text-sm text-slate-700 placeholder:text-slate-400 outline-none"
                  aria-label="Search legal services"
                />
                <button
                  type="submit"
                  className="vs-search-btn shrink-0 px-5 py-2 mr-1 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Auth CTA — desktop */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              {user ? (
                <span className="text-sm font-semibold text-[#1a237e] truncate max-w-[140px]">
                  {user.fullName}
                </span>
              ) : (
                <Link href="/auth/signup"
                  className="vs-cta-btn text-sm font-bold text-white px-5 py-2 rounded-lg transition-all duration-200">
                  Register Free
                </Link>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                ) : (
                  <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Layer 3: Navigation Bar ──────────────────────────────────────── */}
      <nav className="vs-nav-bar hidden md:block" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-11 gap-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`vs-nav-link relative px-4 h-full flex items-center text-sm font-medium transition-all duration-200 ${
                  pathname === item.href ? "vs-nav-link-active" : ""
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e65100] rounded-t-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Mobile Dropdown ──────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3">
            {/* Mobile search */}
            <form onSubmit={handleSearch} className="mb-3">
              <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 bg-slate-50">
                <svg className="text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="flex-1 bg-transparent text-sm outline-none"
                />
              </div>
            </form>
            <div className="space-y-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-[#1a237e]/5 text-[#1a237e] font-semibold border-l-2 border-[#e65100]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100 flex gap-2">
              <Link href="/auth/signin" onClick={() => setMobileOpen(false)}
                className="flex-1 text-center border border-[#1a237e] text-[#1a237e] rounded-lg py-2 text-xs font-semibold hover:bg-[#1a237e]/5 transition-colors">
                Sign In
              </Link>
              <Link href="/auth/signup" onClick={() => setMobileOpen(false)}
                className="flex-1 text-center rounded-lg py-2 text-xs font-bold text-white vs-cta-btn transition-colors">
                Register Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
