import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ScrollLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transformar la altura del scroll
  const rawHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Agregar spring para animar más rápido
  const height = useSpring(rawHeight, {
    stiffness: 400,  // más alto = más rápido
    damping: 20,     // más bajo = menos rebote
  });

  return (
    <div ref={ref} className="absolute top-0 left-13 w-0.5 h-135 bg-gray-200" style={{ zIndex: 0 }}>
      <motion.div
        style={{ height }}
        className="w-full bg-[#2836EF] origin-top"
      />
    </div>
  );
}
