'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import SearchBar from '@/components/SearchBar';

// Dynamic import to avoid SSR issues with Three.js
const Molecule3D = dynamic(() => import('@/components/Molecule3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[700px] flex items-center justify-center bg-background">
      <p className="text-gray-500">Loading 3D molecule...</p>
    </div>
  ),
});

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <div className="bg-background">
      {/* Hero Title and Subtitle */}
      <div className="text-center pt-12 pb-6 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-4 tracking-tighter leading-tight">
          Contract Manufacturing Intermediation | GMP-Aligned Peptide Synthesis | EU-Registered
        </h1>
        <p className="text-lg text-[#798996]">
          EU-Registered intermediary for high-purity research peptides and fine chemicals.
        </p>
      </div>

      {/* Mobile Search Bar (outside 3D) */}
      <div className="md:hidden px-4 mb-6">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {/* 3D Molecule (search bar integrated inside on desktop) */}
      <div className="relative h-[500px] md:h-[700px]">
        <Molecule3D />
      </div>

      {/* Value Props Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-gray-300 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-semibold text-[#0B1F3F] mb-3 text-lg">EU-Registered</h3>
              <p className="text-[#798996] text-sm leading-relaxed">
                MBS: 060500406<br />
                Full legal compliance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-gray-300 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-semibold text-[#0B1F3F] mb-3 text-lg">Polish Manufacturing</h3>
              <p className="text-[#798996] text-sm leading-relaxed">
                GMP-aligned facility<br />
                Lyophilized under N₂
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-gray-300 shadow-md hover:shadow-lg transition-all">
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
