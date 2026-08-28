export const EASINGS = {
  easeOutCubic: [0.215, 0.61, 0.355, 1] as const,
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  easeInOutCubic: [0.645, 0.045, 0.355, 1] as const,
  springTactile: { type: 'spring', stiffness: 380, damping: 26 } as const,
  springSmooth: { type: 'spring', stiffness: 180, damping: 22 } as const,
};

export const DURATIONS = {
  micro: 0.18,
  fast: 0.28,
  normal: 0.45,
  slow: 0.75,
  cinematic: 1.2,
};

export const fadeInUp = (delay = 0, distance = 24) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.easeOutCubic,
      delay,
    },
  },
});

export const fadeIn = (delay = 0, duration = DURATIONS.normal) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      ease: EASINGS.easeOutCubic,
      delay,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const cardStaggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.easeOutCubic,
    },
  },
};

export const heroTitleVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.slow,
      ease: EASINGS.easeOutExpo,
      delay: 0.15,
    },
  },
};

export const heroSubtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.easeOutCubic,
      delay: 0.35,
    },
  },
};

export const heroCTAVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.easeOutCubic,
      delay: 0.5,
    },
  },
};
