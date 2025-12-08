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
}

export default function MoleculeNode({ 
  position, 
  color, 
  size, 
  title,
  service,
  isCenter = false,
  onClick
}: MoleculeNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  
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
        onPointerDown={(e) => {
          touchStartRef.current = {
            x: e.clientX,
            y: e.clientY,
            time: Date.now()
          };
        }}
        onPointerUp={(e) => {
          if (!touchStartRef.current) return;
          
          const deltaX = Math.abs(e.clientX - touchStartRef.current.x);
          const deltaY = Math.abs(e.clientY - touchStartRef.current.y);
          const deltaTime = Date.now() - touchStartRef.current.time;
          
          // Only trigger click if it's a tap (small movement, quick)
          if (deltaX < 10 && deltaY < 10 && deltaTime < 300) {
            e.stopPropagation();
            console.log('Mesh clicked:', service);
            onClick?.(service);
          }
          
          touchStartRef.current = null;
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
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
      
      {/* Label for all nodes - Enhanced */}
      <Html
        center
        distanceFactor={8}
        position={[0, size + 0.8, 0]}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div
          className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-xl whitespace-nowrap"
          style={{
            color: color,
            fontWeight: '800',
            fontSize: isCenter ? '20px' : '18px',
            maxWidth: '200px',
            textAlign: 'center',
            border: `3px solid ${color}`,
            textShadow: `0 0 20px ${color}40`,
          }}
        >
          {isCenter ? 'Search' : title}
        </div>
      </Html>
    </group>
  );
}
