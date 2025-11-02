import React from 'react'
import { Film, Camera, Sparkles, Star } from 'lucide-react'

const services = [
  {
    icon: Film,
    title: 'Cinematic Story Cuts',
    desc: 'High-energy pacing, impactful transitions, and beat-synced edits that elevate the drive.'
  },
  {
    icon: Sparkles,
    title: 'Motion Design & FX',
    desc: 'Neon HUDs, speed lines, glitch accents, and title animations tailored to your brand.'
  },
  {
    icon: Camera,
    title: 'Color & Tone',
    desc: 'Clean, contrasty looks with cool neon highlights — tuned for night city vibes or daylight clarity.'
  },
  {
    icon: Star,
    title: 'Sound Design',
    desc: 'Subtle whooshes, engine layers, and rhythmic hits that make the visuals hit harder.'
  },
]

export default function Services() {
  return (
    <section id="about" className="relative py-20 bg-[#07090f]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-12">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Automotive • Futurism • Neon
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white/90">
            Editing built for speed and emotion
          </h2>
          <p className="mt-3 max-w-2xl text-white/60">
            I specialize in car reels, launch teasers, and full-length features with a modern, tech-forward aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 transition hover:border-cyan-400/40">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-indigo-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition" />
              <s.icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-3 text-lg font-medium text-white/90">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
