# 3D Models Directory

This directory contains 3D models created with Blender and other 3D modeling software.

## Directory Structure

- `/models` - Main directory for all 3D models
  - `/elements` - 3D models of individual elements
  - `/molecules` - 3D models of molecules and compounds
  - `/textures` - Texture files for the 3D models
  - `/materials` - Material files for the 3D models

## File Formats

Supported file formats:
- `.glb` - Binary GLTF (recommended for web)
- `.gltf` - GLTF
- `.obj` - Wavefront Object
- `.fbx` - Autodesk FBX
- `.usdz` - Universal Scene Description (for iOS)

## Usage

To use these models in your components, import them from the public directory:

```typescript
// Example usage in a component
const modelPath = '/models/elements/hydrogen.glb';
```

## Best Practices

1. Optimize models for web use (reduce polygon count, texture sizes)
2. Use compressed formats like .glb for better performance
3. Keep file sizes small for faster loading
4. Include appropriate LOD (Level of Detail) versions for complex models 