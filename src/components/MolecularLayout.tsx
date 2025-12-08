'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Custom Peptide Synthesis',
    description: 'GMP-aligned production',
    link: '/quote',
    linkText: 'Request Quote',
    color: '#C9364F', // Red
    position: 'top-left',
  },
  {
    id: 2,
    title: 'Research Catalog',
    description: '35+ compounds ready',
    link: '/products',
    linkText: 'View Catalog',
    color: '#E8B341', // Gold
    position: 'top-right',
  },
  {
    id: 3,
    title: 'Quality Documentation',
    description: 'Full COA & HPLC-MS',
    link: '/about',
    linkText: 'Learn More',
    color: '#5A8A8F', // Teal
    position: 'bottom-left',
  },
  {
    id: 4,
    title: 'Technical Support',
    description: '24-48h response time',
    link: '/quote',
    linkText: 'Contact Us',
    color: '#0B1F3F', // Navy
    position: 'bottom-right',
  },
];

const getNodePosition = (position: string) => {
  const positions = {
    'top-left': 'lg:absolute lg:top-[10%] lg:left-[15%]',
    'top-right': 'lg:absolute lg:top-[10%] lg:right-[15%]',
    'bottom-left': 'lg:absolute lg:bottom-[10%] lg:left-[15%]',
    'bottom-right': 'lg:absolute lg:bottom-[10%] lg:right-[15%]',
  };
  return positions[position as keyof typeof positions] || '';
};

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

  return (
    <div className="relative min-h-[900px] lg:min-h-[1000px] py-12 lg:py-20">
      {/* Central Hub - Hero Section */}
      <motion.div
        variants={heroVariant}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto text-center px-4 mb-16 lg:mb-0"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-4 tracking-tighter leading-tight">
          Contract Manufacturing Intermediation | GMP-Aligned Peptide Synthesis | EU-Registered
        </h1>
        <p className="text-lg text-[#798996] mb-8">
          EU-Registered intermediary for high-purity research peptides and fine chemicals.
        </p>
        <div className="max-w-2xl mx-auto">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </motion.div>

      {/* Service Nodes - Desktop: Radial, Mobile: Vertical Stack */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 lg:relative lg:h-[600px] flex flex-col lg:block gap-6 lg:gap-0 mt-12 lg:mt-0"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={nodeVariant}
            className={`
              ${getNodePosition(service.position)}
              w-full lg:w-[220px] lg:h-[220px]
              mx-auto lg:mx-0
            `}
          >
            <Link href={service.link} className="block h-full">
              <div
                className="
                  relative
                  w-full h-full
                  rounded-full
                  bg-white
                  shadow-xl hover:shadow-2xl
                  transition-all duration-300
                  hover:scale-110
                  flex flex-col items-center justify-center
                  p-6 lg:p-8
                  cursor-pointer
                  group
                  overflow-hidden
                "
                style={{ 
                  borderWidth: '4px',
                  borderColor: service.color,
                }}
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: service.color }}
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
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
