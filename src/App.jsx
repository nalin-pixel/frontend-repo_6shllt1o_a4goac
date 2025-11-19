import React from 'react'
import Hero from './components/Hero'
import SectionCards from './components/SectionCards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 selection:bg-fuchsia-200/60 selection:text-slate-900">
      {/* Soft anime sky background with city bokeh */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(125,211,252,0.35),transparent_60%),radial-gradient(900px_600px_at_80%_10%,rgba(216,180,254,0.25),transparent_60%)]" />
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="absolute h-1 w-1 rounded-full bg-sky-400/50 shadow-[0_0_12px_rgba(14,165,233,0.5)]" style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, filter: 'blur(0.5px)' }} />
          ))}
        </div>
      </div>

      <main className="relative z-10 py-6 md:py-10 lg:py-14">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 to-fuchsia-400 shadow-[0_0_18px_rgba(14,165,233,0.45)]" />
              <span className="font-semibold text-slate-800">Akash Goyal</span>
            </div>
            <nav className="hidden md:flex items-center gap-2">
              {['Skills','Projects','About'].map((n) => (
                <a key={n} href={`#${n.toLowerCase()}`} className="rounded-full px-3 py-1.5 text-slate-700 hover:bg-white/70 border border-white/80 backdrop-blur">
                  {n}
                </a>
              ))}
            </nav>
          </header>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <Hero />
        </div>

        <div id="skills" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <SectionCards />
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
