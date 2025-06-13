import { useState } from "react";

export default function BotonFlotanteAnimado({
  texto = "Agenda demo",
  href = "#",
  color = "#800080",
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-block px-6 py-3 font-semibold rounded-xl mx-2 overflow-hidden transition-all duration-300 backdrop-blur-md"
      style={{
        color: hovered ? color : "white",
        border: `2px solid ${color}`,
        backgroundColor: hovered
          ? "rgba(255, 255, 255, 0.15)"
          : color,
        boxShadow: hovered
          ? `0 4px 30px rgba(128, 0, 128, 0.3)`
          : "0 5px 15px rgba(128, 0, 128, 0.4)",
      }}
    >
      {/* Fondo relleno que se desvanece */}
      <span
        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          backgroundColor: color,
          opacity: hovered ? 0 : 1,
          zIndex: 1,
          borderRadius: "0.75rem",
        }}
      ></span>

      {/* Contorno que aparece desde el centro */}
      <span
        className="absolute top-0 left-1/2 h-full border rounded-xl transition-all duration-500 ease-in-out"
        style={{
          width: hovered ? "100%" : "0",
          transform: "translateX(-50%)",
          borderColor: `rgba(255, 255, 255, 0.1)`,
          zIndex: 2,
        }}
      ></span>

      {/* Texto visible */}
      <span className="relative z-10">{texto}</span>
    </a>
  );
}
