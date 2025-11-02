import React from 'react';
import { Mail } from 'lucide-react';
import HeroSection from './components/HeroSection.jsx';
import Services from './components/Services.jsx';
import Tools from './components/Tools.jsx';
import Portfolio from './components/Portfolio.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#05060a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060a]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">Car Video Editor</a>
          <nav className="flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#tools" className="hover:text-white">Tools</a>
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10">
              <Mail size={16} />
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <HeroSection />
        <Services />
        <Tools />
        <Portfolio />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#07090f] py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Car Video Editor — Crafted with a neon, automotive aesthetic.</p>
        </div>
      </footer>
    </div>
  );
}
