export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-[#1a237e]/20"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#1a237e]"></div>
        </div>
        <p className="text-xs font-semibold text-[#1a237e] tracking-widest uppercase">Loading Portal...</p>
      </div>
    </div>
  );
}
