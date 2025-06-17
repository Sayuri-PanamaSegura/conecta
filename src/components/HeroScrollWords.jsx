import { useEffect, useRef, useState } from "react";

export default function HeroScrollWords() {
  const refs = useRef([]);
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updated = [...visible];
        entries.forEach((entry) => {
          const i = parseInt(entry.target.dataset.index);
          // Cambia el estado si el elemento está visible (scroll hacia abajo o arriba)
          updated[i] = entry.isIntersecting;
        });
        setVisible(updated);
      },
      {
        threshold: 0.5,
      }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => refs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  const words = ["conecta", "protege y cumple"];

  return (
    <span className="inline-block space-x-2">
      {words.map((word, i) => (
        <span
          key={i}
          ref={(el) => (refs.current[i] = el)}
          data-index={i}
          className={`inline-block transition-colors duration-4000 ease-in-out ${
            visible[i] ? "text-black" : "text-[#800080]"
          }`}
        >
          {word}
          {i < words.length - 1 ? "," : ""}
          &nbsp;
        </span>
      ))}
    </span>
  );
}
