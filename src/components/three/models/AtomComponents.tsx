'use client';

import { Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export function Nucleus() {
  return (
    <mesh>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

function ElectronShell({ radius }: { radius: number }) {
  const points = useMemo(() => {
    const segments = 64;
    const angleStep = (Math.PI * 2) / segments;
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= segments; i++) {
      const angle = i * angleStep;
      pts.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
    }
    return pts;
  }, [radius]);
  
  return <Line points={points} color="white" lineWidth={1} />;
}

function Electron({ radius, angle }: { radius: number; angle: number }) {
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  
  return (
    <mesh position={[x, 0, z]}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="#00FFFF" />
    </mesh>
  );
}

export function ElectronShellGroup({
  radius,
  electronCount,
}: {
  radius: number;
  electronCount: number;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.2 * delta;
    }
  });
  
  const angles = Array.from(
    { length: electronCount },
    (_, i) => (i * 2 * Math.PI) / electronCount
  );
  
  return (
    <group ref={groupRef}>
      <ElectronShell radius={radius} />
      {angles.map((angle, i) => (
        <Electron key={i} radius={radius} angle={angle} />
      ))}
    </group>
  );
} 