# Implementation Plan: Pa'lla Landing Page

## Overview

Implementación incremental del landing page cinematográfico de Pa'lla. Cada tarea construye sobre la anterior, comenzando por la configuración base y terminando con el wiring completo de animaciones y tests.

Stack: React 19 + Vite + Tailwind CSS v3 + GSAP 3 + ScrollTrigger + Magic UI + shadcn/ui + Framer Motion + Lucide React + Vitest + fast-check

## Tasks

- [x] 1. Configuración del proyecto y estructura base
  - Inicializar proyecto Vite con React 19
  - Instalar dependencias core: `gsap`, `lucide-react`, `tailwindcss@3`, `vitest`, `@testing-library/react`, `fast-check`, `jest-axe`
  - Instalar `framer-motion` (requerido por componentes Magic UI)
  - Inicializar shadcn/ui: `npx shadcn@latest init` (seleccionar Tailwind CSS, directorio `src/components/ui`)
  - Instalar componentes Magic UI via registry de shadcn:
    - `npx shadcn@latest add "https://magicui.design/r/magic-card"`
    - `npx shadcn@latest add "https://magicui.design/r/border-beam"`
    - `npx shadcn@latest add "https://magicui.design/r/number-ticker"`
    - `npx shadcn@latest add "https://magicui.design/r/typing-animation"`
    - `npx shadcn@latest add "https://magicui.design/r/animated-beam"`
    - `npx shadcn@latest add "https://magicui.design/r/meteors"`
  - Configurar `tailwind.config.js` con la paleta de colores de Pa'lla (`#1E2A6E`, `#E8401C`, `#F5F5F0`, `#1A1A1A`) y fuentes personalizadas
  - Configurar `vitest.config.js` con jsdom environment y setup file
  - Crear `src/index.css` con imports de Google Fonts (Plus Jakarta Sans, Outfit, Cormorant Garamond), variables CSS y overlay de CSS Noise global via SVG turbulence a opacidad 0.05
  - Crear `src/main.jsx` con `gsap.registerPlugin(ScrollTrigger)` antes del render
  - Crear `src/App.jsx` con estructura semántica (`<header>`, `<main>`, `<footer>`) y placeholders de secciones
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 2. Navbar flotante con glassmorphism
  - [x] 2.1 Implementar `src/components/Navbar.jsx`
    - Estado `isScrolled` con `useEffect` + `window.addEventListener('scroll')` — umbral 50px
    - Clases condicionales: `backdrop-blur-[20px] bg-[#1E2A6E]/80` vs `bg-transparent`
    - Logo Pa'lla con colores `#1E2A6E` y `#E8401C`
    - Links de nav con `scrollIntoView({ behavior: 'smooth' })` a IDs: `features`, `how-it-works`, `pricing`
    - Botón CTA "Empieza Gratis" con `bg-[#E8401C]`
    - Estado `menuOpen` con botón hamburguesa (Lucide `Menu`/`X`) visible solo en `< md`
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8_

  - [ ]* 2.2 Escribir property test P4: Navbar glassmorphism para scroll > 50px
    - **Property 4: Navbar aplica glassmorphism para cualquier scroll > 50px**
    - **Validates: Requirements 2.3**

  - [ ]* 2.3 Escribir property test P5: Navbar colapsa a hamburguesa en viewport < 768px
    - **Property 5: Navbar colapsa a hamburguesa en viewport < 768px**
    - **Validates: Requirements 2.8**

  - [ ]* 2.4 Escribir unit tests para Navbar
    - Fondo transparente en scroll 0
    - Glassmorphism activo en scroll > 50px
    - Links visibles en desktop, ocultos en mobile
    - _Requirements: 2.2, 2.3, 2.8_

- [x] 3. Hero Section con animación GSAP staggered
  - [x] 3.1 Implementar `src/components/HeroSection.jsx`
    - Altura `100dvh`, imagen de fondo Unsplash con overlay `linear-gradient(#1E2A6E, #000000)` a 70% opacidad
    - Fallback `background-color: #1E2A6E` si imagen falla
    - Contenido en esquina inferior izquierda: headline "Abastece tu tienda" (Plus Jakarta Sans Bold), subheadline "sin salir del barrio." (Cormorant Garamond itálica, mínimo 5rem desktop)
    - Tres métricas en monospace: "15,000+ tiendas", "Entrega 24h", "5-15% más barato"
    - Botón CTA "Únete a Pa'lla" con `bg-[#E8401C] rounded-[2rem]` y scroll a `#pricing`
    - Atributo `alt` descriptivo en imagen de fondo
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.8, 3.9_

  - [x] 3.2 Agregar animación GSAP staggered fade-up al Hero
    - `useEffect` con patrón `gsap.context()` + early return si `prefers-reduced-motion`
    - Timeline: headline → subheadline → métricas → CTA, cada uno `from { y: 40, opacity: 0 }` con delay 0.15s entre elementos
    - Cleanup `ctx.revert()` en return
    - _Requirements: 3.7, 11.3_

  - [~]* 3.3 Escribir unit tests para HeroSection
    - Imagen tiene alt descriptivo no vacío
    - Métricas clave presentes en el DOM
    - CTA presente y apunta a `#pricing`
    - _Requirements: 3.6, 3.8, 11.4_

- [x] 4. Checkpoint — Estructura base y navegación
  - Asegurar que todos los tests pasan, verificar que Navbar y Hero renderizan correctamente. Consultar al usuario si hay dudas.

- [x] 5. Features Section — DiagnosticShuffler
  - [x] 5.1 Implementar `src/components/FeaturesSection/DiagnosticShuffler.jsx`
    - Estado `cards: string[]` con labels: "Precio mayorista", "Entrega en 24h", "Sin mínimo de compra"
    - `setInterval(3000ms)` que ejecuta `cards.push(cards.shift())` — mueve frontal al fondo
    - Stack visual con 3 tarjetas superpuestas con offset CSS (`translateY`, `scale`)
    - Animación GSAP spring-bounce en rotación: `ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)'`
    - `rounded-[2rem]` en todas las tarjetas, paleta azul marino y crema
    - Cleanup `clearInterval` en return del `useEffect`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [~]* 5.2 Escribir property test P6: Shuffler es permutación cíclica de período 3
    - **Property 6: Después de 3 rotaciones el orden de tarjetas es idéntico al inicial**
    - **Validates: Requirements 4.3**

  - [ ]* 5.3 Escribir unit tests para DiagnosticShuffler
    - Los 3 labels están presentes en el DOM
    - Después de 3 segundos (fake timers) la tarjeta frontal cambia
    - _Requirements: 4.2, 4.3_

- [x] 6. Features Section — TelemetryTypewriter
  - [x] 6.1 Implementar `src/components/FeaturesSection/TelemetryTypewriter.jsx`
    - Estado `displayText`, `messageIndex`, `isDeleting`
    - Ciclo typewriter: `setInterval(50ms escribir / 30ms borrar)` con `setTimeout(1500ms)` al completar mensaje
    - Mensajes: "Actualizando precios de arroz...", "Nuevo lote de aceite disponible", "Precio de azúcar actualizado", "Stock de bebidas confirmado", "Oferta especial en harina detectada"
    - Cursor `<span>` con clase `animate-blink` (keyframe opacity 0↔1 cada 1s) en color `#E8401C`
    - Indicador "En Vivo" con dot verde pulsante (`animate-pulse`)
    - Cleanup `clearInterval` + `clearTimeout` en return del `useEffect`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [ ]* 6.2 Escribir property test P7: Typewriter cicla mensajes en orden correcto y sin leaks
    - **Property 7: El siguiente mensaje es siempre (currentIndex + 1) % messages.length**
    - **Validates: Requirements 5.1, 5.3**

  - [ ]* 6.3 Escribir unit tests para TelemetryTypewriter
    - Indicador "En Vivo" presente
    - Cursor parpadeante presente
    - Texto inicial comienza a escribirse
    - _Requirements: 5.4, 5.5_

- [x] 7. Features Section — RouteScheduler
  - [x] 7.1 Implementar `src/components/FeaturesSection/RouteScheduler.jsx`
    - Estado `activeDays: Set<number>`, `confirmed: boolean`
    - Grid semanal con días: L, M, M, J, V, S, D
    - Ref `cursorRef` para cursor SVG animado
    - Timeline GSAP: cursor se mueve secuencialmente por cada día → activa día (fondo `#1E2A6E`) → llega a botón "Confirmar Ruta" → `setConfirmed(true)` → `setTimeout(2000ms)` → reset
    - Cleanup `tl.kill()` + `ctx.revert()` en return del `useEffect`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [ ]* 7.2 Escribir property test P8: Route Scheduler activa correctamente cada día
    - **Property 8: Cuando el cursor llega a un día, ese día tiene estado visual activo**
    - **Validates: Requirements 6.3**

  - [~]* 7.3 Escribir property test P9: Route Scheduler reinicia tras confirmación
    - **Property 9: Después de 2s con confirmed === true, activeDays vacío y confirmed === false**
    - **Validates: Requirements 6.5**

  - [ ]* 7.4 Escribir unit tests para RouteScheduler
    - Los 7 días del grid están presentes
    - Botón "Confirmar Ruta" presente
    - _Requirements: 6.1, 6.4_

- [x] 8. Ensamblar FeaturesSection
  - Crear `src/components/FeaturesSection.jsx` que importa y renderiza DiagnosticShuffler, TelemetryTypewriter y RouteScheduler
  - Layout: `grid grid-cols-1 md:grid-cols-3 gap-8`
  - Agregar `id="features"` para el scroll de navegación
  - _Requirements: 4.1, 5.1, 6.1_

- [x] 9. Checkpoint — Features Section completa
  - Asegurar que todos los tests pasan y las tres micro-UIs funcionan. Consultar al usuario si hay dudas.

- [x] 10. Manifesto Section con parallax y split-text
  - [x] 10.1 Implementar `src/components/ManifestoSection.jsx`
    - Fondo `#1A1A1A` con CSS Noise overlay
    - Texto del distribuidor tradicional en gris claro, tipografía grande
    - Respuesta de Pa'lla en blanco/rojo-naranja, escala mayor, Cormorant Garamond itálica
    - Refs para cada línea de texto
    - _Requirements: 7.1, 7.2, 7.3, 7.6_

  - [x] 10.2 Agregar animaciones ScrollTrigger al Manifesto
    - Parallax de fondo: `gsap.to(bg, { yPercent: -20, scrollTrigger: { scrub: 1 } })`
    - Split-text reveal: `gsap.from([line1, line2, line3, line4], { y: 60, opacity: 0, stagger: 0.2, scrollTrigger: { start: 'top 70%' } })`
    - Early return si `prefers-reduced-motion`
    - Cleanup `ctx.revert()`
    - _Requirements: 7.4, 7.5, 11.3_

  - [ ]* 10.3 Escribir unit tests para ManifestoSection
    - Texto del distribuidor presente
    - Respuesta de Pa'lla presente
    - _Requirements: 7.2, 7.3_

- [x] 11. How It Works Section — Sticky Stack
  - [x] 11.1 Implementar `src/components/HowItWorksSection.jsx` con estructura de 3 tarjetas
    - Cada tarjeta full-screen con número de paso (01, 02, 03) y título descriptivo
    - Tarjeta 01: mapa SVG de Panamá con `<circle>` pulsantes y líneas con `stroke-dashoffset`
    - Tarjeta 02: grid 4×4 con línea scanner animada via GSAP `repeat: -1`
    - Tarjeta 03: waveform SVG con `<path>` y `stroke-dashoffset` animado
    - `id="how-it-works"` para scroll de navegación
    - _Requirements: 8.1, 8.3, 8.4, 8.5, 8.6_

  - [x] 11.2 Agregar ScrollTrigger sticky stack al HowItWorks
    - `ScrollTrigger.create({ trigger: container, pin: true, scrub: 1, end: '+=300%' })`
    - Al entrar card 2: card 1 → `scale(0.9)`, `blur(20px)`, `opacity(0.5)`
    - Al entrar card 3: card 2 → `scale(0.9)`, `blur(20px)`, `opacity(0.5)`
    - Early return si `prefers-reduced-motion`
    - Cleanup `ctx.revert()`
    - _Requirements: 8.2, 8.7, 11.3_

  - [~]* 11.3 Escribir property test P10: Cada tarjeta tiene número de paso y título
    - **Property 10: Cada tarjeta renderiza número "0N" y título no vacío**
    - **Validates: Requirements 8.6**

  - [ ]* 11.4 Escribir unit tests para HowItWorksSection
    - Los tres pasos (01, 02, 03) están presentes
    - Títulos descriptivos no vacíos
    - _Requirements: 8.6_

- [x] 12. Pricing Section
  - [x] 12.1 Implementar `src/components/PricingSection.jsx`
    - Array `plans` con Básico (Gratis), Crecimiento ($29/mes, `featured: true`), Pro ($79/mes)
    - Cada plan con `features: string[]` no vacío
    - Tarjeta Crecimiento: `bg-[#1E2A6E]`, badge "Más Popular", CTA con `bg-[#E8401C]`
    - `rounded-[2rem]` en todas las tarjetas
    - Layout `grid-cols-1 md:grid-cols-3`; en mobile, tarjeta Crecimiento con `order-first`
    - `id="pricing"` para scroll de navegación
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

  - [ ]* 12.2 Escribir property test P11: Cada plan renderiza su lista de features
    - **Property 11: Cada plan tiene al menos un feature como cadena no vacía**
    - **Validates: Requirements 9.4**

  - [~]* 12.3 Escribir property test P12: Plan destacado aparece primero en mobile
    - **Property 12: En viewport < 768px, el plan featured aparece antes visualmente**
    - **Validates: Requirements 9.5**

  - [ ]* 12.4 Escribir unit tests para PricingSection
    - Los tres planes están presentes
    - Tarjeta Crecimiento tiene badge "Más Popular"
    - _Requirements: 9.1, 9.2_

- [x] 13. Footer
  - [x] 13.1 Implementar `src/components/Footer.jsx`
    - Fondo `#1A1A1A` con `rounded-t-[4rem]`
    - Logo Pa'lla, enlaces legales (Términos, Privacidad), redes sociales
    - Indicador "Sistema Operativo" con dot verde `animate-pulse`
    - Contacto: email y enlace WhatsApp Business
    - Copyright con `{new Date().getFullYear()}` dinámico
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

  - [~]* 13.2 Escribir property test P13: Copyright año es el año actual
    - **Property 13: Footer muestra el año retornado por new Date().getFullYear()**
    - **Validates: Requirements 10.5**

  - [ ]* 13.3 Escribir unit tests para Footer
    - Indicador "Sistema Operativo" presente
    - Año actual en copyright
    - _Requirements: 10.3, 10.5_

- [x] 14. Checkpoint — Todas las secciones implementadas
  - Asegurar que todos los tests pasan y todas las secciones renderizan. Consultar al usuario si hay dudas.

- [x] 15. Wiring final en App.jsx y accesibilidad
  - [x] 15.1 Ensamblar todas las secciones en `src/App.jsx`
    - Importar y renderizar en orden: Navbar, HeroSection, FeaturesSection, ManifestoSection, HowItWorksSection, PricingSection, Footer
    - Estructura semántica: `<header>` para Navbar, `<main>` para secciones, `<footer>` para Footer
    - Verificar que todos los `id` de sección coinciden con los `href` de los links de navegación
    - _Requirements: 11.6_

  - [ ]* 15.2 Escribir property test P3: Links de navegación hacen scroll al target correcto
    - **Property 3: El id del elemento al que se hace scroll coincide con el href del link**
    - **Validates: Requirements 2.7, 3.9**

  - [ ]* 15.3 Escribir property test P14: Todas las imágenes tienen alt no vacío
    - **Property 14: Ningún `<img>` tiene alt vacío o ausente**
    - **Validates: Requirements 11.4**

  - [ ]* 15.4 Escribir property test P15: Sin overflow horizontal en 320px
    - **Property 15: Ninguna sección tiene scrollWidth > 320 en viewport de 320px**
    - **Validates: Requirements 11.2**

  - [ ]* 15.5 Escribir property test P2: Reduced motion desactiva animaciones GSAP
    - **Property 2: Con prefers-reduced-motion, gsap.context retorna sin crear tweens**
    - **Validates: Requirements 11.3**

  - [~]* 15.6 Escribir property test P1: Invariante de contraste de color
    - **Property 1: Todos los pares texto/fondo tienen ratio >= 4.5:1**
    - **Validates: Requirements 1.4, 11.5**

  - [ ]* 15.7 Escribir unit tests de integración para App
    - Estructura semántica correcta (header, main, footer, nav)
    - Todas las secciones presentes en el DOM
    - _Requirements: 11.6_

- [x] 16. Checkpoint final — Asegurar que todos los tests pasan
  - Ejecutar `npx vitest --run` y verificar que todos los tests pasan. Consultar al usuario si hay dudas.

## Notes

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido
- Cada tarea referencia los requisitos específicos para trazabilidad
- Los property tests usan fast-check con mínimo 100 iteraciones (`fc.configureGlobal({ numRuns: 100 })`)
- Nunca usar `opacity: 0` como estado inicial en CSS — solo GSAP establece ese estado como punto de partida
- Todos los `gsap.context()` deben tener cleanup `ctx.revert()` para evitar memory leaks
- El tag format para property tests: `// Feature: palla-landing-page, Property N: <descripción>`
