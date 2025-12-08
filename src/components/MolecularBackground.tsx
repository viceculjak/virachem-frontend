'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function MolecularBackground() {
  const { scrollY } = useScroll();
  
  // Different parallax speeds for depth effect
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -250]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -100]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -45]);

  return (
    <>
      {/* Large centered molecule watermark with parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ 
          y: y1,
          rotate: rotate1,
          zIndex: 0,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
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

      {/* Top-right molecule with faster parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ 
          y: y2,
          rotate: rotate2,
          zIndex: 0,
        }}
        className="absolute top-[10%] right-[5%] pointer-events-none hidden lg:block"
      >
        <Image
          src="/molecule.png"
          alt=""
          width={400}
          height={400}
          className="w-[300px] h-auto"
        />
      </motion.div>

      {/* Bottom-left molecule with slowest parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ 
          y: y3,
          rotate: rotate1,
          zIndex: 0,
        }}
        className="absolute bottom-[10%] left-[5%] pointer-events-none hidden lg:block"
      >
        <Image
          src="/molecule.png"
          alt=""
          width={400}
          height={400}
          className="w-[300px] h-auto"
        />
      </motion.div>
    </>
  );
}
