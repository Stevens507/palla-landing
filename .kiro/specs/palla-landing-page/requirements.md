# Requirements Document

## Introduction

Landing page de alta fidelidad y cinematográfico para Pa'lla, un B2B marketplace que conecta tiendas de barrio panameñas (pulperías, abarrotes, mini-supermercados) con proveedores mayoristas. El landing debe comunicar la propuesta de valor de Pa'lla con animaciones pesadas y profesionales usando React 19, Tailwind CSS y GSAP 3 con ScrollTrigger. El objetivo es convertir tenderos panameños en usuarios registrados y comunicar credibilidad a inversores.

## Glossary

- **Landing_Page**: Aplicación React de una sola página que sirve como presencia web principal de Pa'lla
- **Navbar**: Barra de navegación flotante en forma de píldora (pill-shaped) fija en la parte superior
- **Hero_Section**: Sección inicial de pantalla completa (100dvh) con imagen de barrio panameño
- **Features_Section**: Sección de características con tres micro-UI interactivas (Dashboard Cards)
- **Manifesto_Section**: Sección filosófica con tipografía de gran escala y parallax
- **How_It_Works_Section**: Sección de proceso con tarjetas apiladas y ScrollTrigger
- **Pricing_Section**: Sección de planes y precios con tres niveles
- **Footer**: Pie de página con indicador de estado del sistema
- **GSAP**: GreenSock Animation Platform v3, librería de animaciones JavaScript
- **ScrollTrigger**: Plugin de GSAP para animaciones activadas por scroll
- **Diagnostic_Shuffler**: Componente de tarjetas superpuestas que rotan con spring-bounce
- **Telemetry_Typewriter**: Componente de feed de texto con efecto typewriter y cursor parpadeante
- **Route_Scheduler**: Componente de grid semanal con cursor SVG automatizado
- **Sticky_Stack**: Patrón de tarjetas full-screen apiladas con efecto de escala y blur al hacer scroll
- **Tendero**: Dueño o encargado de una tienda de barrio panameña (cliente objetivo)
- **CSS_Noise**: Textura visual generada con SVG turbulence aplicada como overlay global
- **Glassmorphism**: Efecto visual de vidrio esmerilado con backdrop-filter blur

## Requirements

### Requirement 1: Estructura y Configuración del Proyecto

**User Story:** Como desarrollador, quiero una estructura de proyecto React 19 correctamente configurada con todas las dependencias, para que el landing page pueda ser construido y desplegado sin fricción.

#### Acceptance Criteria

1. THE Landing_Page SHALL estar construido con React 19, Tailwind CSS v3, GSAP 3 con ScrollTrigger y Lucide React
2. THE Landing_Page SHALL importar las fuentes "Plus Jakarta Sans", "Outfit" y "Cormorant Garamond" desde Google Fonts
3. THE Landing_Page SHALL aplicar un overlay de CSS_Noise global con SVG turbulence a opacidad 0.05 sobre toda la página
4. THE Landing_Page SHALL usar la paleta de colores: primario azul marino (#1E2A6E), acento rojo-naranja (#E8401C), fondo crema (#F5F5F0) y carbón (#1A1A1A)
5. THE Landing_Page SHALL registrar el plugin ScrollTrigger de GSAP en el punto de entrada de la aplicación

---

### Requirement 2: Navbar Flotante (Floating Island)

**User Story:** Como tendero que visita el sitio, quiero una navegación clara y accesible, para que pueda encontrar la información relevante y contactar a Pa'lla fácilmente.

#### Acceptance Criteria

1. THE Navbar SHALL tener forma de píldora (pill-shaped) y posición fija en la parte superior de la pantalla
2. WHILE el usuario está en la parte superior de la página (scroll < 50px), THE Navbar SHALL mostrar fondo transparente
3. WHEN el usuario hace scroll más de 50px hacia abajo, THE Navbar SHALL aplicar efecto Glassmorphism con backdrop-filter blur de 20px y fondo azul marino a 80% de opacidad
4. THE Navbar SHALL mostrar el logo de Pa'lla con los colores oficiales (#1E2A6E y #E8401C) en el lado izquierdo
5. THE Navbar SHALL mostrar enlaces de navegación a las secciones: Características, Cómo Funciona y Precios
6. THE Navbar SHALL mostrar un botón de llamada a la acción "Empieza Gratis" con fondo rojo-naranja (#E8401C)
7. WHEN el usuario hace click en un enlace de navegación, THE Navbar SHALL hacer scroll suave (smooth scroll) a la sección correspondiente
8. WHEN el ancho de pantalla es menor a 768px, THE Navbar SHALL colapsar los enlaces en un menú hamburguesa

---

### Requirement 3: Hero Section

**User Story:** Como tendero que llega al sitio, quiero ver una propuesta de valor impactante visualmente, para que entienda inmediatamente qué es Pa'lla y por qué me beneficia.

#### Acceptance Criteria

1. THE Hero_Section SHALL ocupar exactamente 100dvh de altura
2. THE Hero_Section SHALL mostrar una imagen de fondo de barrio panameño o mercado local con overlay gradiente de azul marino (#1E2A6E) a negro (#000000) a 70% de opacidad
3. THE Hero_Section SHALL posicionar el contenido textual en la esquina inferior izquierda (bottom-left)
4. THE Hero_Section SHALL mostrar el headline principal "Abastece tu tienda" en tipografía Bold Sans (Plus Jakarta Sans o Outfit) de gran escala
5. THE Hero_Section SHALL mostrar el subheadline "sin salir del barrio." en tipografía Cormorant Garamond itálica de escala masiva (mínimo 5rem en desktop)
6. THE Hero_Section SHALL mostrar tres métricas clave en formato monospace: "15,000+ tiendas", "Entrega 24h" y "5-15% más barato"
7. WHEN la página carga, THE Hero_Section SHALL ejecutar animación GSAP staggered fade-up con delay de 0.15s entre cada elemento
8. THE Hero_Section SHALL mostrar un botón CTA "Únete a Pa'lla" con fondo rojo-naranja (#E8401C) y border-radius rounded-[2rem]
9. WHEN el usuario hace click en el CTA del hero, THE Landing_Page SHALL hacer scroll suave a la sección de registro o precios

---

### Requirement 4: Features Section — Diagnostic Shuffler (Card 1)

**User Story:** Como tendero, quiero ver los beneficios clave de Pa'lla de forma dinámica, para que entienda rápidamente el valor sin leer texto largo.

#### Acceptance Criteria

1. THE Diagnostic_Shuffler SHALL mostrar 3 tarjetas superpuestas con offset visual (stack effect)
2. THE Diagnostic_Shuffler SHALL mostrar los labels: "Precio mayorista", "Entrega en 24h" y "Sin mínimo de compra"
3. WHEN han transcurrido 3 segundos desde la última rotación, THE Diagnostic_Shuffler SHALL rotar la tarjeta frontal al fondo con animación spring-bounce usando GSAP
4. THE Diagnostic_Shuffler SHALL usar border-radius rounded-[2rem] en todas las tarjetas
5. THE Diagnostic_Shuffler SHALL usar la paleta de colores de Pa'lla con variaciones de azul marino y crema

---

### Requirement 5: Features Section — Telemetry Typewriter (Card 2)

**User Story:** Como tendero, quiero ver que el catálogo de Pa'lla está actualizado en tiempo real, para que confíe en que los precios son actuales.

#### Acceptance Criteria

1. THE Telemetry_Typewriter SHALL mostrar un feed de texto que cicla mensajes relacionados con actualizaciones de inventario
2. THE Telemetry_Typewriter SHALL incluir mensajes como: "Actualizando precios de arroz...", "Nuevo lote de aceite disponible", "Precio de azúcar actualizado", "Stock de bebidas confirmado"
3. WHEN un mensaje termina de escribirse, THE Telemetry_Typewriter SHALL esperar 1.5 segundos y luego borrar el texto y escribir el siguiente mensaje
4. THE Telemetry_Typewriter SHALL mostrar un cursor parpadeante de color rojo-naranja (#E8401C) al final del texto
5. THE Telemetry_Typewriter SHALL mostrar un indicador "En Vivo" con dot verde pulsante en la esquina superior de la tarjeta

---

### Requirement 6: Features Section — Route Scheduler (Card 3)

**User Story:** Como tendero, quiero ver que Pa'lla tiene rutas de entrega organizadas, para que confíe en que recibiré mi pedido a tiempo.

#### Acceptance Criteria

1. THE Route_Scheduler SHALL mostrar un grid semanal con los días: L, M, M, J, V, S, D
2. THE Route_Scheduler SHALL mostrar un cursor SVG animado que se mueve automáticamente entre los días del grid
3. WHEN el cursor SVG llega a un día, THE Route_Scheduler SHALL activar visualmente ese día (cambio de color a azul marino o rojo-naranja)
4. THE Route_Scheduler SHALL mostrar un botón "Confirmar Ruta" que el cursor SVG hace click automáticamente al final de la secuencia
5. WHEN el cursor SVG hace click en "Confirmar Ruta", THE Route_Scheduler SHALL reiniciar la animación después de 2 segundos

---

### Requirement 7: Manifesto Section (Filosofía)

**User Story:** Como tendero o inversor, quiero entender la filosofía de Pa'lla, para que sienta que la empresa entiende mis necesidades reales.

#### Acceptance Criteria

1. THE Manifesto_Section SHALL usar fondo carbón (#1A1A1A) con textura CSS_Noise
2. THE Manifesto_Section SHALL mostrar la pregunta del distribuidor tradicional: "El distribuidor tradicional pregunta: ¿Cuánto puedes comprar?" en tipografía grande con color gris claro
3. THE Manifesto_Section SHALL mostrar la respuesta de Pa'lla: "Nosotros preguntamos: ¿Qué necesita tu tienda?" en tipografía de mayor escala con color blanco o rojo-naranja
4. WHEN el usuario hace scroll hasta la Manifesto_Section, THE Manifesto_Section SHALL ejecutar animación GSAP split-text reveal donde cada línea aparece con fade-up staggered
5. THE Manifesto_Section SHALL aplicar efecto parallax al fondo usando ScrollTrigger de GSAP
6. THE Manifesto_Section SHALL usar Cormorant Garamond itálica para las frases filosóficas clave

---

### Requirement 8: How It Works Section (Sticky Stacking Archive)

**User Story:** Como tendero, quiero entender el proceso de Pa'lla paso a paso, para que sepa exactamente cómo hacer mi primer pedido.

#### Acceptance Criteria

1. THE How_It_Works_Section SHALL implementar el patrón Sticky_Stack con 3 tarjetas full-screen apiladas
2. WHEN una nueva tarjeta entra al viewport durante el scroll, THE How_It_Works_Section SHALL escalar la tarjeta anterior a 0.9, aplicar blur de 20px y reducir opacidad a 0.5
3. THE How_It_Works_Section SHALL mostrar la Tarjeta 1 con un mapa de rutas animado representando las zonas de entrega (Ciudad de Panamá, Colón, San Miguelito)
4. THE How_It_Works_Section SHALL mostrar la Tarjeta 2 con un grid de productos con efecto de scanner animado
5. THE How_It_Works_Section SHALL mostrar la Tarjeta 3 con una waveform animada representando la confirmación de pedido
6. EACH tarjeta SHALL mostrar un número de paso (01, 02, 03) y título descriptivo del proceso
7. THE How_It_Works_Section SHALL usar ScrollTrigger con pin:true para mantener la sección fija durante la secuencia de scroll

---

### Requirement 9: Pricing Section

**User Story:** Como tendero, quiero ver claramente los planes disponibles, para que pueda elegir el que mejor se adapta a mi tienda.

#### Acceptance Criteria

1. THE Pricing_Section SHALL mostrar un grid de 3 columnas con los planes: "Básico", "Crecimiento" y "Pro"
2. THE Pricing_Section SHALL destacar visualmente la tarjeta "Crecimiento" como plan recomendado con fondo azul marino (#1E2A6E)
3. THE Pricing_Section SHALL mostrar el botón de CTA de la tarjeta "Crecimiento" con fondo rojo-naranja (#E8401C)
4. THE Pricing_Section SHALL mostrar los beneficios de cada plan incluyendo: acceso al catálogo, límites de pedido, soporte y acceso a crédito
5. WHEN el ancho de pantalla es menor a 768px, THE Pricing_Section SHALL mostrar las tarjetas en una sola columna con la tarjeta "Crecimiento" primero
6. THE Pricing_Section SHALL usar border-radius rounded-[2rem] en todas las tarjetas de precio

---

### Requirement 10: Footer

**User Story:** Como visitante del sitio, quiero encontrar información de contacto y estado del sistema, para que pueda comunicarme con Pa'lla y saber si el servicio está operativo.

#### Acceptance Criteria

1. THE Footer SHALL usar fondo carbón (#1A1A1A) con border-radius rounded-t-[4rem] en la parte superior
2. THE Footer SHALL mostrar el logo de Pa'lla, enlaces legales (Términos, Privacidad) y redes sociales
3. THE Footer SHALL mostrar un indicador "Sistema Operativo" con dot verde pulsante (animación CSS pulse)
4. THE Footer SHALL mostrar información de contacto: email y enlace a WhatsApp Business
5. THE Footer SHALL mostrar el texto de copyright con el año actual generado dinámicamente

---

### Requirement 11: Rendimiento y Accesibilidad

**User Story:** Como tendero con conexión móvil limitada, quiero que el sitio cargue rápido y sea usable, para que no abandone por frustración técnica.

#### Acceptance Criteria

1. THE Landing_Page SHALL obtener un score de Lighthouse Performance mayor a 80 en desktop
2. THE Landing_Page SHALL ser completamente funcional en dispositivos móviles con ancho mínimo de 320px
3. WHEN el usuario tiene activada la preferencia `prefers-reduced-motion`, THE Landing_Page SHALL desactivar todas las animaciones GSAP y mostrar el contenido estático
4. THE Landing_Page SHALL usar atributos `alt` descriptivos en todas las imágenes
5. THE Landing_Page SHALL mantener un ratio de contraste mínimo de 4.5:1 entre texto y fondo en todas las secciones
6. THE Landing_Page SHALL usar etiquetas HTML semánticas (header, main, section, footer, nav) para estructura accesible
