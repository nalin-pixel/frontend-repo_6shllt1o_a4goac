import React from 'react'

function Footer() {
  return (
    <footer className="relative mt-6 pb-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/60 p-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="text-slate-800 font-semibold">Let’s build something beautiful.</h4>
            <p className="text-slate-600 text-sm">AI-infused MERN apps with cinematic polish.</p>
          </div>
          <a href="#contact" className="mt-4 md:mt-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white px-5 py-2.5 shadow-[0_10px_30px_rgba(14,165,233,0.35)]">
            Contact Akash
          </a>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Akash Goyal. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
