'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASINGS, DURATIONS } from '@/src/lib/motion';

interface MotionFadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export default function MotionFadeIn({
  children,
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = DURATIONS.normal,
  className = '',
  viewportMargin = '-60px',
  once = true,
}: MotionFadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        ease: EASINGS.easeOutCubic,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
