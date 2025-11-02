import React from 'react';
import { Star } from 'lucide-react';

const tools = [
  {
    name: 'Adobe Premiere Pro',
    tag: 'Primary Edit',
    color: 'from-indigo-500/30 to-indigo-400/10',
  },
  {
    name: 'Adobe After Effects',
    tag: 'Motion & FX',
    color: 'from-fuchsia-500/30 to-fuchsia-400/10',
  },
  {
    name: 'DaVinci Resolve',
    tag: 'Color & Finishing',
    color: 'from-cyan-500/30 to-cyan-400/10',
  },
];

export default function Tools() {
  return (
    <section id="tools" className="relative bg-[#05060a] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 right-10 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">Tools of the Trade</h2>
            <p className="mt-2 max-w-xl text-slate-300/80">Powered by industry standards for speed, precision, and consistent delivery.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
            <Star size={14} className="opacity-80" />
            Ready for Automotive Brands
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {tools.map((t) => (
            <div key={t.name} className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md`}>
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${t.color}`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                  <span className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[10px] uppercase tracking-wide text-white/80">{t.tag}</span>
                </div>
                <p className="mt-3 text-sm text-slate-300/80">Fast proxies, clean timelines, and color-managed exports that keep details crisp.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
