'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Atom from './models/Atom';

interface AtomCanvasProps {
  config: string;
}

export default function AtomCanvas({ config }: AtomCanvasProps) {
  return (
    <div className="w-[15vw] h-[25vh]">
      <Canvas
        camera={{
          position: [0, 10, 0],
          fov: 75,
          near: 0.1,
          far: 100000,
        }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          target={[0, 0, 0]}
          enableDamping
          dampingFactor={0.1}
          minDistance={1}
          maxDistance={5000}
          autoRotate={false}
        />
        <Atom config={config} />
      </Canvas>
    </div>
  );
}
