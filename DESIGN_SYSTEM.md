# Pa'lla — Design System & Brand Guidelines

## Colores oficiales

Estos son los únicos colores de marca. No improvises con otros.

| Token | Hex | Uso |
|---|---|---|
| `palla-primary` | `#2D2687` | Azul profundo — color principal de marca |
| `palla-accent` | `#F05033` | Naranja-rojo — acción, énfasis, CTA secundario |
| `palla-bg` | `#FEFFFE` | Blanco casi puro — fondo base de la app |
| `palla-dark` | `#1A1A1A` | Casi negro — texto principal |

### Cómo usarlos en Tailwind

```jsx
// Fondo primario
<div className="bg-palla-primary text-white" />

// Botón de acción
<button className="bg-palla-accent text-white" />

// Fondo de página
<div className="bg-palla-bg" />

// Texto principal
<p className="text-palla-dark" />
```

### Colores de superficie (no son de marca, son utilitarios)

- `#F4F6FA` — fondo de secciones con contraste suave (usado en FeaturesSection)
- `#EEF1FB` — blob decorativo azul muy claro
- `#FFF0ED` — blob decorativo naranja muy claro
- `gray-500` / `gray-700` / `gray-900` — texto secundario y terciario (Tailwind defaults)

---

## Tipografía

Tres familias, cada una con un rol específico.

| Variable | Familia | Uso |
|---|---|---|
| `font-sans` | Plus Jakarta Sans → Outfit (fallback) | Todo el UI: botones, labels, body, nav |
| `font-drama` | Cormorant Garamond | Titulares editoriales, manifesto, frases de impacto |
| `font-mono` | ui-monospace | Datos técnicos, stats, subtítulos tipo "terminal" |

### Reglas de uso

- `font-sans` es el default. Úsalo para todo lo que no sea editorial.
- `font-drama` solo para momentos de peso emocional o storytelling. No lo uses en UI funcional.
- `font-mono` para datos, métricas, o cuando quieras dar sensación de precisión técnica.

### Pesos disponibles

- Plus Jakarta Sans: 400, 600, 700, 800
- Cormorant Garamond: 400, 600 (normal e italic)
- Outfit: 400, 600, 700

---

## Botones

Dos estilos principales:

```jsx
// CTA primario — fondo azul
<button className="px-8 py-4 rounded-full text-white font-semibold font-sans bg-palla-primary hover:opacity-90 transition-opacity" />

// CTA de acción — fondo naranja con sombra
<button
  className="px-8 py-4 rounded-full text-white font-semibold font-sans hover:opacity-90 transition-opacity"
  style={{ backgroundColor: '#F05033', boxShadow: '0 4px 20px rgba(240,80,51,0.4)' }}
/>

// CTA ghost — fondo blanco translúcido (sobre imágenes)
<button
  className="px-8 py-4 rounded-full font-semibold font-sans text-palla-primary hover:opacity-80 transition-opacity"
  style={{ backgroundColor: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)' }}
/>
```

Todos los botones usan `rounded-full`. No uses `rounded-md` ni `rounded-lg` para botones de CTA.

---

## Espaciado y layout

- Contenedor máximo: `max-w-5xl` o `max-w-6xl` con `mx-auto px-6`
- Padding vertical de secciones: `py-24`
- Gap entre cards: `gap-4`
- Navbar height: `64px` (h-16) — siempre descontar esto en scroll offsets

---

## Cards

```jsx
// Card estándar
<Card className="border-0 shadow-none overflow-hidden rounded-2xl bg-white" />
```

- Sin borde (`border-0`)
- Sin sombra (`shadow-none`) — el contraste lo da el fondo de sección `#F4F6FA`
- Esquinas: `rounded-2xl`
- Fondo: siempre `bg-white` sobre fondo de sección

---

## Efectos visuales

### Noise overlay
La app tiene un overlay de ruido sutil en todo el body (`opacity: 0.05`). Es parte del carácter visual. No lo elimines.

### Blobs decorativos
Círculos de color muy suave posicionados en absolute dentro de cards para dar profundidad:

```jsx
<div className="absolute top-4 right-8 w-28 h-28 rounded-full bg-[#EEF1FB] opacity-70" />
```

Usa solo los colores de blob definidos arriba. No inventes nuevos.

### Animaciones
- Entrada de elementos: GSAP con `y: 30, opacity: 0, duration: 0.7, ease: 'power3.out'`
- Siempre respetar `prefers-reduced-motion`
- Blink cursor: clase `.animate-blink` (definida en CSS)

---

## Logo

El logo de Pa'lla tiene tres colores internos:
- Fondo del ícono: `#2D2687` (azul)
- Letras/formas blancas: `#FEFFFE`
- Flecha: `#F05033` (naranja)

Nunca recolorices el logo. Úsalo siempre sobre fondos claros o con suficiente contraste.

---

## Reglas generales

1. **Azul primario para estructura** — navbar, fondos de sección oscuros, texto de marca, botones principales.
2. **Naranja solo para acción y énfasis** — CTAs, highlights, flechas, detalles que necesitan atención.
3. **Blanco/casi-blanco para superficies** — cards, fondos de sección, áreas de contenido.
4. **Casi-negro para texto** — nunca negro puro (`#000`), siempre `#1A1A1A`.
5. **No uses colores fuera de esta paleta** salvo grises de Tailwind para texto secundario.
6. **No uses sombras pesadas** — el diseño es limpio y plano. Si necesitas profundidad, usa blobs o cambio de fondo.
7. **Todos los radios de botón son `rounded-full`**. Las cards usan `rounded-2xl`.
