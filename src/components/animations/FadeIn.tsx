'use client';

import { motion, useInView, UseInViewOptions } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  viewOptions?: UseInViewOptions;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  viewOptions = { once: true },
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
            }
          : {
              opacity: 0,
            }
      }
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
