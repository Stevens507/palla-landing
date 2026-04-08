import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const WEEK_DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export default function RouteScheduler() {
  const [activeDays, setActiveDays] = useState(new Set());
  const [confirmed, setConfirmed] = useState(false);
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const dayRefs = useRef([]);
  const tlRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const runAnimation = () => {
        setActiveDays(new Set());
        setConfirmed(false);

        const tl = gsap.timeline({ delay: 0.5 });
        tlRef.current = tl;

        // Mover cursor a cada día
        WEEK_DAYS.forEach((_, i) => {
          const dayEl = dayRefs.current[i];
          if (!dayEl) return;

          tl.to(cursorRef.current, {
            x: dayEl.offsetLeft - containerRef.current.offsetLeft + dayEl.offsetWidth / 2 - 8,
            y: dayEl.offsetTop - containerRef.current.offsetTop + dayEl.offsetHeight / 2 - 8,
            duration: 0.4,
            ease: 'power2.inOut',
          }).add(() => {
            setActiveDays(prev => new Set([...prev, i]));
          });
        });

        // Confirmar
        tl.to(cursorRef.current, { scale: 0.8, duration: 0.2 })
          .add(() => setConfirmed(true))
          .to(cursorRef.current, { scale: 1, duration: 0.2 })
          .to({}, { duration: 2, onComplete: runAnimation }); // reiniciar después de 2s
      };

      runAnimation();
    }, containerRef);

    return () => {
      tlRef.current?.kill();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative rounded-[2rem] bg-[#1A1A1A] p-6 w-72 h-48 flex flex-col justify-between overflow-hidden"
    >
      {/* Cursor SVG animado */}
      <div
        ref={cursorRef}
        className="absolute w-4 h-4 pointer-events-none z-10"
        style={{ top: 0, left: 0 }}
      >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L14 8L8 9L6 14L2 2Z" fill="#E8401C" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Grid semanal */}
      <div className="grid grid-cols-7 gap-1">
        {WEEK_DAYS.map((day, i) => (
          <div
            key={i}
            ref={el => (dayRefs.current[i] = el)}
            className={`flex items-center justify-center rounded-lg text-xs font-mono font-semibold h-8 transition-colors duration-300 ${
              activeDays.has(i)
                ? 'bg-[#1E2A6E] text-white'
                : 'bg-white/10 text-white/50'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Botón Confirmar Ruta */}
      <button
        className={`w-full rounded-xl py-2 text-sm font-semibold transition-colors duration-300 ${
          confirmed
            ? 'bg-[#E8401C] text-white'
            : 'bg-white/10 text-white/50'
        }`}
        disabled
        aria-label="Confirmar ruta de entrega"
      >
        {confirmed ? '✓ Ruta Confirmada' : 'Confirmar Ruta'}
      </button>
    </div>
  );
}
