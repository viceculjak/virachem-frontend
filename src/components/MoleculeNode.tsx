'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MoleculeNodeProps {
  position: [number, number, number];
  color: string;
  size: number;
  title: string;
  service: string;
  onClick?: (service: string) => void;
}

export default function MoleculeNode({ 
  position, 
  color, 
  size, 
  title,
  service,
  onClick 
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
    <group>
      {/* Main sphere */}
      <mesh
        ref={meshRef}
        position={position}
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
        <mesh position={position} scale={size * 1.3}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.15}
          />
        </mesh>
      )}
    </group>
  );
}
