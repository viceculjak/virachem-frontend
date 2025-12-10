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
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  
  // Check if this is the center node
  const isCenterNode = service === 'none';
  
  // Smooth animation on hover + pulsing glow
  useFrame((state) => {
    if (meshRef.current) {
      const targetScale = hovered ? 1.15 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
    
    // Pulsing glow effect for all nodes
    if (glowRef.current) {
      const time = state.clock.getElapsedTime();
      const pulse = Math.sin(time * 2) * 0.5 + 0.5; // 0 to 1
      glowRef.current.scale.setScalar(size * (1.2 + pulse * 0.3));
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = 0.1 + pulse * 0.15;
    }
  });
  
  return (
    <group position={position}>
      {/* Main sphere */}
      {/* Pulsing glow (always visible) */}
      <mesh ref={glowRef} scale={size * 1.3}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.2}
        />
      </mesh>
      
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
          if (service !== 'none') {
            document.body.style.cursor = 'pointer';
          }
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.4 : 0.2}
          metalness={0.2}
          roughness={0.15}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          reflectivity={0.9}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* Label - Center node has styled ViraChem, others in center */}
      <Html
        center
        distanceFactor={8}
        position={[0, 0, 0]}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div
          className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-xl"
          style={{
            fontWeight: '800',
            fontSize: isCenterNode ? '22px' : '16px',
            maxWidth: isCenterNode ? '250px' : '180px',
            textAlign: 'center',
            border: `3px solid ${color}`,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'normal',
            lineHeight: '1.2',
          }}
        >
          {isCenterNode ? (
            <div style={{ letterSpacing: '-0.05em' }}>
              <span style={{ color: '#0B1F3F' }}>VIRA</span>
              <span style={{ color: '#798996' }}>CHEM</span>
            </div>
          ) : (
            <span style={{ 
              color: color,
              textShadow: `0 0 20px ${color}40`
            }}>
              {title}
            </span>
          )}
        </div>
      </Html>
    </group>
  );
}
