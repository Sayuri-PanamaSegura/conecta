import { useState } from "react";

export default function AnimatedButton({
textoBoton = "Ver más",
  href = "#",
  colorTexto = "#800080",
}) {
  return (
    <a
      href={href}
      className="relative inline-block font-medium transition-colors duration-300"
      style={{ color: colorTexto }}
    >
      <span className="relative z-10">{textoBoton}</span>
      <span
        className="absolute bottom-0 left-1/2 w-0 h-[2px] transition-all duration-300 ease-out"
        style={{
          backgroundColor: colorTexto,
          transform: "translateX(-50%)",
        }}
      ></span>

      <style>{`
        a:hover span:nth-child(2) {
          width: 100%;
        }
      `}</style>
    </a>
  );
}