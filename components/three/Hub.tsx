"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Html } from "@react-three/drei";
import * as THREE from "three";
import { NAV_NODES } from "@/lib/data";

function NodeShape({ shape, i }: { shape: string, i: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * (0.5 + i * 0.1);
      meshRef.current.rotation.y = clock.getElapsedTime() * (0.5 + i * 0.1);
    }
  });

  let geom;
  let color = "#fff";
  if (shape === "cube") { geom = <boxGeometry args={[1, 1, 1]} />; color = "#22d3ee"; }
  else if (shape === "sphere") { geom = <sphereGeometry args={[0.7, 32, 32]} />; color = "#c084fc"; }
  else if (shape === "torus") { geom = <torusGeometry args={[0.6, 0.2, 16, 32]} />; color = "#f472b6"; }
  else if (shape === "diamond") { geom = <octahedronGeometry args={[0.8]} />; color = "#fbbf24"; }
  else if (shape === "prism") { geom = <tetrahedronGeometry args={[0.9]} />; color = "#4ade80"; }
  else { geom = <boxGeometry args={[1, 1, 1]} />; color = "#22d3ee"; }

  return (
    <mesh ref={meshRef}>
      {geom}
      <meshPhysicalMaterial color="#0b0d18" transparent opacity={0.8} />
      <Edges color={color} threshold={15} scale={1.05} />
    </mesh>
  );
}

function OrbitNode({ node, index, onNav }: { node: any; index: number; onNav: (id: string) => void }) {
  const radii = { 1: 3, 2: 4.5, 3: 6 };
  const r = (radii as any)[node.orbit];
  const rad = (node.angle * Math.PI) / 180;
  
  // Base position
  const x = Math.cos(rad) * r;
  const z = Math.sin(rad) * r;
  const y = Math.sin(rad) * 0.6; // tilt

  const [hovered, setHover] = useState(false);

  return (
    <group position={[x, y, z]}>
      <group
        onPointerOver={() => { document.body.style.cursor = 'pointer'; setHover(true); }}
        onPointerOut={() => { document.body.style.cursor = 'auto'; setHover(false); }}
        onClick={(e) => { e.stopPropagation(); onNav(node.id); }}
      >
        {/* Hover ring */}
        <mesh scale={hovered ? 1.5 : 1}>
          <sphereGeometry args={[1.2, 16, 16]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
        
        {/* The actual geometry */}
        <group scale={hovered ? 1.2 : 1}>
          <NodeShape shape={node.shape} i={index} />
        </group>

        {/* HTML Label */}
        <Html position={[0, -1.8, 0]} center style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: 'none' }}>
          <div className="hub-label" style={{ opacity: 1, position: 'relative', top: 'auto', left: 'auto', transform: 'none' }}>
            {node.label}
          </div>
        </Html>
      </group>
    </group>
  );
}

function Core() {
  const coreRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      coreRef.current.rotation.x = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={coreRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhysicalMaterial color="#0b0d18" transparent opacity={0.9} />
      <Edges color="#22d3ee" scale={1.05} />
      <pointLight color="#22d3ee" intensity={2} distance={10} />
    </mesh>
  );
}

function HubScene({ onNav }: { onNav: (id: string) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1 + 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Core />
      {/* Orbit Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.98, 3.02, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.48, 4.52, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[5.98, 6.02, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>

      {/* Nodes */}
      {NAV_NODES.map((node, i) => (
        <OrbitNode key={node.id} node={node} index={i} onNav={onNav} />
      ))}
    </group>
  );
}

export function Hub({ onNav }: { onNav: (id: string) => void }) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas camera={{ position: [0, 2, 12], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <HubScene onNav={onNav} />
      </Canvas>
      <div className="hub-counter absolute bottom-0 left-0 w-full text-center">
        [ click any object to teleport ]
      </div>
    </div>
  );
}
