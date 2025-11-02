import React from 'react'
import { PlayCircle } from 'lucide-react'

const items = [
  {
    title: 'Neon Tunnel — Night Drive Teaser',
    tag: '60s Reel',
  },
  {
    title: 'Track Day — Turbo Whine Edit',
    tag: '45s Short',
  },
  {
    title: 'City Cruise — Electric Calm',
    tag: '30s Social',
  },
  {
    title: 'Showroom — Product Focus',
    tag: '45s Short',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 bg-[#07090f]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white/90">Selected work</h2>
            <p className="mt-2 text-white/60 max-w-2xl">A few stylized previews. Full case studies available on request.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/20 hover:ring-white/40">Request full reels</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-fuchsia-400/10 to-indigo-400/15 opacity-0 group-hover:opacity-100 transition" />
              <div className="aspect-video w-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(244,114,182,0.18),transparent_40%)] flex items-center justify-center">
                <PlayCircle className="h-16 w-16 text-white/70 group-hover:text-white transition" />
              </div>
              <div className="relative p-4">
                <div className="text-xs text-white/60">{item.tag}</div>
                <div className="text-white/90 font-medium">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
