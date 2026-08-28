'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASINGS, DURATIONS } from '@/src/lib/motion';

export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: DURATIONS.fast,
        ease: EASINGS.easeOutCubic,
      }}
    >
      {children}
    </motion.div>
  );
}
