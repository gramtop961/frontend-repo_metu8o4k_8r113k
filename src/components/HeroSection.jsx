import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-[#05060a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 -right-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white/95"
            >
              Cinematic Car Edits
              <span className="block bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">that feel alive</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-5 text-base sm:text-lg text-white/70 max-w-xl"
            >
              I craft kinetic, neon-drenched visuals for automotive stories — blending rhythm, motion design and seamless sound design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#portfolio" className="group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-black bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 shadow-[0_0_35px_rgba(99,102,241,0.25)] hover:shadow-[0_0_45px_rgba(99,102,241,0.45)] transition-shadow">
                View Portfolio
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/20 hover:ring-white/40 transition">
                Book a Project
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
