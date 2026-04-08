import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const LABELS = ['Precio mayorista', 'Entrega en 24h', 'Sin mínimo de compra'];

// Stack positions: index 0 = fondo, index 1 = medio, index 2 = frente
const CARD_STYLES = [
  { transform: 'translateY(16px) scale(0.92)', opacity: 0.5, zIndex: 1 },
  { transform: 'translateY(8px) scale(0.96)', opacity: 0.75, zIndex: 2 },
  { transform: 'translateY(0) scale(1)', opacity: 1, zIndex: 3 },
];

// Colores azul marino con variaciones para el stack
const CARD_COLORS = ['#3d4f9e', '#2d3d8a', '#1E2A6E'];

export default function DiagnosticShuffler() {
  const [cards, setCards] = useState(LABELS);
  const intervalRef = useRef(null);
  const frontCardRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (frontCardRef.current) {
        gsap.to(frontCardRef.current, {
          y: -20,
          rotation: -5,
          opacity: 0,
          duration: 0.35,
          ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          onComplete: () => {
            // Reset GSAP transforms antes de que React re-renderice
            gsap.set(frontCardRef.current, { y: 0, rotation: 0, opacity: 1 });
            setCards(prev => {
              const next = [...prev];
              next.push(next.shift()); // mueve el primer elemento al final
              return next;
            });
          },
        });
      } else {
        setCards(prev => {
          const next = [...prev];
          next.push(next.shift());
          return next;
        });
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: '200px', width: '280px' }}
    >
      {cards.map((label, index) => {
        const style = CARD_STYLES[index];
        const isFront = index === cards.length - 1; // último en el array = frente
        return (
          <div
            key={label}
            ref={isFront ? frontCardRef : null}
            className="absolute rounded-[2rem] flex items-center justify-center p-6"
            style={{
              width: '260px',
              height: '160px',
              backgroundColor: CARD_COLORS[index],
              transform: style.transform,
              opacity: style.opacity,
              zIndex: style.zIndex,
              transition: 'transform 0.5s ease, opacity 0.5s ease',
            }}
          >
            <span className="text-white font-semibold text-lg text-center leading-tight">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
