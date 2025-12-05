'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'BioLab', logo: '/partners/biolab.jpg' },
  { name: 'BIOWELL Labs', logo: '/partners/BIOWELLlabs.svg' },
  { name: 'MOC Research Labs', logo: '/partners/mocresearchlabs.png' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

export default function PartnerGrid() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-8 md:gap-12"
      >
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex items-center justify-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className={`h-10 w-auto object-contain partner-logo ${
                partner.name === 'MOC Research Labs' ? 'rounded-lg' : ''
              }`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
