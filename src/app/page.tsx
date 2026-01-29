'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';

// Dynamic import to avoid SSR issues with Three.js
const Molecule3D = dynamic(() => import('@/components/Molecule3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-full flex items-center justify-center bg-gradient-to-br from-[#0B1F3F] via-[#1a4d5c] to-[#0a1929]">
      <p className="text-gray-500">Loading 3D molecule...</p>
    </div>
  ),
});

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Search bar at top - separate from molecule */}
      <div className="w-full px-4 pt-4 pb-2 flex justify-center">
        <div className="w-full max-w-xl">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>
      
      {/* Three-column layout: Lab Image | 3D Molecule | Vials Image */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 mb-4 lg:overflow-hidden lg:h-[calc(100vh-140px)]">
        
        {/* LEFT: Lab Image + Text Overlay */}
        <div className="relative h-[350px] lg:h-auto overflow-hidden rounded-2xl shadow-lg">
          <Image 
            src="/hf_20260121_212606_f12576ea-33c1-4ec6-9a39-3d22a3acc736.png"
            alt="GMP-aligned laboratory facility"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3F]/95 to-[#0B1F3F]/85 z-10" />
          <div className="relative z-20 p-6 lg:p-8 flex flex-col justify-center h-full text-white">
            <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Contract Manufacturing Intermediation</h3>
            <p className="text-base mb-4 leading-relaxed">
              EU-registered access platform connecting qualified research partners with GMP-aligned peptide manufacturing
            </p>
            <div className="space-y-2 text-sm">
              <p><span className="text-[#E8B341] font-semibold">Model 0:</span> Research API Access</p>
              <p><span className="text-[#E8B341] font-semibold">Model 1:</span> Finished RUO Formats</p>
            </div>
          </div>
        </div>

        {/* CENTER: 3D Molecule (existing component) */}
        <div className="relative h-[450px] lg:h-auto bg-gradient-to-br from-[#0B1F3F] via-[#1a4d5c] to-[#0a1929] rounded-2xl shadow-lg overflow-hidden">
          <Molecule3D />
        </div>

        {/* RIGHT: Vials Video + Text Overlay */}
        <div className="relative h-[350px] lg:h-auto overflow-hidden rounded-2xl shadow-lg">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/signal-2026-01-17-162407.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3F]/95 to-[#0B1F3F]/85 z-10" />
          <div className="relative z-20 p-6 lg:p-8 flex flex-col justify-center h-full text-white">
            <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Structured Access Pathways</h3>
            <p className="text-base mb-4 leading-relaxed">
              Institutional partners, CDMOs, and research organizations benefit from coordinated EU-based manufacturing
            </p>
            <div className="space-y-2 text-sm">
              <p><span className="text-[#5a8a8f] font-semibold">Model 2:</span> Custom Manufacturing</p>
              <p><span className="text-[#5a8a8f] font-semibold">Model 3:</span> Fill & Finish Service</p>
              <p><span className="text-[#C9364F] font-semibold">Model 4:</span> Cosmetic White-Label Formats</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
