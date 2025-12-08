'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 30,
    delay: Math.random() * 5,
    parallaxSpeed: Math.random() * 0.5 + 0.3,
  }));
};

export default function ParticleField() {
  const particles = useMemo(() => generateParticles(25), []);
  const { scrollYProgress } = useScroll();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {particles.map((particle) => {
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [0, -particle.parallaxSpeed * 300]
        );

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#0B1F3F]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: 0.08,
              y,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: particle.delay,
            }}
          />
        );
      })}

      {/* Additional molecular shapes */}
      {particles.slice(0, 5).map((particle) => (
        <motion.div
          key={`mol-${particle.id}`}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y + 20}%`,
            opacity: 0.04,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: particle.duration * 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <circle cx="15" cy="15" r="3" fill="#0B1F3F" />
            <circle cx="8" cy="10" r="2" fill="#C9364F" />
            <circle cx="22" cy="10" r="2" fill="#E8B341" />
            <circle cx="15" cy="22" r="2" fill="#5A8A8F" />
            <line x1="15" y1="15" x2="8" y2="10" stroke="#0B1F3F" strokeWidth="0.5" />
            <line x1="15" y1="15" x2="22" y2="10" stroke="#0B1F3F" strokeWidth="0.5" />
            <line x1="15" y1="15" x2="15" y2="22" stroke="#0B1F3F" strokeWidth="0.5" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
