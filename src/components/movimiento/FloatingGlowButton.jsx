export default function FloatingGlowButton({
  textoBoton = "Contacto",
  href = "/contacto",
  color = "#800080",
}) {
  return (
    <a
      href={href}
      className="inline-block px-6 py-3 font-semibold rounded-xl transition-all duration-300 relative"
      style={{
        backgroundColor: color,
        color: "white",
        boxShadow: `0 5px 15px rgba(128, 0, 128, 0.3)`,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = `0 8px 25px rgba(128, 0, 128, 0.6)`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = `0 5px 15px rgba(128, 0, 128, 0.3)`)
      }
    >
      {textoBoton}
    </a>
  );
}
