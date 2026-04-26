'use client'

import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        <div className="flex items-baseline gap-2.5">
          <span className="font-display text-[19px] tracking-tight">FreshFlat</span>
          <span className="text-[9px] tracking-eyebrow uppercase text-stone">Hong Kong</span>
        </div>

        <div className="hidden md:flex gap-6 items-center text-[13px] text-body">
          <a href="#services" className="hover:text-graphite transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-graphite transition-colors">How it works</a>
          <a href="#faq" className="hover:text-graphite transition-colors">FAQ</a>
          <a href="#about" className="hover:text-graphite transition-colors">About</a>
          <a href="#booking" className="bg-graphite text-cream px-4 py-2 text-[10px] tracking-btn uppercase hover:bg-sage-deep transition-colors">
            Get a quote
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-5 h-px bg-graphite transition-transform ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block w-5 h-px bg-graphite transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-graphite transition-transform ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-rule px-6 py-5 flex flex-col gap-4 text-[14px] bg-cream">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#booking" onClick={() => setMenuOpen(false)} className="bg-graphite text-cream px-5 py-3 text-[11px] tracking-btn uppercase text-center mt-2">
            Get a quote
          </a>
        </div>
      )}
    </nav>
  )
}
