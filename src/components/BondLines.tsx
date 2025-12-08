'use client';

import { motion } from 'framer-motion';

// Bond lines from center to each node - matching logo structure
const bondLines = [
  // Top-left node (red)
  { x1: 50, y1: 50, x2: 20, y2: 35, delay: 0, color: '#C9364F' },
  // Top-right node (gold)
  { x1: 50, y1: 50, x2: 80, y2: 35, delay: 0.1, color: '#E8B341' },
  // Bottom-left node (teal)
  { x1: 50, y1: 50, x2: 20, y2: 65, delay: 0.2, color: '#5A8A8F' },
  // Bottom-right node (navy)
  { x1: 50, y1: 50, x2: 80, y2: 65, delay: 0.3, color: '#0B1F3F' },
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
      <defs>
        {/* Gradient definitions for each line */}
        {bondLines.map((line, index) => (
          <linearGradient key={`grad-${index}`} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={line.color} stopOpacity="0.6" />
            <stop offset="50%" stopColor="#0B1F3F" stopOpacity="0.4" />
            <stop offset="100%" stopColor={line.color} stopOpacity="0.6" />
          </linearGradient>
        ))}
        
        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {bondLines.map((line, index) => (
        <g key={index}>
          {/* Outer glow line */}
          <motion.line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.color}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.3"
            filter="url(#glow)"
            variants={lineVariant}
            initial="hidden"
            animate="visible"
            transition={{
              delay: line.delay + 0.5,
            }}
          />
          {/* Main line with gradient */}
          <motion.line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={`url(#gradient-${index})`}
            strokeWidth="0.8"
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
              values="0.8;1;0.8"
              dur="2s"
              repeatCount="indefinite"
            />
          </motion.line>
        </g>
      ))}
      
    </svg>
  );
}
