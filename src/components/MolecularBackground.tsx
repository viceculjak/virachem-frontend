'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MolecularBackground() {
  return (
    <>
      {/* Large centered molecule watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <Image
          src="/molecule.png"
          alt=""
          width={1000}
          height={1000}
          className="w-[800px] lg:w-[1200px] h-auto"
          priority
        />
      </motion.div>

      {/* Additional decorative molecules */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-[10%] right-[5%] pointer-events-none hidden lg:block"
        style={{ zIndex: 0 }}
      >
        <Image
          src="/molecule.png"
          alt=""
          width={400}
          height={400}
          className="w-[300px] h-auto rotate-45"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-[10%] left-[5%] pointer-events-none hidden lg:block"
        style={{ zIndex: 0 }}
      >
        <Image
          src="/molecule.png"
          alt=""
          width={400}
          height={400}
          className="w-[300px] h-auto -rotate-45"
        />
      </motion.div>
    </>
  );
}
