import { motion } from "framer-motion";

const Card = ({ children, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center text-center min-h-[160px]"
      initial={{ y: 0, scale: 0.8, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 700, // más rígido = rebote fuerte
        damping: 20,    // menos fricción = más rebote
        delay,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
