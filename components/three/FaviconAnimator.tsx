"use client";

import { useEffect } from "react";
import * as THREE from "three";

export function FaviconAnimator() {
  useEffect(() => {
    // Check if we are in the browser
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Get or create the favicon link element
    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    // Setup Three.js scene specifically for the favicon
    const size = 64; // Favicon resolution (keep it small for performance)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false }); // alpha true for transparent bg
    renderer.setSize(size, size);
    // Note: We don't attach the renderer to the DOM directly

    // Add a pulsing, rotating Torus geometry to match the modern UI feel
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    
    // Wireframe edges with cyan match
    const edgesGeom = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.9 });
    const lines = new THREE.LineSegments(edgesGeom, material);
    scene.add(lines);

    // Provide some minimal time tracking
    let frameId: number;
    let lastTime = performance.now();
    
    // Animate at approx 15 fps to prevent excessive DOM updates
    const FPS = 15;
    const interval = 1000 / FPS;

    const renderLoop = () => {
      frameId = requestAnimationFrame(renderLoop);

      const now = performance.now();
      const delta = now - lastTime;

      if (delta >= interval) {
        lastTime = now - (delta % interval);

        // Rotate the mesh
        lines.rotation.x += 0.05;
        lines.rotation.y += 0.08;

        // Render scene
        renderer.render(scene, camera);

        // Export data url and update favicon
        const dataUrl = renderer.domElement.toDataURL("image/png");
        link.href = dataUrl;
      }
    };

    // Start loop
    renderLoop();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // Invisible component
  return null;
}
