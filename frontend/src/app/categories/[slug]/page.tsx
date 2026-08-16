import { CATEGORIES } from "@/lib/categories";
import Link from "next/link";
import { GUIDANCE } from "@/lib/guidance";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  const g = GUIDANCE[slug];

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-50 py-16 px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-[#1a237e] mb-2">Category Not Found</h1>
          <p className="text-xs text-slate-500 mb-6">The requested legal topic does not exist in our directory.</p>
          <Link
            href="/categories"
            className="inline-block bg-[#1a237e] text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-[#0d1757] transition-colors"
          >
            ← Back to Legal Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* ─── Header ────────────────────────────────────────── */}
        <div className="mb-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#e65100] uppercase tracking-widest">
                Category Guidance
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#1a237e] mt-1">{category.name}</h1>
              <p className="text-xs text-slate-500 mt-1">
                Official guidance, documents required, and submission procedure for {category.name}.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`/documents/new?category=${encodeURIComponent(slug)}`}
                className="bg-[#1a237e] hover:bg-[#0d1757] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
              >
                Draft Document →
              </Link>
              <Link
                href="/consultation"
                className="border border-[#e65100] text-[#e65100] hover:bg-orange-50 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
              >
                Book Lawyer
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Guidance Cards ────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Where to Get & Documents Needed */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-sm font-bold text-[#1a237e] uppercase tracking-wider mb-2 border-l-2 border-[#1a237e] pl-2">
                Where to Obtain Document
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                {(g?.whereToGet ?? ["Local Sub-Registrar or Advocate office"]).map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#1a237e] uppercase tracking-wider mb-2 border-l-2 border-[#1a237e] pl-2">
                Required Types &amp; KYC
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                {(g?.typeRequired ?? ["Aadhaar, PAN card, and party proofs"]).map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Submission & Verification */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-sm font-bold text-[#1a237e] uppercase tracking-wider mb-2 border-l-2 border-[#e65100] pl-2">
                Submission &amp; Registration Offices
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                {(g?.submissionOffices ?? ["Sub-Registrar office or online portal"]).map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#1a237e] uppercase tracking-wider mb-2 border-l-2 border-[#e65100] pl-2">
                Print &amp; Stamp Duty Guidance
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                {(g?.printGuidance ?? ["Non-judicial stamp paper as per state rules"]).map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Execution Steps (Full Width) */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-sm font-bold text-[#1a237e] uppercase tracking-wider mb-3 border-l-2 border-[#1a237e] pl-2">
              Step-by-Step Procedure
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {(g?.steps ?? ["Draft document", "Estimate stamp duty", "Execute before witnesses", "Register"]).map((x, i) => (
                <li key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#1a237e] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span>{x}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>

      </div>
    </div>
  );
}
