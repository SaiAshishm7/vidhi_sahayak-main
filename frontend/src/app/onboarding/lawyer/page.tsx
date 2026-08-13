"use client";

import Link from "next/link";

export default function LawyerOnboardingPage() {
  return (
    <div className="min-h-[calc(100vh-140px)] bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="text-xs font-bold text-[#e65100] uppercase tracking-widest">Verification Portal</span>
          <h1 className="text-3xl font-bold text-[#1a237e] mt-1">Lawyer Profile Verification</h1>
          <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
            Please provide your Bar Council registration details to get verified and listed on the VidhiSahayak advocate directory.
          </p>
        </div>

        {/* Verification Form Card */}
        <form className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-6">
          <div className="border-b border-slate-100 pb-4 mb-4">
            <h2 className="text-base font-bold text-[#1a237e]">Bar Council &amp; Practice Information</h2>
            <p className="text-xs text-slate-500">All information will be cross-verified against State Bar records.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name (as per Bar license)</label>
              <input
                placeholder="Adv. Rajesh Sharma"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">State Bar License Number</label>
              <input
                placeholder="e.g. D/1234/2015"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Education / Qualification</label>
              <input
                placeholder="LL.B / LL.M (National Law Univ)"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Years of Active Practice</label>
              <input
                type="number"
                placeholder="10"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Primary Practicing Court</label>
              <input
                placeholder="Delhi High Court / Tis Hazari District Court"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Office City / Location</label>
              <input
                placeholder="Connaught Place, New Delhi"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#1a237e] hover:bg-[#0d1757] text-white font-bold py-3 rounded-lg text-sm transition-colors shadow-sm"
            >
              Submit Profile for Bar Council Verification →
            </button>
          </div>

          <div className="text-center pt-2">
            <Link href="/dashboard" className="text-xs text-slate-500 hover:text-[#1a237e] underline">
              Return to Dashboard
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
