import { motion } from 'framer-motion'
import vendorImg from '../assets/vendor-illustration.png'

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="bg-[#F4F6FA] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* White card container with rounded corners and decorative blobs */}
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm min-h-[420px] flex flex-col md:flex-row items-stretch">

          {/* Decorative blobs — same style as FeaturesSection cards */}
          <div className="absolute top-6 right-10 w-40 h-40 rounded-full bg-[#EEF1FB] opacity-60 pointer-events-none" />
          <div className="absolute bottom-4 right-32 w-28 h-28 rounded-full bg-[#FFF4E6] opacity-60 pointer-events-none" />
          <div className="absolute -bottom-6 left-[48%] w-32 h-32 rounded-full bg-[#FFF0ED] opacity-40 pointer-events-none" />

          {/* Left — Vendor illustration with right fade into white */}
          <motion.div
            className="w-full md:w-[52%] relative flex-shrink-0"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={vendorImg}
              alt="Tendero en su tienda"
              className="w-full h-full object-cover object-center min-h-[320px] md:min-h-[420px]"
            />
            {/* Right-edge fade into white card background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, transparent 45%, #ffffff 92%)',
              }}
            />
            {/* Bottom fade for mobile */}
            <div
              className="absolute inset-0 pointer-events-none md:hidden"
              style={{
                background: 'linear-gradient(to bottom, transparent 60%, #ffffff 100%)',
              }}
            />
          </motion.div>

          {/* Right — Text + CTAs */}
          <div className="relative z-10 w-full md:w-[48%] px-8 md:px-10 lg:px-14 py-12 md:py-0 flex flex-col justify-center gap-4">

            <motion.p
              variants={fadeRight}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm text-gray-400 font-medium"
            >
              Para tiendas de barrio
            </motion.p>

            <motion.h2
              variants={fadeRight}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.08]"
            >
              ¿Tienes una tienda?
              <br />
              <span className="text-[#2D2687]">Pa</span><span className="text-[#F05033]">'</span><span className="text-[#2D2687]">lla</span> es para ti.
            </motion.h2>

            <motion.p
              variants={fadeRight}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-gray-500 text-base leading-relaxed max-w-sm"
            >
              Precios mayoristas, entrega al día siguiente y sin contratos.
              Abastece tu tienda desde el celular.
            </motion.p>

            <motion.div
              variants={fadeRight}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap items-center gap-5 pt-1"
            >
              <a
                href="#unete"
                className="inline-flex items-center bg-[#F05033] hover:bg-[#d9442a] text-white px-7 py-3.5 rounded-xl font-bold text-base transition-colors shadow-sm"
              >
                Únete gratis →
              </a>
              <a
                href="#proveedor"
                className="text-[#1A1A1A] font-semibold text-base underline underline-offset-4 hover:text-[#F05033] transition-colors"
              >
                Soy proveedor
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
