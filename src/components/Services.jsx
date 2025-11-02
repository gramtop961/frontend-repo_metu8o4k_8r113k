import React from 'react';
import { Film, Camera, Sparkles, Palette } from 'lucide-react';

const items = [
  {
    icon: Film,
    title: 'Cinematic Story Cuts',
    desc: 'Rhythm-driven edits with speed ramps, seamless transitions, and punchy pacing built around the car\'s character.'
  },
  {
    icon: Camera,
    title: 'Commercial Social Spots',
    desc: 'Short-form reels and promos optimized for Instagram, TikTok, and YouTube Shorts with impactful hooks.'
  },
  {
    icon: Sparkles,
    title: 'Motion Design & FX',
    desc: 'Subtle HUD elements, kinetic type, and tasteful VFX that enhance motion without stealing focus.'
  },
  {
    icon: Palette,
    title: 'Color & Tone',
    desc: 'Moody contrast, clean highlights, and rich blacks tailored for automotive metal and night scenes.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#07090f] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-32 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">Services</h2>
        <p className="mt-2 max-w-2xl text-slate-300/80">From glossy hero reels to brand-ready promos — built for performance and style.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-cyan-400/30">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/0 via-fuchsia-500/0 to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
