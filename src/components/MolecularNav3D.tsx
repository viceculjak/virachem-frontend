'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const atoms = [
  { id: 1, color: '#C9364F', size: 60, x: 0, y: -80, z: 0, section: 'services' },
  { id: 2, color: '#E8B341', size: 50, x: 70, y: 40, z: -40, section: 'services' },
  { id: 3, color: '#5A8A8F', size: 50, x: -70, y: 40, z: -40, section: 'services' },
  { id: 4, color: '#0B1F3F', size: 45, x: 0, y: 50, z: 60, section: 'services' },
  { id: 5, color: '#5A8A8F', size: 70, x: 0, y: 0, z: 0, section: 'hero' }, // Central atom
];

export default function MolecularNav3D() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredAtom, setHoveredAtom] = useState<number | null>(null);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="fixed top-20 right-4 lg:right-8 z-50 hidden md:block">
      <motion.div
        className="relative w-32 h-32 lg:w-40 lg:h-40"
        style={{ perspective: '1000px' }}
        onHoverStart={() => setIsPaused(true)}
        onHoverEnd={() => setIsPaused(false)}
      >
        {/* Rotating container */}
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={isPaused ? {} : { 
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Atoms */}
          {atoms.map((atom) => (
            <motion.div
              key={atom.id}
              className="absolute cursor-pointer group"
              style={{
                width: atom.size,
                height: atom.size,
                left: `calc(50% - ${atom.size / 2}px)`,
                top: `calc(50% - ${atom.size / 2}px)`,
                transform: `translate3d(${atom.x}px, ${atom.y}px, ${atom.z}px)`,
                transformStyle: 'preserve-3d',
              }}
              onClick={() => scrollToSection(atom.section)}
              onHoverStart={() => setHoveredAtom(atom.id)}
              onHoverEnd={() => setHoveredAtom(null)}
              whileHover={{ scale: 1.2 }}
            >
              {/* Atom sphere */}
              <div
                className="w-full h-full rounded-full relative transition-all duration-300"
                style={{
                  backgroundColor: atom.color,
                  boxShadow: hoveredAtom === atom.id
                    ? `0 0 30px ${atom.color}, 0 0 60px ${atom.color}80, 0 0 90px ${atom.color}60`
                    : `0 0 15px ${atom.color}80, 0 4px 15px rgba(0,0,0,0.3)`,
                }}
              >
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: atom.color }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              {/* Bond lines to center (for non-central atoms) */}
              {atom.id !== 5 && (
                <div
                  className="absolute top-1/2 left-1/2 origin-left"
                  style={{
                    width: Math.sqrt(atom.x ** 2 + atom.y ** 2 + atom.z ** 2),
                    height: 2,
                    background: `linear-gradient(90deg, ${atom.color}80, transparent)`,
                    transform: `translate(-50%, -50%) rotate(${Math.atan2(atom.y, atom.x) * (180 / Math.PI)}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Tooltip */}
        {isPaused && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#0B1F3F] text-white text-xs px-3 py-1.5 rounded whitespace-nowrap"
          >
            Click atoms to navigate
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
