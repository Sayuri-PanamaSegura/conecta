import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollColorPhrase() {
  const [isMobile, setIsMobile] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Detectar mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloquear scroll al cargar
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleUserScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        setAnimate(true);
        removeScrollListeners(); // ya no hace falta escuchar más
      }
    };

    // Escuchamos intento de scroll o toque o flechas
    const addScrollListeners = () => {
      window.addEventListener("wheel", handleUserScroll);
      window.addEventListener("touchstart", handleUserScroll);
      window.addEventListener("keydown", handleUserScroll);
    };

    const removeScrollListeners = () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchstart", handleUserScroll);
      window.removeEventListener("keydown", handleUserScroll);
    };

    addScrollListeners();
    return removeScrollListeners;
  }, [hasScrolled]);

  // Cuando termine la animación, liberamos el scroll
  useEffect(() => {
    if (animationDone) {
      document.body.style.overflow = "";
    }
  }, [animationDone]);

  const text = isMobile
    ? ["conecta, protege", " y cumple"]
    : ["conecta, protege y cumple"];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { color: "#800080" },
    visible: { color: "#000000" },
  };

  return (
    <div className="scroll-color-wrapper">
      {text.map((line, i) => (
        <motion.div
          key={i}
          className="motion-line"
          variants={containerVariants}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          onAnimationComplete={() => {
            if (i === text.length - 1) setAnimationDone(true);
          }}
        >
          {line.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
