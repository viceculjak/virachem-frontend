import * as THREE from 'three';

interface MoleculeBondProps {
  start: [number, number, number];
  end: [number, number, number];
}

export default function MoleculeBond({ start, end }: MoleculeBondProps) {
  // Calculate bond position and rotation
  const startVec = new THREE.Vector3(...start);
  const endVec = new THREE.Vector3(...end);
  
  const direction = endVec.clone().sub(startVec);
  const length = direction.length();
  const midpoint = startVec.clone().add(endVec).multiplyScalar(0.5);
  
  // Create quaternion for rotation
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.normalize()
  );
  
  return (
    <mesh position={midpoint} quaternion={quaternion}>
      <cylinderGeometry args={[0.08, 0.08, length, 8]} />
      <meshBasicMaterial 
        color="#0B1F3F" 
        transparent 
        opacity={0.8}
      />
    </mesh>
  );
}
