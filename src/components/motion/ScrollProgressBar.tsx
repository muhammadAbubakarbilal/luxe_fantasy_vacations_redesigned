'use client';

import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

export default function ScrollProgressBar() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5A880] via-[#9B784A] to-[#C5A880] origin-left z-50 pointer-events-none"
      aria-hidden="true"
    />
  );
}
