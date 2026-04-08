import { Instagram, Linkedin, Facebook } from 'lucide-react'

const footerLinks = [
  {
    heading: 'Plataforma',
    links: [
      { label: 'Características', href: '#features' },
      { label: 'Cómo funciona', href: '#how-it-works' },
      { label: 'Para tiendas', href: '#manifesto' },
    ],
  },
  {
    heading: 'Para ti',
    links: [
      { label: 'Tiendas de barrio', href: '#manifesto' },
      { label: 'Proveedores', href: '#proveedor' },
      { label: 'Únete gratis', href: '#unete' },
    ],
  },
  {
    heading: 'Empresa',
    links: [
      { label: "Sobre Pa'lla", href: '#' },
      { label: 'Contacto', href: 'mailto:hola@palla.pa' },
      { label: 'WhatsApp', href: 'https://wa.me/50700000000' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Términos de Uso', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#2D2687] rounded-t-[3rem] px-6 pt-16 pb-10">
      <div className="max-w-6xl mx-auto">

        {/* Top row: logo + tagline left, social right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-14">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-4 max-w-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="56" viewBox="0 0 250 88" fill="none" aria-label="Pa'lla">
              {/* Icon background square — white with low opacity so it reads as a subtle container */}
              <path d="M 3.01,28.73 C 3.01,17.78 3.31,11.29 9.26,6.64 C 15.06,2.09 20.82,4.03 47.91,3.82 H 51.71 C 68.82,3.82 75.12,4.21 80.72,8.39 C 87.91,13.72 88.21,19.81 88.21,34.42 V 56.48 C 88.21,68.74 87.28,75.76 79.72,81.01 C 74.72,84.52 67.49,84.52 54.11,84.52 H 28.21 C 18.61,84.52 12.91,83.96 7.81,79.22 C 2.81,74.61 3.01,68.01 3.01,60.22 V 28.73 Z" fill="rgba(255,255,255,0.18)"/>
              {/* Internal white elements — keep as-is */}
              <path d="M 16.01,35.82 V 75.12 H 31.61 V 35.82 H 15.01 Z" fill="#FEFFFE"/>
              <path d="M 15.91,11.82 L 11.71,25.02 C 10.41,29.22 13.91,33.02 18.41,33.02 C 23.01,33.02 25.91,30.32 27.61,26.72 C 28.61,30.82 31.71,33.32 36.01,33.32 C 40.81,33.32 43.61,30.12 44.61,26.42 C 45.81,30.32 48.71,33.02 52.81,33.02 C 57.11,33.02 59.71,30.12 60.81,26.62 C 62.01,30.22 65.01,32.92 69.41,32.92 C 72.31,32.92 74.21,31.62 74.21,30.42 V 43.72 C 74.21,57.22 66.11,64.62 50.11,64.62 H 43.91 V 68.82 H 49.91 C 68.01,68.82 81.71,60.22 81.71,44.62 V 35.52 C 81.71,20.72 76.91,11.82 62.41,11.82 H 15.91 Z" fill="#FEFFFE"/>
              {/* Orange arrow — keep as-is */}
              <path d="M 31.61,43.82 L 50.61,43.72 L 50.51,38.02 L 66.91,49.22 L 50.61,60.12 V 54.82 L 31.61,54.62 V 43.82 Z" fill="#F05033"/>
              {/* Text "Pa'lla" — change from #2D2687 to white */}
              <path d="M 101.51,19.22 H 116.31 C 128.21,19.22 134.31,25.42 134.31,34.62 C 134.31,43.22 128.21,49.62 117.41,49.62 H 111.41 V 63.02 H 101.51 V 19.22 Z M 116.21,41.72 C 122.51,41.72 124.31,38.32 124.31,34.52 C 124.31,30.32 122.31,27.52 116.81,27.52 H 111.41 V 41.72 H 116.21 Z" fill="white"/>
              <path d="M 134.91,54.82 C 134.91,48.62 139.91,45.62 148.11,45.62 H 156.51 V 44.32 C 156.51,40.72 154.11,39.32 150.11,39.32 C 146.61,39.32 144.31,40.62 142.21,42.82 L 137.21,37.62 C 140.61,34.22 144.91,32.42 151.11,32.42 C 160.81,32.42 166.41,36.32 166.41,44.92 V 63.02 H 156.61 V 58.42 C 154.61,61.82 151.41,63.62 146.31,63.62 C 139.41,63.62 134.91,59.82 134.91,54.82 Z M 156.61,52.22 V 50.22 H 150.91 C 146.91,50.22 144.81,51.32 144.81,53.82 C 144.81,56.12 146.61,57.22 149.71,57.22 C 153.71,57.22 156.61,54.92 156.61,52.22 Z" fill="white"/>
              <path d="M 186.91,19.22 H 196.31 V 63.02 H 186.91 V 19.22 Z" fill="white"/>
              <path d="M 202.21,19.22 H 211.51 V 63.02 H 202.21 V 19.22 Z" fill="white"/>
              <path d="M 215.31,54.62 C 215.31,48.42 220.31,45.62 228.51,45.62 H 237.41 V 44.32 C 237.41,40.72 235.01,39.32 231.01,39.32 C 227.51,39.32 225.21,40.62 223.11,42.82 L 218.11,37.62 C 221.51,34.22 226.21,32.42 232.41,32.42 C 242.11,32.42 247.21,36.82 247.21,44.92 V 63.02 H 238.01 V 58.42 C 236.01,61.82 232.81,63.62 227.71,63.62 C 220.81,63.62 215.31,60.22 215.31,54.62 Z M 237.51,52.22 V 50.22 H 231.31 C 227.31,50.22 225.71,51.32 225.71,53.82 C 225.71,56.12 227.51,57.22 230.61,57.22 C 234.61,57.22 237.51,55.22 237.51,52.22 Z" fill="white"/>
              <path d="M 163.81,23.72 L 179.21,19.52 C 181.31,18.82 182.81,20.62 181.51,22.52 L 174.51,33.82 C 173.51,35.32 171.41,34.62 171.51,32.82 L 171.71,27.12 C 171.71,26.22 171.11,26.02 170.21,26.02 L 164.81,26.22 C 162.61,26.32 162.01,24.42 163.81,23.72 Z" fill="#F05033"/>
            </svg>
            <p className="text-white/60 text-sm leading-relaxed">
              El sistema operativo para tiendas de barrio. Pedidos mayoristas, entrega en 24h y precios transparentes.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-1">
              <a href="#" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/50 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <p className="text-white text-xs font-semibold uppercase tracking-widest">
                  {col.heading}
                </p>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} Pa'lla. Todos los derechos reservados.</p>
          <p>
            Hecho con ♥ por{' '}
            <a
              href="#"
              className="text-white/55 hover:text-white transition-colors underline underline-offset-2"
            >
              Stacklane Studio
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
