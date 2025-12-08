'use client';

import MolecularLayout from '@/components/MolecularLayout';
import MolecularBackground from '@/components/MolecularBackground';
import BondLines from '@/components/BondLines';
import ParticleField from '@/components/ParticleField';
import MolecularNav3D from '@/components/MolecularNav3D';

export default function Home() {
  return (
    <div className="bg-background">
      {/* 3D Molecule Navigation */}
      <MolecularNav3D />
      
      {/* Molecular Hub-and-Spoke Section */}
      <section className="relative overflow-hidden bg-white min-h-[1100px]">
        {/* Particle field */}
        <ParticleField />
        
        {/* Main molecular layout with integrated bonds */}
        <div className="relative">
          <BondLines />
          <MolecularLayout />
        </div>
      </section>

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
