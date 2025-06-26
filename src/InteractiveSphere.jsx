import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function DraggableSphere() {
  const meshRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const lastPointer = useRef([0, 0]);

  // Animate rotation if not dragging
  useFrame(() => {
    if (!isDragging && meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  // Mouse drag handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    lastPointer.current = [e.clientX, e.clientY];
  };

  const handlePointerUp = () => setIsDragging(false);

  const handlePointerMove = (e) => {
    if (isDragging && meshRef.current) {
      const [lastX, lastY] = lastPointer.current;
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      meshRef.current.rotation.y += deltaX * 0.01;
      meshRef.current.rotation.x += deltaY * 0.01;
      lastPointer.current = [e.clientX, e.clientY];
    }
  };

  return (
    <mesh
      ref={meshRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp}
      onPointerMove={handlePointerMove}
      castShadow
      receiveShadow
      scale={1.6}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#a78bfa"
        roughness={0.3}
        metalness={0.7}
        wireframe={false}
      />
    </mesh>
  );
}

export default function InteractiveSphere() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 3.5], fov: 50 }}
      shadows
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <DraggableSphere />
      {/* Optionally allow orbit controls for touch devices */}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}
