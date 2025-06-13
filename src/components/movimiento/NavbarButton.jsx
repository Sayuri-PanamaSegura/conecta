// src/components/NavbarButton.jsx
import { useState } from "react";

export default function NavbarButton({
  texto = "CONTACTO",
  href = "/contacto",
  colores = ["#800080", "#ff007f", "#00ffff"],
}) {
  const [hovered, setHovered] = useState(false);

  
  const gradient = `linear-gradient(to right, transparent, white, ${colores.join(
    ", "
  )}, white, transparent)`;

  return (
<a
  href={href}
  onMouseEnter={() => {
    console.log("🟣 Mouse sobre el botón");
    setHovered(true);
  }}
  onMouseLeave={() => {
    console.log("⚪ Mouse fuera del botón");
    setHovered(false);
  }}
  className="relative inline-block px-6 py-2 font-medium text-black hidden md:inline-block shadow-md rounded-full overflow-hidden border border-gray-300 bg-white"
>
  {hovered && (
    <span
      className="absolute top-0 left-[-50%] w-[200%] h-full pointer-events-none z-0 opacity-90 rounded-full"
      style={{
        background: gradient,
        animation: "slide-line 1.2s ease-out forwards",
      
        filter: `
          drop-shadow(0 0 10px ${colores[0]})
          drop-shadow(0 0 20px ${colores[1] || colores[0]})
          drop-shadow(0 0 30px white)
        `,
      }}
    />
  )}

  <span className="relative z-10">{texto}</span>

  <style jsx>{`
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


  );
}
