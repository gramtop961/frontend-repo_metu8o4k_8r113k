import React from 'react';
import { PlayCircle } from 'lucide-react';

const items = [
  {
    title: 'Midnight Run — BMW M Series',
    thumb: 'https://images.unsplash.com/photo-1571607382829-51a9c6b13b66?q=80&w=1600&auto=format&fit=crop',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    title: 'Urban Neon — City Chase',
    thumb: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    title: 'Highway Pulse — Rolling Shots',
    thumb: 'https://images.unsplash.com/photo-1518551933037-136c3f2a0e95?q=80&w=1600&auto=format&fit=crop',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    title: 'Track Day — Precision Edit',
    thumb: 'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1600&auto=format&fit=crop',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-[#07090f] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-6 left-1/3 h-40 w-[30rem] bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-transparent blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">Featured Work</h2>
        <p className="mt-2 max-w-2xl text-slate-300/80">A selection of fast-paced reels and cinematic edits for automotive stories.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={item.thumb} alt={item.title} className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <PlayCircle size={18} />
                  <span className="text-sm">Play</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-medium text-white">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
