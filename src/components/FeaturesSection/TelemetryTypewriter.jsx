import { useState, useEffect, useRef } from 'react';

const MESSAGES = [
  "Actualizando precios de arroz...",
  "Nuevo lote de aceite disponible",
  "Precio de azúcar actualizado",
  "Stock de bebidas confirmado",
  "Oferta especial en harina detectada",
];

export default function TelemetryTypewriter() {
  const [displayText, setDisplayText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentMessage = MESSAGES[messageIndex];
    const speed = isDeleting ? 30 : 50;

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => {
        if (!isDeleting) {
          // Escribiendo
          const next = currentMessage.slice(0, prev.length + 1);
          if (next === currentMessage) {
            // Mensaje completo — esperar 1.5s y empezar a borrar
            clearInterval(intervalRef.current);
            timeoutRef.current = setTimeout(() => {
              setIsDeleting(true);
            }, 1500);
          }
          return next;
        } else {
          // Borrando
          const next = prev.slice(0, -1);
          if (next === '') {
            // Borrado completo — pasar al siguiente mensaje
            clearInterval(intervalRef.current);
            setIsDeleting(false);
            setMessageIndex(i => (i + 1) % MESSAGES.length);
          }
          return next;
        }
      });
    }, speed);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [messageIndex, isDeleting]);

  return (
    <div className="rounded-[2rem] bg-[#1A1A1A] p-6 w-72 h-40 flex flex-col justify-between relative">
      {/* Indicador "En Vivo" */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400 text-xs font-mono font-semibold">En Vivo</span>
      </div>

      {/* Texto typewriter */}
      <div className="font-mono text-sm text-white/90 leading-relaxed">
        {displayText}
        <span
          className="animate-blink"
          style={{ color: '#E8401C' }}
          aria-hidden="true"
        >|</span>
      </div>
    </div>
  );
}
