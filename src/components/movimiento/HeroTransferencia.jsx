import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroTransferencia() {
  const [mostrarLinea, setMostrarLinea] = useState(false);
  const [mostrarEstrategico, setMostrarEstrategico] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMostrarLinea(true), 800);
    const t2 = setTimeout(() => setMostrarEstrategico(true), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const textoEstrategico = "y estratégico";

  return (
    <div className="text-center text-5xl font-light text-gray-900 leading-snug">
      {/* Palabra "tecnológico" */}
      <motion.span
        className="block text-[#2836EF] font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        tecnológico
      </motion.span>

      {/* Línea de transferencia */}
      <div className="relative h-12 my-4">
        {mostrarLinea && (
      <motion.div
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 h-1 w-64 bg-gradient-to-r from-[#2836EF] to-black rounded-full"
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{ duration: 1.5 }}
  style={{ transformOrigin: "left" }}
/>

        )}
      </div>

      {/* Palabra "y estratégico" letra por letra */}
      {mostrarEstrategico && (
        <div className="block text-[#2836EF] font-semibold">
          {textoEstrategico.split("").map((letra, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {letra}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
}
