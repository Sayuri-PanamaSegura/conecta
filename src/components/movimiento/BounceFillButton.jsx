export default function BounceFillButton({
  textoBoton = "Ir a soluciones",
  href = "#",
  color = "#800080",
}) {
  return (
    <a
      href={href}
      className="relative inline-block px-6 py-3 border border-purple-700 font-semibold text-purple-700 rounded-xl overflow-hidden transition-all duration-300"
    >
      <span className="relative z-10">{textoBoton}</span>
      <span
        className="absolute bottom-0 left-0 w-full h-0 bg-purple-700 z-0 transition-all duration-500 ease-out group-hover:h-full"
        style={{
          transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)", // rebote suave
        }}
      ></span>
      <style>{`
        a:hover span:nth-child(1) {
          color: white;
        }
      `}</style>
    </a>
  );
}
