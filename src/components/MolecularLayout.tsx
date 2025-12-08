'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { useState, useRef } from 'react';

const services = [
  {
    id: 1,
    title: 'Custom Peptide Synthesis',
    description: 'GMP-aligned production',
    link: '/quote',
    linkText: 'Request Quote',
    color: '#C9364F', // Red
    position: { left: '20%', top: '25%' },
  },
  {
    id: 2,
    title: 'Research Catalog',
    description: '35+ compounds ready',
    link: '/products',
    linkText: 'View Catalog',
    color: '#E8B341', // Gold
    position: { left: '80%', top: '25%' },
  },
  {
    id: 3,
    title: 'Quality Documentation',
    description: 'Full COA & HPLC-MS',
    link: '/about',
    linkText: 'Learn More',
    color: '#5A8A8F', // Teal
    position: { left: '20%', top: '75%' },
  },
  {
    id: 4,
    title: 'Technical Support',
    description: '24-48h response time',
    link: '/quote',
    linkText: 'Contact Us',
    color: '#0B1F3F', // Navy
    position: { left: '80%', top: '75%' },
  },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const nodeVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 10,
    }
  },
};

const heroVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
    }
  },
};

export default function MolecularLayout() {
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} id="services" className="relative min-h-[900px] lg:min-h-[1100px] py-12 lg:py-20">
      {/* Hero Title and Subtitle at Top */}
      <motion.div
        variants={heroVariant}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center px-4 mb-12 lg:mb-20"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-4 tracking-tighter leading-tight">
            Contract Manufacturing Intermediation | GMP-Aligned Peptide Synthesis | EU-Registered
          </h1>
          <p className="text-lg text-[#798996]">
            EU-Registered intermediary for high-purity research peptides and fine chemicals.
          </p>
        </motion.div>
      </motion.div>

      {/* Service Nodes with Orbital Rotation + Central Search Bar */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 lg:relative lg:h-[700px] flex flex-col lg:block gap-6 lg:gap-0"
      >
        {/* Central Search Node - In the middle of nodes (desktop only) */}
        <motion.div
          className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' as const }}
        >
          <motion.div
            className="relative w-[280px] h-[280px] rounded-full bg-white flex items-center justify-center p-8"
            style={{ 
              borderWidth: '6px',
              borderColor: '#5A8A8F',
              boxShadow: '0 15px 60px rgba(0,0,0,0.2), 0 0 40px rgba(90, 138, 143, 0.5)',
            }}
            animate={{
              boxShadow: [
                '0 15px 60px rgba(0,0,0,0.2), 0 0 40px rgba(90, 138, 143, 0.5)',
                '0 15px 60px rgba(0,0,0,0.2), 0 0 60px rgba(90, 138, 143, 0.7)',
                '0 15px 60px rgba(0,0,0,0.2), 0 0 40px rgba(90, 138, 143, 0.5)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Pulsing glow */}
            <motion.div 
              className="absolute inset-0 rounded-full"
              style={{ 
                backgroundColor: '#5A8A8F',
                opacity: 0.1,
              }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Search bar inside node */}
            <div className="relative z-10 w-full">
              <SearchBar value={search} onChange={setSearch} />
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Search Bar - At top */}
        <div className="lg:hidden mb-8">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={nodeVariant}
            className="w-full lg:w-[240px] lg:h-[240px] mx-auto lg:mx-0 lg:absolute"
            style={{
              left: service.position.left,
              top: service.position.top,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Link href={service.link} className="block h-full">
              <motion.div
                className="relative w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-6 lg:p-8 cursor-pointer group overflow-hidden"
                style={{ 
                  borderWidth: '5px',
                  borderColor: service.color,
                  boxShadow: `0 10px 50px rgba(0,0,0,0.15), 0 0 30px ${service.color}40`,
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: `0 20px 80px rgba(0,0,0,0.25), 0 0 60px ${service.color}80, 0 0 90px ${service.color}60`,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Pulsing glow */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    backgroundColor: service.color,
                    opacity: 0.1,
                  }}
                  animate={{
                    opacity: [0.1, 0.25, 0.1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 
                    className="font-bold text-base lg:text-lg mb-2 leading-tight"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-[#798996] mb-3 lg:mb-4">
                    {service.description}
                  </p>
                  <span 
                    className="inline-flex items-center text-xs lg:text-sm font-semibold transition-all"
                    style={{ color: service.color }}
                  >
                    {service.linkText} →
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
