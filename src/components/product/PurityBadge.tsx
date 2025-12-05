'use client';

import { motion } from 'framer-motion';

interface PurityBadgeProps {
  purity: string;
}

export function PurityBadge({ purity }: PurityBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="text-xs bg-gradient-to-r from-accent-teal to-accent-teal/80 text-white px-2 py-1 rounded font-medium shadow-sm"
    >
      {purity}
    </motion.span>
  );
}
