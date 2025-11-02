import React, { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Sparkles, Star, Rocket } from 'lucide-react';

export default function HeroSection() {
  // Simple mouse parallax for floating chips
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const parallax = useMemo(() => {
    const strength = 12; // lower = subtler
    return {
      x1: (mouse.x / strength) * 0.5,
      y1: (mouse.y / strength) * 0.5,
      x2: (mouse.x / strength) * -0.6,
      y2: (mouse.y / strength) * -0.6,
      x3: (mouse.x / strength) * 0.8,
      y3: (mouse.y / strength) * -0.3,
    };
  }, [mouse]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setMouse({ x, y });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#05060a] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Scene */}
      <div className="absolute inset-0 will-change-transform">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Grainy gradient background layer (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(88,28,135,0.18),transparent),radial-gradient(60%_50%_at_0%_50%,rgba(59,130,246,0.18),transparent)]" />
      </div>

      {/* Floating chips (interactive + floating) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -10, 0] }}
          transition={prefersReduced ? { duration: 0.6 } : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: `translate3d(${parallax.x1}px, ${parallax.y1}px, 0)`
          }}
          className="absolute left-10 top-28 will-change-transform"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-white/90 backdrop-blur-md">
            <Sparkles size={14} className="text-fuchsia-300" />
            Neon Grade
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 1, y: [-6, 6, -6] }}
          transition={prefersReduced ? { duration: 0.6 } : { duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: `translate3d(calc(100% - 160px + ${parallax.x2}px), calc(20% + ${parallax.y2}px), 0)`
          }}
          className="absolute will-change-transform"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-white/90 backdrop-blur-md">
            <Star size={14} className="text-cyan-300" />
            4K Master
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 1, y: [8, -8, 8] }}
          transition={prefersReduced ? { duration: 0.6 } : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: `translate3d(calc(50% + ${parallax.x3}px), calc(75% + ${parallax.y3}px), 0)`
          }}
          className="absolute will-change-transform"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-white/90 backdrop-blur-md">
            <Rocket size={14} className="text-indigo-300" />
            Speed Ramps
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-gradient-to-br from-white via-white to-cyan-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Cinematic Car Edits
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400">Interactive • Futuristic • Bold</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 max-w-2xl text-base text-slate-300/90 sm:text-lg"
        >
          High-energy reels and brand stories with neon glow, smooth motion, and technology-forward vibes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-fuchsia-400"
          >
            View Work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
          >
            Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
