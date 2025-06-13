import { useState } from "react";

export default function AnimatedButton({
  textoBoton = "Agenda demo",
  coloresBoton = "#800080", // puede ser string o array
  href = "/contacto",
}) {
  const [hovered, setHovered] = useState(false);

  // Asegurar que siempre sea un array
  const colores = Array.isArray(coloresBoton) ? coloresBoton : [coloresBoton];

  const gradient = `linear-gradient(to right, transparent, white, ${colores.join(
    ", "
  )}, white, transparent)`;

  const mainColor = colores[0];

  return (
    <div className="text-center mb-16">
      <a
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative inline-block px-6 py-3 rounded-xl shadow-md border font-medium group overflow-hidden"
        style={{
          borderColor: "#ccc",
          color: "black",
          backgroundColor: "transparent",
          borderRadius: "0.75rem",
        }}
      >
        {hovered && (
          <span
            className="absolute top-0 left-[-50%] h-full w-[200%] pointer-events-none"
            style={{
              background: gradient,
              animation: "slide-line 1.2s ease-out forwards",
              zIndex: 1,
              opacity: 0.9,
              willChange: "transform, opacity",
              mixBlendMode: "screen",
              borderRadius: "0.75rem",
              filter: `
                drop-shadow(0 0 10px ${mainColor})
                drop-shadow(0 0 20px ${mainColor})
                drop-shadow(0 0 30px white)
              `,
            }}
          ></span>
        )}

        <span className="relative z-10">{textoBoton}</span>

        <style>{`
          @keyframes slide-line {
            0% {
              transform: translateX(-100%);
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }
        `}</style>
      </a>
    </div>
  );
}
