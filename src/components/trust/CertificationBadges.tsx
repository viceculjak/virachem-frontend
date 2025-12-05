'use client';

import { motion } from 'framer-motion';
import { Shield, FileCheck, Beaker, Globe } from 'lucide-react';

interface Badge {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const badges: Badge[] = [
  {
    icon: Shield,
    title: 'GMP-Aligned',
    description: 'Poland-based facility following GMP guidelines',
    color: 'text-accent-teal',
  },
  {
    icon: Globe,
    title: 'EU Registered',
    description: 'Croatian commercial court registration MBS: 060500406',
    color: 'text-accent-red',
  },
  {
    icon: FileCheck,
    title: 'HPLC-MS Verified',
    description: 'Full analytical documentation with every batch',
    color: 'text-accent-gold',
  },
  {
    icon: Beaker,
    title: 'Research Grade',
    description: 'Purity ≥95-99% with Certificate of Analysis',
    color: 'text-dark',
  },
];

export function CertificationBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="group relative"
          >
            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
              <div className={`${badge.color} mb-2 transition-transform duration-300 group-hover:scale-110`}>
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-semibold text-dark text-center mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-gray-600 text-center">
                {badge.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
