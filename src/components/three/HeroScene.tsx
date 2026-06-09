"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron args={[1.2, 1]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#007BFF"
            emissive="#007BFF"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.9}
          />
        </Icosahedron>
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
        <Torus args={[1.8, 0.05, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
            wireframe
          />
        </Torus>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere args={[0.15, 32, 32]} position={[2, 1, 0]}>
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={1}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
        <Sphere args={[0.1, 32, 32]} position={[-1.5, -0.8, 0.5]}>
          <meshStandardMaterial
            color="#007BFF"
            emissive="#007BFF"
            emissiveIntensity={1}
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1}>
        <Sphere args={[0.08, 32, 32]} position={[1.2, -1.2, -0.3]}>
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#00D9FF"
            emissiveIntensity={0.8}
          />
        </Sphere>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#007BFF" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00D9FF" />
      <spotLight
        position={[0, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#00D9FF"
      />
      <FloatingShapes />
    </>
  );
}

export function HeroScene() {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-32 w-32 animate-pulse rounded-full bg-primary/20" />
        </div>
      }
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </Suspense>
  );
}
