'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

interface MoleculeNodeProps {
  position: [number, number, number];
  color: string;
  size: number;
  title: string;
  service: string;
  isCenter?: boolean;
  onClick?: (service: string) => void;
  children?: React.ReactNode;
}

export default function MoleculeNode({ 
  position, 
  color, 
  size, 
  title,
  service,
  isCenter = false,
  onClick,
  children
}: MoleculeNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Smooth animation on hover
  useFrame(() => {
    if (meshRef.current) {
      const targetScale = hovered ? 1.15 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });
  
  return (
    <group position={position}>
      {/* Main sphere */}
      <mesh
        ref={meshRef}
        onClick={() => onClick?.(service)}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.4 : 0.15}
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      
      {/* Outer glow on hover */}
      {hovered && (
        <mesh scale={size * 1.3}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.15}
          />
        </mesh>
      )}
      
      {/* Label for satellite nodes */}
      {!isCenter && (
        <Html
          center
          distanceFactor={8}
          position={[0, size + 0.5, 0]}
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div
            className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap"
            style={{
              color: color,
              fontWeight: '600',
              fontSize: '14px',
              maxWidth: '200px',
              textAlign: 'center',
            }}
          >
            {title}
          </div>
        </Html>
      )}
      
      {/* Custom content for center node (search bar) */}
      {isCenter && children}
    </group>
  );
}
