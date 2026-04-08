import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import heroBanner from '../assets/hero-banner.jpg'

export default function HeroSection() {
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const headingStyle = {
    fontFamily: '"Plus Jakarta Sans", "Outfit", sans-serif',
    textShadow: '0 2px 12px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.6)',
  }

  return (
    <section
      ref={containerRef}
      className="relative pt-16 overflow-hidden"
    >
      <img
        src={heroBanner}
        alt="Pa'lla — marketplace mayorista para tiendas de barrio en Panamá"
        className="w-full h-auto block"
      />

      <div className="absolute inset-0 bg-black/28" aria-hidden="true" />

      <div
        ref={contentRef}
        className="absolute inset-0 flex items-start justify-center z-10 pt-24 md:pt-32"
      >
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap"
              style={{ ...headingStyle, color: '#2D2687' }}
            >
              El marketplace mayorista
            </h1>
            <p
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap mt-1"
              style={{ ...headingStyle, color: '#F05033' }}
            >
              para tiendas de barrio.
            </p>
          </div>

          <p
            className="font-mono text-sm md:text-base mb-8"
            style={{ color: '#1A1A1A', textShadow: '0 1px 8px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.5)' }}
          >
            Pide tu inventario desde el celular <span className="mx-2 opacity-40">|</span> +500 productos <span className="mx-2 opacity-40">|</span> Entrega en 24h
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`${import.meta.env.VITE_APP_URL || 'http://localhost:3001'}/register`}
              className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#F05033', boxShadow: '0 4px 20px rgba(240,80,51,0.4)' }}
            >
              Quiero abastecer mi tienda
            </a>
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '50766839406'}?text=${encodeURIComponent('Hola Pa\'lla, soy distribuidor y me interesa vender en su plataforma.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: '#2D2687', backdropFilter: 'blur(8px)' }}
            >
              Soy distribuidor
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
