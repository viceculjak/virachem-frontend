'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Environment } from '@react-three/drei';
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
      
      {/* Lighting - Enhanced for 3D shine */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.0} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#4a90e2" />
      <spotLight 
        position={[0, 15, 0]} 
        intensity={0.8} 
        angle={0.6}
        penumbra={0.5}
      />
      
      {/* Environment reflections */}
      <Environment preset="city" />
      
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
        
        {/* Search bar positioned at center - constant size */}
        {searchVisible && (
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
        )}
      </MoleculeGroup>
    </Canvas>
  );
}
