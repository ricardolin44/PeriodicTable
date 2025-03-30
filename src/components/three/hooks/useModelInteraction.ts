import { useRef, useState } from 'react';
import { Vector3 } from 'three';

interface UseModelInteractionProps {
  initialScale?: number;
  initialRotation?: [number, number, number];
  initialPosition?: [number, number, number];
}

export function useModelInteraction({
  initialScale = 1,
  initialRotation = [0, 0, 0],
  initialPosition = [0, 0, 0],
}: UseModelInteractionProps = {}) {
  const [scale, setScale] = useState(initialScale);
  const [rotation, setRotation] = useState<[number, number, number]>(initialRotation);
  const [position, setPosition] = useState<[number, number, number]>(initialPosition);
  const targetPosition = useRef(new Vector3(...initialPosition));

  const handleScale = (newScale: number) => {
    setScale(newScale);
  };

  const handleRotation = (newRotation: [number, number, number]) => {
    setRotation(newRotation);
  };

  const handlePosition = (newPosition: [number, number, number]) => {
    setPosition(newPosition);
    targetPosition.current.set(...newPosition);
  };

  const resetTransform = () => {
    setScale(initialScale);
    setRotation(initialRotation);
    setPosition(initialPosition);
    targetPosition.current.set(...initialPosition);
  };

  return {
    scale,
    rotation,
    position,
    targetPosition: targetPosition.current,
    handleScale,
    handleRotation,
    handlePosition,
    resetTransform,
  };
}
