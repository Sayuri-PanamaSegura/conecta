import { useEffect, useRef, useState } from "react";

const randomChar = () => {
  const chars = "!@#$%^&*()_+=<>?/[]{}|";
  return chars[Math.floor(Math.random() * chars.length)];
};

export default function HeroCriptoScroll({ titulo = "protección de datos" }) {
  const [displayedText, setDisplayedText] = useState(titulo);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isDone, setIsDone] = useState(false);

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
          setIsDone(false);
          setDisplayedText(titulo);

          // 🔒 Bloquea el scroll
          document.body.style.overflow = "hidden";

          timeoutRef.current = setTimeout(() => {
            glitchIntervalRef.current = setInterval(() => {
              setDisplayedText(
                titulo
                  .split("")
                  .map((char) => (char === " " ? " " : randomChar()))
                  .join("")
              );
            }, 100);

            setTimeout(() => {
              clearInterval(glitchIntervalRef.current);
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
                  setIsDone(true);

                  // ✅ Desbloquea el scroll después de 500ms más (opcional)
                  setTimeout(() => {
                    document.body.style.overflow = "";
                  }, 500);
                }
              }, 80);
            }, 1000);
          }, 500);
        }

        if (!entry.isIntersecting && glitchingRef.current) {
          glitchingRef.current = false;
          setIsGlitching(false);
          setIsDone(false);

          clearInterval(intervalRef.current);
          clearInterval(glitchIntervalRef.current);
          clearTimeout(timeoutRef.current);
          setDisplayedText(titulo);

          // 🧹 Asegura que se desbloquee el scroll por si acaso
          document.body.style.overflow = "";
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

      // 🧼 Limpieza final del scroll
      document.body.style.overflow = "";
    };
  }, [titulo]);

  return (
    <h2
      ref={ref}
      data-text={titulo}
      className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-[#800080] transition-all duration-300 ${
        isDone ? "glitch" : ""
      }`}
    >
      {displayedText}
    </h2>
  );
}
