'use client';

import { motion } from 'framer-motion';
import { Building2, MapPin, FileText, Award } from 'lucide-react';

export function CredentialsBanner() {
  const credentials = [
    {
      icon: Building2,
      label: 'Company ID',
      value: 'MBS: 060500406',
    },
    {
      icon: FileText,
      label: 'Tax ID',
      value: 'OIB: 73782597071',
    },
    {
      icon: Award,
      label: 'Activity Code',
      value: '46.19.0 Certified',
    },
    {
      icon: MapPin,
      label: 'Manufacturing',
      value: 'Poland (GMP-Aligned)',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-dark/5 to-accent-teal/5 border border-dark/10 rounded-lg p-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {credentials.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
              }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-accent-teal mb-2 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-dark">
                {item.value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
