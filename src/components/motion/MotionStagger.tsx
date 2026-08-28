'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASINGS, DURATIONS } from '@/src/lib/motion';

interface MotionStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export function MotionStaggerContainer({
  children,
  staggerDelay = 0.08,
  initialDelay = 0,
  className = '',
  viewportMargin = '-50px',
  once = true,
}: MotionStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MotionStaggerItemProps {
  children: React.ReactNode;
  distance?: number;
  className?: string;
}

export function MotionStaggerItem({
  children,
  distance = 20,
  className = '',
}: MotionStaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: DURATIONS.normal,
            ease: EASINGS.easeOutCubic,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
