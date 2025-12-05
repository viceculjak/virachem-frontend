'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PartnerGrid from '@/components/trust/PartnerGrid';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-4 tracking-tighter leading-tight"
          >
            Contract Manufacturing Intermediation | GMP-Aligned Peptide Synthesis | EU-Registered
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#798996] mb-8"
          >
            EU-Registered intermediary for high-purity research peptides and fine chemicals.
          </motion.p>
          <div className="max-w-2xl mx-auto">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>
      </div>

      {/* Partner Grid Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-semibold text-[#0B1F3F] mb-12">
            Trusted by Partners Across Europe
          </h2>
          <PartnerGrid />
        </div>
      </motion.section>

      {/* Value Props Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-gray-300 transition-colors">
              <h3 className="font-semibold text-[#0B1F3F] mb-3 text-lg">EU-Registered</h3>
              <p className="text-[#798996] text-sm leading-relaxed">
                MBS: 060500406<br />
                Full legal compliance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-gray-300 transition-colors">
              <h3 className="font-semibold text-[#0B1F3F] mb-3 text-lg">Polish Manufacturing</h3>
              <p className="text-[#798996] text-sm leading-relaxed">
                GMP-aligned facility<br />
                Lyophilized under N₂
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-gray-300 transition-colors">
              <h3 className="font-semibold text-[#0B1F3F] mb-3 text-lg">Custom Vialing</h3>
              <p className="text-[#798996] text-sm leading-relaxed">
                Any size: 1–10 mL<br />
                Rubber stopper + crimp
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
