import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Tools from './components/Tools'
import Portfolio from './components/Portfolio'
import ContactCTA from './components/ContactCTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#05060a] text-white antialiased">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#05060a]/60 bg-[#05060a]/80 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_25px_6px_rgba(34,211,238,0.55)]" />
            <span className="text-sm tracking-wide text-white/80">Car Edit Portfolio</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#tools" className="hover:text-white">Tools</a>
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <Services />
        <Tools />
        <Portfolio />
        <ContactCTA />
      </main>

      <footer className="border-t border-white/10 bg-[#05060a]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10 text-sm text-white/50 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Automotive Video Editor — Premier Pro • After Effects • DaVinci Resolve</p>
          <a href="#" className="hover:text-white/80">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
