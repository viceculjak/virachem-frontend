'use client';

import { motion } from 'framer-motion';

const bondLines = [
  { x1: '50%', y1: '35%', x2: '23%', y2: '18%', delay: 0, color: '#C9364F' },
  { x1: '50%', y1: '35%', x2: '77%', y2: '18%', delay: 0.1, color: '#E8B341' },
  { x1: '50%', y1: '35%', x2: '23%', y2: '75%', delay: 0.2, color: '#5A8A8F' },
  { x1: '50%', y1: '35%', x2: '77%', y2: '75%', delay: 0.3, color: '#0B1F3F' },
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
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.15"
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
            strokeWidth="5"
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
              values="5;6;5"
              dur="2s"
              repeatCount="indefinite"
            />
          </motion.line>
        </g>
      ))}
      
      {/* Central hub circle with enhanced glow */}
      <g>
        {/* Outer glow ring */}
        <motion.circle
          cx="50%"
          cy="35%"
          r="15"
          fill="none"
          stroke="#5A8A8F"
          strokeWidth="2"
          opacity="0.2"
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{
            delay: 0.3,
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Main hub circle */}
        <motion.circle
          cx="50%"
          cy="35%"
          r="10"
          fill="#5A8A8F"
          stroke="#0B1F3F"
          strokeWidth="4"
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            type: 'spring' as const,
          }}
        />
      </g>
    </svg>
  );
}
