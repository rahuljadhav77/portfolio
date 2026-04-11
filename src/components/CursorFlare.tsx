"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorFlare() {
  const [visible, setVisible] = useState(false);

  const smoothConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const x = useSpring(0, smoothConfig);
  const y = useSpring(0, smoothConfig);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, visible]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid rgba(0, 243, 255, 0.5)",
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#bc13fe",
          boxShadow: "0 0 15px #bc13fe",
        }}
      />
    </>
  );
}
