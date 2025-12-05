'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'Max Planck Society', logo: '/partners/max-planck.svg' },
  { name: 'Karolinska Institutet', logo: '/partners/karolinska.svg' },
  { name: 'CNRS', logo: '/partners/cnrs.svg' },
  { name: 'ETH Zurich', logo: '/partners/eth.svg' },
  { name: 'EMBL', logo: '/partners/embl.svg' },
  { name: 'Cracow University of Technology', logo: '/partners/cracow.svg' },
  { name: 'University of Copenhagen', logo: '/partners/copenhagen.svg' },
  { name: 'Helmholtz Association', logo: '/partners/helmholtz.svg' },
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
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
              className="h-10 w-auto object-contain partner-logo"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
