'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ReactNode } from 'react';

interface BasicSceneProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  backgroundColor?: string;
}

export function BasicScene({
  children,
  cameraPosition = [0, 0, 5],
  backgroundColor = '#f0f0f0',
}: BasicSceneProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: cameraPosition }} style={{ background: backgroundColor }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls />
        {children}
      </Canvas>
    </div>
  );
}
