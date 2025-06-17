import { useEffect, useRef, useState } from "react";

const randomChar = () => {
  const chars = "!@#$%^&*()_+=<>?/[]{}|";
  return chars[Math.floor(Math.random() * chars.length)];
};

export default function HeroCriptoScroll({ titulo = "con la tecnología más robusta: HSMs" }) {
  const [displayedText, setDisplayedText] = useState(titulo);
  const [isGlitching, setIsGlitching] = useState(false);
  const ref = useRef(null);
  const glitchingRef = useRef(false);
  const intervalRef = useRef(null);
  const glitchIntervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !glitchingRef.current) {
          glitchingRef.current = true;
          setIsGlitching(true);
          setDisplayedText(titulo); // ✅ Mostrar normal al principio

          // ⏳ Esperar un poco antes de empezar el efecto glitch
          timeoutRef.current = setTimeout(() => {
            // 🔁 Fase 1: encriptar completamente por 1 segundo
            glitchIntervalRef.current = setInterval(() => {
              setDisplayedText(
                titulo
                  .split("")
                  .map((char) => (char === " " ? " " : randomChar()))
                  .join("")
              );
            }, 100);

            // ⏳ Después de 1 segundo, pasar a revelar
            setTimeout(() => {
              clearInterval(glitchIntervalRef.current);

              // 🔁 Fase 2: desencriptar letra por letra
              let i = 0;
              intervalRef.current = setInterval(() => {
                setDisplayedText(
                  titulo
                    .split("")
                    .map((char, idx) =>
                      idx < i || char === " " ? char : randomChar()
                    )
                    .join("")
                );
                i++;
                if (i > titulo.length) {
                  clearInterval(intervalRef.current);
                }
              }, 80);
            }, 1000); // 1 segundo de glitch
          }, 500); // medio segundo después de entrar
        }

        if (!entry.isIntersecting && glitchingRef.current) {
          glitchingRef.current = false;
          setIsGlitching(false);
          clearInterval(intervalRef.current);
          clearInterval(glitchIntervalRef.current);
          clearTimeout(timeoutRef.current);
          setDisplayedText(titulo); // ← Volver a mostrar texto limpio
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
      clearInterval(intervalRef.current);
      clearInterval(glitchIntervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [titulo]);

  return (
    <h2
      ref={ref}
      className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#800080] tracking-wide transition-all duration-300`}
    >
      {displayedText}
    </h2>
  );
}
