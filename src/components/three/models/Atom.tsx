'use client';

import { parseElectronConfiguration } from '@/utils/calculations/electronConfig';
import { ElectronShellGroup, Nucleus } from './AtomComponents';

interface AtomProps {
  config: string;
}

export default function Atom({ config }: AtomProps) {
  const shells = parseElectronConfiguration(config);
  const shellEntries = Object.entries(shells);
  
  return (
    <mesh>
      <Nucleus />
      {shellEntries.map(([shellNumber, electronCount], index) => (
        <ElectronShellGroup
          key={shellNumber}
          radius={1.5 + index * 1}
          electronCount={electronCount}
        />
      ))}
    </mesh>
  );
} 