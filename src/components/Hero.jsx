import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50 border border-white/40 shadow-[0_10px_60px_rgba(59,130,246,0.15)]">
      {/* Anime-style soft city bokeh background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute top-20 -right-16 h-96 w-96 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[90%] rounded-[50%] bg-indigo-300/10 blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-gradient-to-br from-sky-300/70 to-fuchsia-300/70 blur-[2px] shadow-[0_0_12px_rgba(99,102,241,0.35)]"
            style={{
              width: Math.random() * 4 + 3 + 'px',
              height: Math.random() * 4 + 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `floatY ${8 + Math.random() * 10}s ease-in-out ${Math.random() * 4}s infinite`,
              opacity: 0.75,
            }}
          />
        ))}
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full w-full flex items-center">
        <div className="px-6 sm:px-10 lg:px-16 py-10 w-full">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_0_24px_rgba(14,165,233,0.25)]">
                <div className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                <span className="text-xs font-medium text-slate-700">Available for freelance</span>
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 drop-shadow-[0_2px_0_rgba(255,255,255,0.6)]">
                Akash Goyal
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-slate-700">
                Full-Stack Developer • AI & MERN Specialist
              </p>

              {/* Futuristic code glow line */}
              <div className="mt-6 h-[2px] w-48 bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400 shadow-[0_0_24px_rgba(168,85,247,0.45)] rounded-full" />

              <p className="mt-4 max-w-prose text-slate-700/90">
                Building elegant, performant web experiences with an eye for anime-inspired atmospherics and cinematic detail.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white px-5 py-2.5 shadow-[0_10px_30px_rgba(14,165,233,0.35)] hover:shadow-[0_12px_36px_rgba(236,72,153,0.35)] transition-shadow">
                  View Projects
                </a>
                <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md text-slate-800 px-5 py-2.5 border border-white/60 hover:bg-white/90 transition-colors">
                  About Me
                </a>
              </div>
            </div>

            {/* Silhouette & laptop hint via gradient silhouette block */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-[520px] h-[320px]">
                <div className="absolute -top-6 -left-8 h-40 w-40 rounded-full bg-sky-300/30 blur-2xl" />
                <div className="absolute -bottom-8 -right-6 h-44 w-44 rounded-full bg-fuchsia-300/30 blur-2xl" />
                <div className="absolute inset-0 rounded-[32px] bg-white/25 backdrop-blur-xl border border-white/50 shadow-[0_20px_80px_rgba(99,102,241,0.25)]">
                  <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_70%_20%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_30%_80%,rgba(236,72,153,0.22),transparent_55%)]" />
                  <div className="absolute top-6 left-6 right-6 h-40 rounded-2xl bg-slate-900/70 border border-white/10 overflow-hidden">
                    {/* Faux terminal */}
                    <div className="h-8 w-full bg-slate-800/70 border-b border-white/10 flex items-center gap-2 px-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="ml-2 text-[11px] text-slate-300/80">akash@studio — bash</span>
                    </div>
                    <pre className="text-[11px] leading-5 p-3 text-sky-200/90">
{`> npm run build\n✔ Optimized — 0.42s\nDeploying to edge...\n✨ Success!`}
                    </pre>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 h-28 rounded-xl bg-white/60 backdrop-blur-md border border-white/70 p-3 flex items-center gap-3">
                    <div className="h-10 w-14 rounded-md bg-gradient-to-br from-sky-400 to-fuchsia-400 shadow-[0_0_24px_rgba(14,165,233,0.45)]" />
                    <div className="flex-1">
                      <div className="h-2 w-2/3 rounded-full bg-slate-700/70 mb-2" />
                      <div className="h-2 w-1/2 rounded-full bg-slate-700/50" />
                    </div>
                    <div className="h-10 w-24 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 shadow-[0_8px_22px_rgba(14,165,233,0.35)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatY { 0% { transform: translateY(0); } 50% { transform: translateY(-12px); } 100% { transform: translateY(0);} }
      `}</style>
    </section>
  )
}

export default Hero
