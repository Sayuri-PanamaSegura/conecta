export default function ShineButton({
  textoBoton = "Ver demo",
  href = "#",
  color = "#800080",
}) {
  return (
    <a
      href={href}
      className="relative inline-block px-6 py-3 font-semibold rounded-xl overflow-hidden"
      style={{
        backgroundColor: color,
        color: "white",
      }}
    >
      <span className="relative z-10">{textoBoton}</span>
      <span
        className="absolute top-0 left-[-75%] w-1/3 h-full transform rotate-12 bg-white opacity-20"
        style={{
          animation: "shine 2s infinite",
        }}
      ></span>

      <style>{`
        @keyframes shine {
          0% { left: -75%; }
          50% { left: 125%; }
          100% { left: 125%; }
        }
      `}</style>
    </a>
  );
}
