import { CATEGORIES } from "@/lib/categories";
import Link from "next/link";
import Image from "next/image";

export default function CategoriesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ─── Header ────────────────────────────────────────── */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#e65100] uppercase tracking-widest">
            Official Legal Directory
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1a237e] mt-1 tracking-tight">
            Browse All Legal Categories
          </h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Select a legal topic below to access ready-to-print document templates, court submission guides, and Bar-verified advocate consultations.
          </p>
        </div>

        {/* ─── Categories Grid ────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((c) => (
            <div
              key={c.slug}
              id={c.slug}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:border-[#1a237e] hover:shadow-md transition-all duration-200"
            >
              {c.image && (
                <div className="relative h-36 w-full bg-slate-100 border-b border-slate-100">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#1a237e] text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                    #{c.slug}
                  </div>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-bold text-base text-[#1a237e] mb-1.5">{c.name}</h2>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {c.createHint || "Guidance, ready-to-print templates, and submission steps under Indian laws."}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <Link
                    href={`/categories/${c.slug}`}
                    className="flex-1 text-center bg-[#1a237e] hover:bg-[#0d1757] text-white text-xs font-bold py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/documents/new?category=${encodeURIComponent(c.slug)}`}
                    className="flex-1 text-center border border-[#1a237e] text-[#1a237e] hover:bg-indigo-50 text-xs font-bold py-2 rounded-lg transition-colors"
                  >
                    Draft Doc
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
