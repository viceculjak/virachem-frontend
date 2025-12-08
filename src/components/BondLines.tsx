'use client';

import { motion } from 'framer-motion';

const bondLines = [
  // Bonds from center to each node
  { x1: '50%', y1: '50%', x2: '23%', y2: '28%', delay: 0, color: '#C9364F', type: 'main' },
  { x1: '50%', y1: '50%', x2: '77%', y2: '28%', delay: 0.1, color: '#E8B341', type: 'main' },
  { x1: '50%', y1: '50%', x2: '23%', y2: '72%', delay: 0.2, color: '#5A8A8F', type: 'main' },
  { x1: '50%', y1: '50%', x2: '77%', y2: '72%', delay: 0.3, color: '#0B1F3F', type: 'main' },
  // Cross bonds between nodes (like in logo)
  { x1: '23%', y1: '28%', x2: '77%', y2: '28%', delay: 0.4, color: '#0B1F3F', type: 'cross' },
  { x1: '23%', y1: '72%', x2: '77%', y2: '72%', delay: 0.5, color: '#0B1F3F', type: 'cross' },
  { x1: '23%', y1: '28%', x2: '23%', y2: '72%', delay: 0.6, color: '#0B1F3F', type: 'cross' },
  { x1: '77%', y1: '28%', x2: '77%', y2: '72%', delay: 0.7, color: '#0B1F3F', type: 'cross' },
];

const lineVariant = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 0.4,
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
      style={{ zIndex: 5 }}
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
            strokeWidth={line.type === 'main' ? '8' : '6'}
            strokeLinecap="round"
            opacity={line.type === 'main' ? '0.15' : '0.08'}
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
            stroke={line.type === 'main' ? `url(#gradient-${index})` : line.color}
            strokeWidth={line.type === 'main' ? '5' : '3'}
            strokeLinecap="round"
            opacity={line.type === 'main' ? '1' : '0.3'}
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
              values={line.type === 'main' ? '5;6;5' : '3;4;3'}
              dur="2s"
              repeatCount="indefinite"
            />
          </motion.line>
        </g>
      ))}
      
    </svg>
  );
}
