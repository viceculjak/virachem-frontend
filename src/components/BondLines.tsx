'use client';

import { motion } from 'framer-motion';

const bondLines = [
  // Top-left node
  { x1: '50%', y1: '35%', x2: '23%', y2: '18%', delay: 0 },
  // Top-right node
  { x1: '50%', y1: '35%', x2: '77%', y2: '18%', delay: 0.1 },
  // Bottom-left node
  { x1: '50%', y1: '35%', x2: '23%', y2: '75%', delay: 0.2 },
  // Bottom-right node
  { x1: '50%', y1: '35%', x2: '77%', y2: '75%', delay: 0.3 },
];

const lineVariant = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 0.25,
    transition: {
      pathLength: {
        duration: 0.8,
        type: 'tween' as const,
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
};

export default function BondLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
      style={{ zIndex: 5 }}
    >
      {bondLines.map((line, index) => (
        <motion.line
          key={index}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#0B1F3F"
          strokeWidth="3"
          strokeLinecap="round"
          variants={lineVariant}
          initial="hidden"
          animate="visible"
          transition={{
            delay: line.delay + 0.5,
          }}
        />
      ))}
      
      {/* Central hub circle */}
      <motion.circle
        cx="50%"
        cy="35%"
        r="8"
        fill="#5A8A8F"
        stroke="#0B1F3F"
        strokeWidth="3"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.4,
          type: 'spring',
        }}
      />
    </svg>
  );
}
