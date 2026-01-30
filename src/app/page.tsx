'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
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
    <div className="h-full flex flex-col">
      {/* Search bar at top - separate from molecule */}
      <div className="w-full px-4 pt-4 pb-5 flex justify-center">
        <div className="w-full max-w-xl">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>
      
      {/* Three-column layout: Lab Image | 3D Molecule | Vials Image — height reduced by extra search margin so no desktop scroll */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 mb-4 lg:overflow-hidden lg:h-[calc(100vh-152px)]">
        
        {/* LEFT: Lab Image + All models */}
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
            <Link href="/services" className="block mb-3 group">
              <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:underline">Access &amp; Manufacturing Models</h3>
            </Link>
            <p className="text-base mb-3 leading-relaxed">
              EU-registered platform connecting qualified research partners with GMP-aligned peptide manufacturing.
            </p>
            <div className="space-y-1.5 text-sm">
              <p><Link href="/services/model-0" className="text-[#E8B341] font-semibold hover:underline">Model 0:</Link> Research API Access</p>
              <p><Link href="/services/model-1" className="text-[#E8B341] font-semibold hover:underline">Model 1:</Link> Finished RUO Formats</p>
              <p><Link href="/services/model-2" className="text-[#5a8a8f] font-semibold hover:underline">Model 2:</Link> Custom Manufacturing</p>
              <p><Link href="/services/model-3" className="text-[#5a8a8f] font-semibold hover:underline">Model 3:</Link> Fill &amp; Finish Service</p>
              <p><Link href="/services/model-4" className="text-[#C9364F] font-semibold hover:underline">Model 4:</Link> Cosmetic White-Label Formats</p>
            </div>
          </div>
        </div>

        {/* CENTER: 3D Molecule (existing component) */}
        <div className="relative h-[450px] lg:h-auto bg-gradient-to-br from-[#0B1F3F] via-[#1a4d5c] to-[#0a1929] rounded-2xl shadow-lg overflow-hidden">
          <Molecule3D />
        </div>

        {/* RIGHT: Vials Video + Partner programs */}
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
            <Link href="/partners/apply" className="block mb-3 group">
              <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:underline">Partner Programs</h3>
            </Link>
            <p className="text-sm mb-3 leading-relaxed">
              We work with qualified partners under a tiered framework: clear roles, regional reach, and shared compliance. Partners add value for their clients without taking on risk they are not authorized for; end clients get local support and one quality standard; we scale reach while keeping control of specs and compliance.
            </p>
            <div className="space-y-1.5 text-sm leading-relaxed">
              <p><Link href="/partners/apply" className="text-[#E8B341] font-semibold hover:underline">Tier 1 Referral</Link> — Introduce qualified leads; step back. No inventory, no execution risk.</p>
              <p><Link href="/partners/apply" className="text-[#E8B341] font-semibold hover:underline">Tier 2 Authorized Access</Link> — Regional front-end: manage relationships, coordinate projects, add service value. No stock.</p>
              <p><Link href="/partners/apply" className="text-[#C9364F] font-semibold hover:underline">Tier 3 Authorized Distributor</Link> — For proven partners only; limited stock-holding where demand justifies it. Fixed formats and RUO labeling.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
