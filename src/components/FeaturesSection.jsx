import { Card, CardContent } from '@/components/ui/card'
import appHomeCroppedImg from '../assets/app-home-cropped.png'
import deliveryImg from '../assets/feature-delivery-24h.png'
import deliveryFreeImg from '../assets/feature-delivery-free.png'
import pricesImg from '../assets/feature-transparent-prices.png'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-[#F4F6FA]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold font-sans uppercase tracking-widest mb-2"
            style={{ color: '#2D2687' }}
          >
            Plataforma
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold font-sans leading-tight"
            style={{ color: '#1A1A1A' }}
          >
            Todo lo que{' '}
            <span style={{ color: '#2D2687', fontStyle: 'italic' }}>tu tienda</span>{' '}
            necesita
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Card 1: Pedidos 24/7 — app image pegada al suelo */}
          <Card className="border-0 shadow-none overflow-hidden rounded-2xl bg-white relative">
            {/* Decorative blobs */}
            <div className="absolute top-4 right-8 w-28 h-28 rounded-full bg-[#EEF1FB] opacity-70" />
            <div className="absolute -bottom-4 right-20 w-24 h-24 rounded-full bg-[#FFF4E6] opacity-70" />
            <CardContent className="p-0 flex items-stretch h-[140px] relative z-10">
              <div className="flex-1 pl-6 pr-2 py-4 flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#2D2687' }}
                  />
                  <h3 className="font-sans font-bold text-xl text-gray-900">
                    Pedidos 24/7
                  </h3>
                </div>
                <p className="font-sans text-[15px] text-gray-500 leading-snug">
                  Haz tu pedido cuando quieras, desde el celular. Sin esperar al vendedor.
                </p>
              </div>
              <div className="flex-shrink-0 w-[150px] relative overflow-hidden">
                <img
                  src={appHomeCroppedImg}
                  alt="App Pa'lla"
                  className="absolute bottom-0 right-2 w-[130px] rounded-t-lg shadow-sm object-cover object-top"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Entrega en 24h — imagen centrada */}
          <Card className="border-0 shadow-none overflow-hidden rounded-2xl bg-white relative">
            {/* Decorative blobs */}
            <div className="absolute top-2 right-12 w-32 h-32 rounded-full bg-[#EEF1FB] opacity-70" />
            <div className="absolute bottom-2 right-4 w-20 h-20 rounded-full bg-[#E8F5E9] opacity-60" />
            <CardContent className="p-0 flex items-stretch h-[140px] relative z-10">
              <div className="flex-1 pl-6 pr-2 py-4 flex flex-col justify-center min-w-0">
                <h3 className="font-sans font-bold text-xl text-gray-900 mb-1">
                  Entrega en 24h
                </h3>
                <p className="font-sans text-[15px] text-gray-500 leading-snug">
                  Tu pedido llega directo a tu tienda al día siguiente.
                </p>
              </div>
              <div className="flex-shrink-0 w-[170px] relative overflow-hidden">
                <img
                  src={deliveryImg}
                  alt="Entrega rápida en 24 horas"
                  className="absolute top-1/2 -translate-y-1/2 right-1 w-[160px] object-contain"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Precios transparentes — imagen centrada */}
          <Card className="border-0 shadow-none overflow-hidden rounded-2xl bg-white relative">
            {/* Decorative blobs */}
            <div className="absolute -top-2 right-6 w-28 h-28 rounded-full bg-[#FFF0ED] opacity-70" />
            <div className="absolute bottom-0 right-16 w-24 h-24 rounded-full bg-[#EEF1FB] opacity-60" />
            <CardContent className="p-0 flex items-stretch h-[140px] relative z-10">
              <div className="flex-1 pl-6 pr-2 py-4 flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className="text-xl font-bold leading-none"
                    style={{ color: '#F05033' }}
                  >
                    +
                  </span>
                  <h3 className="font-sans font-bold text-xl text-gray-900">
                    Precios transparentes
                  </h3>
                </div>
                <p className="font-sans text-[15px] text-gray-500 leading-snug">
                  Siempre sabes cuánto pagas. Sin sorpresas.
                </p>
              </div>
              <div className="flex-shrink-0 w-[170px] relative overflow-hidden">
                <img
                  src={pricesImg}
                  alt="Precios claros y transparentes"
                  className="absolute top-1/2 -translate-y-1/2 right-1 w-[155px] object-contain"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Delivery gratis — imagen centrada */}
          <Card className="border-0 shadow-none overflow-hidden rounded-2xl bg-white relative">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-10 w-28 h-28 rounded-full bg-[#EEF1FB] opacity-70" />
            <div className="absolute -bottom-2 right-2 w-24 h-24 rounded-full bg-[#FFF4E6] opacity-60" />
            <CardContent className="p-0 flex items-stretch h-[140px] relative z-10">
              <div className="flex-1 pl-6 pr-2 py-4 flex flex-col justify-center min-w-0">
                <h3 className="font-sans font-bold text-xl text-gray-900 mb-1">
                  Delivery gratis
                </h3>
                <p className="font-sans text-[15px] text-gray-500 leading-snug">
                  Tu pedido llega sin costo de envío. Así de simple.
                </p>
              </div>
              <div className="flex-shrink-0 w-[170px] relative overflow-hidden">
                <img
                  src={deliveryFreeImg}
                  alt="Delivery gratis"
                  className="absolute top-1/2 -translate-y-1/2 right-1 w-[160px] object-contain"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}