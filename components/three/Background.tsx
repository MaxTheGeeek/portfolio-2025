"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ opacity: "calc(1 * var(--intensity))" }}>
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}
