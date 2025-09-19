"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Dodecahedron = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh {...props} ref={meshRef}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="hsl(var(--primary))" roughness={0.5} />
    </mesh>
  );
};

const Particles = ({ count = 5000 }) => {
    const meshRef = useRef<THREE.Points>(null!);
  
    const positions = useMemo(() => {
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
      return positions;
    }, [count]);
  
    useFrame((state, delta) => {
      if (meshRef.current) {
        meshRef.current.rotation.y += delta * 0.05;
      }
    });
  
    return (
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.01} color="hsl(var(--accent))" sizeAttenuation />
      </points>
    );
  };

export function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ background: 'hsl(var(--background))' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Dodecahedron position={[0, 0, 0]} />
      <Particles />
    </Canvas>
  );
}
