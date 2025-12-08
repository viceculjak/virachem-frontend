'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import MoleculeNode from './MoleculeNode';
import MoleculeBond from './MoleculeBond';
import SearchBar from './SearchBar';
import * as THREE from 'three';

// Define molecule structure matching logo exactly - colors and sizes from molecule.png
const nodes = [
  {
    id: 0,
    position: [0, 0, 0] as [number, number, number],
    color: '#2D5F6D', // Dark teal center (from logo)
    size: 1.6,
    service: 'search',
    title: 'Search',
  },
  {
    id: 1,
    position: [-4, 3, 1] as [number, number, number],
    color: '#D85A5A', // Coral red (from logo)
    size: 1.4,
    service: 'quote',
    title: 'Custom Peptide Synthesis',
  },
  {
    id: 2,
    position: [4, 2.5, -1] as [number, number, number],
    color: '#6BA892', // Light teal/green (from logo)
    size: 1.2,
    service: 'about',
    title: 'Quality Documentation',
  },
  {
    id: 3,
    position: [-5, 0, 0.5] as [number, number, number],
    color: '#E8B741', // Golden yellow (from logo)
    size: 1.0,
    service: 'quote',
    title: 'Technical Support',
  },
  {
    id: 4,
    position: [0, -3.5, 1.5] as [number, number, number],
    color: '#D85A5A', // Coral red (from logo) - same as top-left
    size: 1.4, // Large like top-left red node
    service: 'products',
    title: 'Research Catalog',
  },
  {
    id: 5,
    position: [4, -3, -1] as [number, number, number],
    color: '#E8B741', // Golden yellow (from logo)
    size: 1.2,
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

// Camera resetter - returns camera to starting position when not interacting
function CameraResetter({ controlsRef }: { controlsRef: React.RefObject<any> }) {
  const lastInteractionTime = useRef(Date.now());
  
  useFrame((state) => {
    if (controlsRef.current) {
      // Check if user moved controls recently
      const controls = controlsRef.current;
      const currentAzimuth = controls.getAzimuthalAngle();
      const currentPolar = controls.getPolarAngle();
      
      // If position changed, update last interaction time
      if (Math.abs(currentAzimuth) > 0.01 || Math.abs(currentPolar - Math.PI / 2) > 0.01) {
        lastInteractionTime.current = Date.now();
      }
      
      // If no interaction for 500ms, start returning to origin
      const timeSinceInteraction = Date.now() - lastInteractionTime.current;
      if (timeSinceInteraction > 500) {
        // Smoothly lerp camera back to default position (relatively fast)
        const targetAzimuth = 0;
        const targetPolar = Math.PI / 2;
        
        const newAzimuth = THREE.MathUtils.lerp(currentAzimuth, targetAzimuth, 0.05);
        const newPolar = THREE.MathUtils.lerp(currentPolar, targetPolar, 0.05);
        
        // Update camera position
        const distance = controls.getDistance();
        const offset = new THREE.Spherical(distance, newPolar, newAzimuth);
        const position = new THREE.Vector3().setFromSpherical(offset);
        
        state.camera.position.copy(position);
        state.camera.lookAt(0, 0, 0);
        controls.update();
      }
    }
  });
  
  return null;
}

// Molecule group with subtle breathing/vibration animation
function MoleculeGroup({ 
  isMobile,
  children 
}: { 
  isMobile: boolean;
  children: React.ReactNode;
}) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Subtle breathing/vibration effect (same for mobile and desktop)
      const breathX = Math.sin(time * 0.5) * 0.05;
      const breathY = Math.sin(time * 0.3) * 0.05;
      
      // Apply breathing at natural position
      groupRef.current.rotation.x = breathX;
      groupRef.current.rotation.y = breathY;
      groupRef.current.rotation.z = 0;
    }
  });
  
  return <group ref={groupRef}>{children}</group>;
}

export default function Molecule3D() {
  const [isMobile, setIsMobile] = useState(false);
  const [search, setSearch] = useState('');
  const [searchVisible, setSearchVisible] = useState(true);
  const controlsRef = useRef<any>(null);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleNodeClick = (service: string) => {
    console.log('Node clicked:', service, 'searchVisible:', searchVisible);
    if (service === 'search') {
      setSearchVisible(!searchVisible);
      console.log('Toggled searchVisible to:', !searchVisible);
      return;
    }
    // Use window.location to avoid router context issues in Canvas
    window.location.href = `/${service}`;
  };
  
  return (
    <Canvas
      camera={{ 
        position: [0, 0, isMobile ? 18 : 10], 
        fov: isMobile ? 65 : 45 
      }}
      gl={{ antialias: true, alpha: true }}
      style={{ 
        touchAction: isMobile ? 'pan-y' : 'auto',
        userSelect: 'none',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none'
      }}
      onPointerMissed={() => {
        // Allow scroll when not touching nodes
      }}
    >
      {/* Background color */}
      <color attach="background" args={['#FAFAFA']} />
      
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      
      {/* Controls - disabled on mobile to allow scrolling */}
      {!isMobile && (
        <>
          <OrbitControls
            ref={controlsRef}
            enableDamping
            dampingFactor={0.05}
            enableZoom={false}
            enableRotate={true}
            enablePan={false}
            maxDistance={15}
            minDistance={8}
          />
          <CameraResetter controlsRef={controlsRef} />
        </>
      )}
      
      {/* Molecule structure with subtle breathing animation */}
      <MoleculeGroup isMobile={isMobile}>
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
            isCenter={node.id === 0}
            onClick={handleNodeClick}
          />
        ))}
        
        {/* Search bar positioned at center - desktop only */}
        {searchVisible && !isMobile && (
          <Html 
            position={[0, 0, 0]} 
            center 
            distanceFactor={5}
            zIndexRange={[100, 0]}
          >
            <div 
              className="pointer-events-auto bg-white backdrop-blur-sm rounded-lg shadow-2xl border-4 border-[#5A8A8F] p-3" 
              style={{ 
                width: '380px'
              }}
            >
              <SearchBar value={search} onChange={setSearch} />
            </div>
          </Html>
        )}
      </MoleculeGroup>
    </Canvas>
  );
}
