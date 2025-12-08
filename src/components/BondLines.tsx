'use client';

import { motion } from 'framer-motion';

// Bond lines from center to each node - matching logo structure (5 nodes)
const bondLines = [
  // Top-left (large red) - Custom Peptide Synthesis
  { x1: 50, y1: 50, x2: 25, y2: 20, delay: 0 },
  // Top-right (medium teal) - Quality Documentation
  { x1: 50, y1: 50, x2: 75, y2: 25, delay: 0.1 },
  // Left (small gold) - Technical Support
  { x1: 50, y1: 50, x2: 15, y2: 45, delay: 0.2 },
  // Bottom (medium red) - Research Catalog
  { x1: 50, y1: 50, x2: 45, y2: 75, delay: 0.3 },
  // Bottom-right (medium gold) - Regulatory Compliance
  { x1: 50, y1: 50, x2: 75, y2: 70, delay: 0.4 },
];

const lineVariant = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 1.2,
        type: 'tween' as const,
      },
      opacity: {
        duration: 0.5,
      },
    },
  },
};

export default function BondLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
      style={{ zIndex: 10 }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {bondLines.map((line, index) => (
        <motion.line
          key={index}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#0B1F3F"
          strokeWidth="1.2"
          strokeLinecap="round"
          variants={lineVariant}
          initial="hidden"
          animate="visible"
          transition={{
            delay: line.delay + 0.5,
          }}
        >
          {/* Pulsing animation */}
          <animate
            attributeName="stroke-width"
            values="1.2;1.4;1.2"
            dur="2s"
            repeatCount="indefinite"
          />
        </motion.line>
      ))}
    </svg>
  );
}
