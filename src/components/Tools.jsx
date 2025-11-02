import React from 'react'
import { Film, Sparkles, Palette } from 'lucide-react'

const tools = [
  {
    name: 'Adobe Premiere Pro',
    badge: 'Primary NLE',
    icon: Film,
    accent: 'from-cyan-400 to-fuchsia-400',
    copy: 'Precision cutting, pacing, and collaborative timelines for fast turnarounds.'
  },
  {
    name: 'Adobe After Effects',
    badge: 'Motion & FX',
    icon: Sparkles,
    accent: 'from-fuchsia-400 to-indigo-400',
    copy: 'Advanced motion graphics, HUDs, kinetic typography, and seamless composites.'
  },
  {
    name: 'DaVinci Resolve',
    badge: 'Color & Finish',
    icon: Palette,
    accent: 'from-indigo-400 to-cyan-400',
    copy: 'Filmic contrast, clean chroma, and stylized neon looks with noise-managed finishes.'
  },
]

export default function Tools() {
  return (
    <section id="tools" className="relative py-20 bg-[#05060a]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white/90">
            Tools I work with
          </h2>
          <p className="mt-2 text-white/60 max-w-2xl">
            I edit in Premiere Pro, build effects in After Effects, and finish color in DaVinci Resolve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tools.map((t, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${t.accent} opacity-20 blur-xl`} />
              <div className="relative">
                <div className={`inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10`}>
                  <t.icon className="h-4 w-4 text-white/80" />
                  {t.badge}
                </div>
                <h3 className="mt-4 text-xl font-medium text-white/90">{t.name}</h3>
                <p className="mt-2 text-sm text-white/60">{t.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
