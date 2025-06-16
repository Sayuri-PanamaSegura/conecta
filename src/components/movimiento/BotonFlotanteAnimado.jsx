import { useState } from "react";

// Convierte color HEX a RGBA con opacidad
function hexToRgba(hex, alpha) {
  const cleanHex = hex.replace("#", "");
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function BotonFlotanteAnimado({
  texto = "Agenda demo",
  href,
  onClick,
  type = "button",
  color = "#f5f5f5",
}) {
  const [hovered, setHovered] = useState(false);

  const commonClasses =
    "relative inline-block px-6 py-3 font-semibold rounded-xl mx-2 overflow-hidden transition-all duration-300 backdrop-blur-md";

  const rgbaShadow = hexToRgba(color, hovered ? 0.3 : 0.4);

  const commonStyles = {
    color: hovered ? color : "white",
    border: `2px solid ${color}`,
    backgroundColor: hovered ? "rgba(255, 255, 255, 0.15)" : color,
    boxShadow: `0 5px 15px ${rgbaShadow}`,
  };

  const innerSpanStyles = {
    backgroundColor: color,
    opacity: hovered ? 0 : 1,
    zIndex: 1,
    borderRadius: "0.75rem",
  };

  const borderEffectStyles = {
    width: hovered ? "100%" : "0",
    transform: "translateX(-50%)",
    border: hovered ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
    zIndex: 2,
  };

  if (href) {
    return (
      <a
        href={href}
        className={commonClasses}
        style={commonStyles}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="absolute inset-0 transition-opacity duration-500 ease-in-out" style={innerSpanStyles}></span>
        <span className="absolute top-0 left-1/2 h-full rounded-xl transition-all duration-500 ease-in-out" style={borderEffectStyles}></span>
        <span className="relative z-10">{texto}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={commonClasses}
      style={commonStyles}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="absolute inset-0 transition-opacity duration-500 ease-in-out" style={innerSpanStyles}></span>
      <span className="absolute top-0 left-1/2 h-full rounded-xl transition-all duration-500 ease-in-out" style={borderEffectStyles}></span>
      <span className="relative z-10">{texto}</span>
    </button>
  );
}
