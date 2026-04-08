import { useState } from 'react'
import pallaLogo from '../assets/palla-logo.svg'

const navLinks = [
  { label: 'Características', href: '#features' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'Para tiendas', href: '#manifesto' },
]

const NAVBAR_HEIGHT = 64

function scrollToSection(href) {
  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleLink(e, href) {
    e.preventDefault()
    scrollToSection(href)
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => handleLink(e, '#')} className="flex-shrink-0">
          <img src={pallaLogo} alt="Pa'lla" className="h-12" />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLink(e, link.href)}
              className="text-sm font-medium font-sans text-gray-700 hover:text-[#2D2687] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={`${import.meta.env.VITE_APP_URL || 'http://localhost:3001'}/register`}
          className="hidden md:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold font-sans text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#2D2687' }}
        >
          Empieza Gratis
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLink(e, link.href)}
              className="text-sm font-medium font-sans text-gray-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${import.meta.env.VITE_APP_URL || 'http://localhost:3001'}/register`}
            className="inline-flex justify-center px-5 py-2.5 rounded-full text-sm font-semibold font-sans text-white"
            style={{ backgroundColor: '#2D2687' }}
          >
            Empieza Gratis
          </a>
        </div>
      )}
    </nav>
  )
}
