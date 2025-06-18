export default function HeroAnimatedGradient({ texto = "", color = "#800080" }) {
  return (
    <div className="text-center text-5xl font-light leading-snug max-w-4xl px-4 mx-auto">
      <span
        className="inline-block animated-gradient-text"
        style={{
          backgroundImage: `linear-gradient(270deg, ${color}, #000)`,
          backgroundSize: "200% 100%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          animation: "shimmer 4s linear infinite alternate",
        }}
      >
        {texto}
      </span>
    </div>
  );
}
