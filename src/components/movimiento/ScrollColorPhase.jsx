import { useEffect, useRef, useState } from "react";

export default function ScrollColorPhrase() {
  const containerRef = useRef(null);
  const desktopLineRef = useRef(null);
  const mobileLine1Ref = useRef(null);
  const mobileLine2Ref = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    

    handleResize(); // inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrolled(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrolled) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = Math.max(0, windowHeight - rect.top);
      const percentVisible = Math.min(1, visible / windowHeight);


const offsetStart = 0.2; // 20% de visibilidad antes de empezar
const percentAdjusted = Math.max(0, percentVisible - offsetStart) / (1 - offsetStart);
const basePosition = 100 - Math.min(1, percentAdjusted) * 100;

     if (isMobile) {
  if (mobileLine1Ref.current)
    mobileLine1Ref.current.style.backgroundPosition = `${basePosition}% 0`;

  if (mobileLine2Ref.current) {
    const delay = 0.15;
    const delayed = 100 - Math.max(0, (percentAdjusted - delay)) * 100;
    mobileLine2Ref.current.style.backgroundPosition = `${delayed}% 0`;
  }
} else {
  if (desktopLineRef.current)
    desktopLineRef.current.style.backgroundPosition = `${basePosition}% 0`;
}

    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, isMobile]);

  
    return (
  <div ref={containerRef} className="scroll-color-wrapper">
    {isMobile ? (
      // Mobile: dos líneas
      <div className="mobile-lines">
        <span
          ref={mobileLine1Ref}
          className={`scroll-color-phrase ${scrolled ? "scrolled" : ""}`}
        >
          conecta, protege
        </span>
        <span
          ref={mobileLine2Ref}
          className={`scroll-color-phrase ${scrolled ? "scrolled" : ""}`}
        >
          y cumple
        </span>
      </div>
    ) : (
      // Desktop: una línea
      <span
        ref={desktopLineRef}
        className={`scroll-color-phrase desktop-line ${scrolled ? "scrolled" : ""}`}
      >
        conecta, protege y cumple
      </span>
    )}
  </div>
);

  
}
