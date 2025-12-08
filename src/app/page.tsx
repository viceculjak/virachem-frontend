'use client';

import dynamic from 'next/dynamic';

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
  return (
    <div className="bg-background">
      {/* 3D Molecule (search bar integrated inside for both mobile and desktop) - full viewport height */}
      <div className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-120px)]">
        <Molecule3D />
      </div>
    </div>
  );
}
