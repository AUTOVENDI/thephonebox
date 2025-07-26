import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function SamsungModel() {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF('/samsung_galaxy_s24_ultra_V2.glb') as any;

  useFrame((state) => {
    if (group.current) {
      // Gentle rotation animation
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={group} dispose={null}>
      <group scale={[1, 1, 1]} position={[0, 0, 0]}>
        {/* Render all meshes from the GLB file */}
        {Object.keys(nodes).map((key) => {
          const node = nodes[key];
          if (node && node.geometry && node.material) {
            return (
              <mesh
                key={key}
                geometry={node.geometry}
                material={node.material}
                castShadow
                receiveShadow
              />
            );
          }
          return null;
        })}
      </group>
    </group>
  );
}

useGLTF.preload('/samsung_galaxy_s24_ultra_V2.glb');  