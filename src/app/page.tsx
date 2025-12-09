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
    <div className="h-full bg-background flex flex-col">
      {/* Search bar at top - separate from molecule */}
      <div className="w-full px-4 pt-4 pb-2 flex justify-center">
        <div className="w-full max-w-xl">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>
      
      {/* 3D Molecule */}
      <div className="relative flex-1">
        <Molecule3D />
      </div>
    </div>
  );
}
