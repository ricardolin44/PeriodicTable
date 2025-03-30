'use client';

import { parseElectronConfiguration } from '@/utils/calculations';
import { ElectronShellGroup, SingleNucleus } from './Atom3DComponents';

function Atom3D({ config }: { config: string }) {
  const shells = parseElectronConfiguration(config);
  const shellEntries = Object.entries(shells);
  return (
    <mesh>
      <SingleNucleus />
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

export default Atom3D;
