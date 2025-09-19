"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedMesh = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
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

const GradientBackground = () => {
    const { viewport } = useThree();
    const materialRef = useRef<THREE.ShaderMaterial>(null!);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColor1: { value: new THREE.Color('hsl(var(--background))') },
            uColor2: { value: new THREE.Color('hsl(var(--secondary))') },
        }),
        []
    );

    useFrame((state) => {
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      }
    });

    return (
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                ref={materialRef}
                uniforms={uniforms}
                vertexShader={`
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `}
                fragmentShader={`
                    uniform float uTime;
                    uniform vec3 uColor1;
                    uniform vec3 uColor2;
                    varying vec2 vUv;
                    void main() {
                        float time = uTime * 0.1;
                        vec2 p = vUv * 2.0 - 1.0;
                        float mixValue = (sin(p.x * 2.0 + time) + cos(p.y * 2.0 + time)) * 0.5 + 0.5;
                        gl_FragColor = vec4(mix(uColor1, uColor2, mixValue), 1.0);
                    }
                `}
            />
        </mesh>
    );
};


export function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
    >
      <GradientBackground />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedMesh position={[0, 0, 0]} />
      <Particles />
    </Canvas>
  );
}
