import React from 'react'

const GlassCard = ({ title, children, icon }) => (
  <div className="group relative rounded-3xl bg-white/30 backdrop-blur-xl border border-white/60 p-6 shadow-[0_20px_80px_rgba(99,102,241,0.15)] hover:shadow-[0_24px_90px_rgba(236,72,153,0.18)] transition-all">
    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-sky-300/20 via-violet-300/20 to-fuchsia-300/20" />
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-400 to-fuchsia-400 shadow-[0_8px_30px_rgba(14,165,233,0.25)]" />
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      </div>
      <div className="text-slate-700/90 text-sm leading-6">
        {children}
      </div>
    </div>
  </div>
)

function SectionCards() {
  return (
    <section className="relative py-10 md:py-14">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-32 w-32 bg-sky-300/20 rounded-full blur-3xl" />
        <div className="absolute right-10 bottom-10 h-32 w-32 bg-fuchsia-300/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlassCard title="Skills">
          <ul className="grid grid-cols-2 gap-2 text-slate-700/90">
            <li className="rounded-full bg-white/70 px-3 py-1 border border-white/80">React</li>
            <li className="rounded-full bg-white/70 px-3 py-1 border border-white/80">Node.js</li>
            <li className="rounded-full bg-white/70 px-3 py-1 border border-white/80">MongoDB</li>
            <li className="rounded-full bg-white/70 px-3 py-1 border border-white/80">Express</li>
            <li className="rounded-full bg-white/70 px-3 py-1 border border-white/80">TypeScript</li>
            <li className="rounded-full bg-white/70 px-3 py-1 border border-white/80">Next.js</li>
            <li className="rounded-full bg-white/70 px-3 py-1 border border-white/80">Python</li>
            <li className="rounded-full bg-white/70 px-3 py-1 border border-white/80">AI/LLMs</li>
          </ul>
        </GlassCard>

        <GlassCard title="Projects">
          <div className="space-y-3">
            {[
              { name: 'NeonBoard', desc: 'Realtime collab whiteboard with AI notes.' },
              { name: 'SkyCast', desc: 'Weather app with anime sky visuals.' },
              { name: 'GlassShop', desc: 'E-commerce with 3D product viewer.' },
            ].map((p) => (
              <a key={p.name} href="#projects" className="block rounded-2xl bg-white/70 border border-white/80 p-3 hover:bg-white/90 transition">
                <div className="font-semibold text-slate-800">{p.name}</div>
                <div className="text-sm text-slate-600">{p.desc}</div>
              </a>
            ))}
          </div>
        </GlassCard>

        <GlassCard title="About Me">
          <p>
            I craft delightful, performant apps blending solid engineering with cinematic, anime-inspired aesthetics. Passionate about AI tooling and developer UX.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#contact" className="rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white px-4 py-2 text-sm shadow-[0_8px_22px_rgba(14,165,233,0.35)]">Get in touch</a>
            <a href="#resume" className="rounded-full bg-white/70 backdrop-blur border border-white/80 px-4 py-2 text-sm text-slate-800">Download CV</a>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

export default SectionCards
