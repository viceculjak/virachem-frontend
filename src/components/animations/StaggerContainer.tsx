'use client';

import { motion, useInView, UseInViewOptions } from 'framer-motion';
import { useRef, ReactNode, Children } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  viewOptions?: UseInViewOptions;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  className = '',
  viewOptions = { once: true, margin: '-50px' },
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  const childrenArray = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            duration: 0.5,
            delay: initialDelay + index * staggerDelay,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
