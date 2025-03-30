# Three.js Components Directory

This directory contains Three.js components and utilities for 3D rendering.

## Directory Structure

- `/three` - Main directory for Three.js components
  - `/models` - Three.js model components (e.g., ElementModel, MoleculeModel)
  - `/scenes` - Scene components and layouts
  - `/controls` - Camera and interaction controls
  - `/utils` - Three.js utility functions and helpers
  - `/hooks` - Custom React hooks for Three.js
  - `/shaders` - GLSL shader files
  - `/materials` - Custom material definitions

## Usage

Example of using a Three.js component:

```typescript
import { ElementModel } from '@/components/three/models/ElementModel';

export default function ElementViewer() {
  return (
    <div className="w-full h-full">
      <ElementModel 
        element="hydrogen"
        position={[0, 0, 0]}
        scale={1}
        rotation={[0, 0, 0]}
      />
    </div>
  );
}
```

## Best Practices

1. Use React Three Fiber for React integration
2. Implement proper cleanup in useEffect hooks
3. Use performance optimizations (instancing, LOD)
4. Implement proper error boundaries
5. Use proper TypeScript types for props and state 