'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MoleculeNode from './MoleculeNode';
import MoleculeBond from './MoleculeBond';

// Define molecule structure matching logo
const nodes = [
  {
    id: 0,
    position: [0, 0, 0] as [number, number, number],
    color: '#5A8A8F',
    size: 1.4,
    service: 'search',
    title: 'Search',
  },
  {
    id: 1,
    position: [-3.5, 2.5, 1] as [number, number, number],
    color: '#C9364F',
    size: 1.2,
    service: 'quote',
    title: 'Custom Peptide Synthesis',
  },
  {
    id: 2,
    position: [3.5, 2, -1] as [number, number, number],
    color: '#5A8A8F',
    size: 1.0,
    service: 'about',
    title: 'Quality Documentation',
  },
  {
    id: 3,
    position: [-4.5, 0, 0.5] as [number, number, number],
    color: '#E8B341',
    size: 0.8,
    service: 'quote',
    title: 'Technical Support',
  },
  {
    id: 4,
    position: [0, -3, 1.5] as [number, number, number],
    color: '#C9364F',
    size: 1.0,
    service: 'products',
    title: 'Research Catalog',
  },
  {
    id: 5,
    position: [3.5, -2.5, -1] as [number, number, number],
    color: '#E8B341',
    size: 1.0,
    service: 'about',
    title: 'Regulatory Compliance',
  },
];

const bonds = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 0, to: 3 },
  { from: 0, to: 4 },
  { from: 0, to: 5 },
];

export default function Molecule3D() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleNodeClick = (service: string) => {
    if (service === 'search') {
      // Focus search bar (handled in parent)
      return;
    }
    router.push(`/${service}`);
  };
  
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Background color */}
      <color attach="background" args={['#FAFAFA']} />
      
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      
      {/* Controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={isMobile ? 0.3 : 0.4}
        enableDamping
        dampingFactor={0.05}
        enableZoom={false}
        enableRotate={!isMobile}
        enablePan={false}
        maxDistance={20}
        minDistance={8}
      />
      
      {/* Molecule structure */}
      <group>
        {/* Draw bonds first (appear behind nodes) */}
        {bonds.map((bond, index) => (
          <MoleculeBond
            key={index}
            start={nodes[bond.from].position}
            end={nodes[bond.to].position}
          />
        ))}
        
        {/* Draw nodes */}
        {nodes.map((node) => (
          <MoleculeNode
            key={node.id}
            position={node.position}
            color={node.color}
            size={node.size}
            title={node.title}
            service={node.service}
            onClick={handleNodeClick}
          />
        ))}
      </group>
    </Canvas>
  );
}
