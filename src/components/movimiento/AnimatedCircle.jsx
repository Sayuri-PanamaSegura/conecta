// AnimatedCircle.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedCircle() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="absolute bottom-0 left-[45px] w-4 h-4 bg-[#2836EF] rounded-full"
    />
  );
}
