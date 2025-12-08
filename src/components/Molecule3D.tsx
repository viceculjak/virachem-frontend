'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import MoleculeNode from './MoleculeNode';
import MoleculeBond from './MoleculeBond';
import SearchBar from './SearchBar';
import * as THREE from 'three';

// Define molecule structure matching the logo image exactly
const nodes = [
  {
    id: 0,
    position: [0, 0, 0] as [number, number, number],
    color: '#1a4d5c', // Dark teal center (matches image)
    size: 1.6,
    service: 'search',
    title: 'Search Products',
  },
  {
    id: 1,
    position: [-4, 3, 0] as [number, number, number],
    color: '#D85A5A', // Red top-left (matches image)
    size: 1.4,
    service: 'products',
    title: 'Product Catalog',
  },
  {
    id: 2,
    position: [4.5, 2.5, 0] as [number, number, number],
    color: '#5a8a8f', // Green/teal top-right (matches image)
    size: 1.2,
    service: 'services',
    title: 'Manufacturing Services',
  },
  {
    id: 3,
    position: [-4.5, -0.5, 0] as [number, number, number],
    color: '#E8B741', // Gold left (matches image)
    size: 1.0,
    service: 'quote',
    title: 'Request Quote',
  },
  {
    id: 4,
    position: [0, -3.5, 0] as [number, number, number],
    color: '#D85A5A', // Red bottom (matches image)
    size: 1.4,
    service: 'quality',
    title: 'Quality & Compliance',
  },
  {
    id: 5,
    position: [4, -3, 0] as [number, number, number],
    color: '#E8B741', // Gold bottom-right (matches image)
    size: 1.2,
    service: 'contact',
    title: 'Contact & Support',
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
  const isInteracting = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initialPosition = useRef(new THREE.Vector3(0, 0, 12));
  
  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      
      const handleStart = () => {
        isInteracting.current = true;
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
      
      const handleEnd = () => {
        isInteracting.current = false;
        // Wait 500ms after user stops, then start returning
        timeoutRef.current = setTimeout(() => {
          // Trigger return to origin
          isInteracting.current = false;
        }, 500);
      };
      
      controls.addEventListener('start', handleStart);
      controls.addEventListener('end', handleEnd);
      
      return () => {
        controls.removeEventListener('start', handleStart);
        controls.removeEventListener('end', handleEnd);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }
  }, [controlsRef]);
  
  useFrame((state) => {
    if (controlsRef.current && !isInteracting.current) {
      const controls = controlsRef.current;
      
      // Smoothly lerp camera back to initial position
      state.camera.position.lerp(initialPosition.current, 0.05);
      state.camera.lookAt(0, 0, 0);
      
      // Also reset the controls target
      controls.target.lerp(new THREE.Vector3(0, 0, 0), 0.05);
      controls.update();
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
  // Initialize as mobile to prevent flash of large search bar
  const [isMobile, setIsMobile] = useState(true);
  const [search, setSearch] = useState('');
  const controlsRef = useRef<any>(null);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleNodeClick = (service: string) => {
    // Don't navigate when clicking search node
    if (service === 'search') {
      return;
    }
    // Use window.location to avoid router context issues in Canvas
    window.location.href = `/${service}`;
  };
  
  return (
    <Canvas
      camera={{ 
        position: [0, 0, isMobile ? 18 : 12], 
        fov: isMobile ? 65 : 49 
      }}
      gl={{ antialias: true, alpha: true }}
      style={{ 
        width: '100%',
        height: '100%',
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
        
        {/* Search bar positioned at center - always visible */}
        <Html 
          position={[0, 0, 0]} 
          center 
          distanceFactor={8}
          zIndexRange={[100, 0]}
        >
          <div 
            className="pointer-events-auto bg-white backdrop-blur-sm rounded-lg shadow-2xl border-4 border-[#5A8A8F] p-2.5" 
            style={{ 
              width: '300px',
              maxWidth: '90vw'
            }}
          >
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </Html>
      </MoleculeGroup>
    </Canvas>
  );
}
