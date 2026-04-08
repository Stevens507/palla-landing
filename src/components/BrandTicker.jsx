import cocaColaLogo from '../assets/Coca-Cola_logo.svg.png'
import nestleLogo from '../assets/Nestlé.svg.png'
import bimboLogo from '../assets/Logo_Grupo_BIMBO.svg.png'
import maggiLogo from '../assets/Maggi_logo.svg.png'
import colgateLogo from '../assets/colgate-logo-1.svg'
import estrellaAzulLogo from '../assets/logo-estrella-azul.png'
import dosPinosLogo from '../assets/Logo_Dos_Pinos.svg.png'
import cafeDuranLogo from '../assets/logo-duran-coffeestore_Mesa-de-trabajo-1-1024x1024.webp'

const brands = [
  { name: 'Coca-Cola', logo: cocaColaLogo },
  { name: 'Nestlé', logo: nestleLogo },
  { name: 'Bimbo', logo: bimboLogo },
  { name: 'Maggi', logo: maggiLogo },
  { name: 'Colgate', logo: colgateLogo },
  { name: 'Estrella Azul', logo: estrellaAzulLogo },
  { name: 'Dos Pinos', logo: dosPinosLogo },
  { name: 'Café Durán', logo: cafeDuranLogo },
]

const tickerKeyframes = `
@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .ticker-track {
    animation-play-state: paused !important;
  }
}
`

function BrandLogo({ brand }) {
  return (
    <img
      src={brand.logo}
      alt={brand.name}
      loading="lazy"
      className="h-10 md:h-12 w-auto object-contain shrink-0 select-none"
      style={{ filter: 'grayscale(1) opacity(0.45)' }}
    />
  )
}

function BrandList() {
  return brands.map((brand, i) => (
    <span key={i} className="flex items-center shrink-0 gap-12 md:gap-16">
      <BrandLogo brand={brand} />
    </span>
  ))
}

export default function BrandTicker() {
  return (
    <section
      className="w-full overflow-hidden border-y border-gray-100"
      style={{ backgroundColor: '#FAFAFA' }}
      aria-hidden="true"
    >
      <style>{tickerKeyframes}</style>

      <div className="py-8 md:py-10">
        <p className="text-center text-xs font-sans uppercase tracking-widest text-gray-400 mb-6">
          Las marcas que tu tienda necesita
        </p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to right, #FAFAFA, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to left, #FAFAFA, transparent)' }} />

          <div
            className="ticker-track flex items-center gap-12 md:gap-16 w-max"
            style={{ animation: 'ticker-scroll 30s linear infinite' }}
          >
            <BrandList />
            <BrandList />
          </div>
        </div>
      </div>
    </section>
  )
}
