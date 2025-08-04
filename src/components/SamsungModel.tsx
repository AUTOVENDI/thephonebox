import React from 'react';
import { useGLTF, PresentationControls, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function SamsungModel() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/samsung_galaxy_s24_ultra_V2.glb');

  useFrame((state) => {
    if (group.current) {
      // Gentle rotation animation
      group.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <group ref={group} dispose={null}>
          <primitive 
            object={scene} 
            scale={[1.5, 1.5, 1.5]} 
            position={[0, -0.5, 0]}
            rotation={[0, 0, 0]}
          />
        </group>
      </PresentationControls>
    </Float>
  );
}
