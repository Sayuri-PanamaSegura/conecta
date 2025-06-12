// ScrollLine.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="absolute top-0 left-13 w-0.5 h-135 bg-gray-200 "style={{ zIndex: 0 }}>
      
      <motion.div
        style={{ height }}
        className="w-full bg-[#2836EF] origin-top"
      />
    </div>
  );
}
