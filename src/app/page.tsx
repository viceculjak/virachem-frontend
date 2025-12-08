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
      {/* Mobile Search Bar (outside 3D) */}
      <div className="md:hidden px-4 pt-6 mb-6">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {/* 3D Molecule (search bar integrated inside on desktop) - full viewport height */}
      <div className="relative h-[calc(100vh-140px)] md:h-[calc(100vh-120px)]">
        <Molecule3D />
      </div>
    </div>
  );
}
