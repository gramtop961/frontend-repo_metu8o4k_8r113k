import React from 'react'
import { Send, Mail } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-20 bg-[#05060a]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-10">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white/90">Let’s build something thrilling</h3>
            <p className="mt-2 max-w-2xl text-white/65">
              Share a link to footage or a brief about your car, vibe, and soundtrack. I’ll reply with a concept and timeline.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:editor@example.com?subject=Project%20Inquiry%20—%20Car%20Edit"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium shadow-[0_0_35px_rgba(255,255,255,0.15)] hover:shadow-[0_0_45px_rgba(255,255,255,0.25)] transition"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/20 hover:ring-white/40"
              >
                <Send className="h-4 w-4" />
                See more work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
