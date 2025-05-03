// src/components/StarsBackground.jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';

function RotatingStars() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0019; // Slow horizontal rotation
    }
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </group>
  );
}

export default function StarsBackground() {
  return (
    <div style={{ width: '100%', height: '100%',  zIndex: -1 }}>
      <Canvas>
        <RotatingStars />
      </Canvas>
    </div>
  );
}
