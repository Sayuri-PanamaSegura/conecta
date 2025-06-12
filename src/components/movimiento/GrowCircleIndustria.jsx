// src/components/GrowCircleIndustria.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GrowCircleIndustria = ({ imagen, titulo, alt }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.6, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center bg-[#f5f5f5] rounded-xl p-4  transition-transform duration-300 hover:scale-105"
    >
      <img src={imagen} alt={alt || titulo} className="h-10 w-10 object-contain mr-4" />
      <p className="text-base font-medium text-black">{titulo}</p>
    </motion.div>
  );
};

export default GrowCircleIndustria;

