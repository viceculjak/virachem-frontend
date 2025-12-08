'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'Custom Peptide Synthesis',
    description: 'GMP-aligned production with flexible vialing options. From milligrams to multi-gram batches with full analytical documentation.',
    link: '/quote',
    linkText: 'Request Quote',
    color: '#0B1F3F', // Navy
  },
  {
    title: 'Research Catalog',
    description: '35+ high-purity compounds ready to ship with full COA. HPLC-MS verified, ≥95-99% purity for your research needs.',
    link: '/products',
    linkText: 'View Catalog',
    color: '#C9364F', // Red
  },
  {
    title: 'Quality Documentation',
    description: 'Full analytical documentation (COA, HPLC-MS) for compliance. Complete traceability and regulatory support included.',
    link: '/about',
    linkText: 'Learn More',
    color: '#5A8A8F', // Teal
  },
  {
    title: 'Technical Support',
    description: '24-48h quote response with technical consultation. Expert guidance on formulation and regulatory requirements.',
    link: '/quote',
    linkText: 'Contact Us',
    color: '#E8B341', // Gold
  },
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function ServicesGrid() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={item}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors flex flex-col relative overflow-hidden"
          >
            {/* Colored top border accent */}
            <div 
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: service.color }}
            />
            <h3 
              className="font-semibold mb-3 text-lg pt-2"
              style={{ color: service.color }}
            >
              {service.title}
            </h3>
            <p className="text-[#798996] text-sm leading-relaxed mb-4 flex-grow">
              {service.description}
            </p>
            <Link
              href={service.link}
              className="inline-flex items-center justify-center text-sm font-medium transition-colors mt-auto"
              style={{ color: service.color }}
            >
              {service.linkText} →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
