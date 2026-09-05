"use client";

import { useRef, MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CoreRings({
  progressRef,
}: {
  progressRef: MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const ringOuter = useRef<THREE.Mesh>(null);
  const ringMid = useRef<THREE.Mesh>(null);
  const ringInner = useRef<THREE.Mesh>(null);
  const nucleus = useRef<THREE.Mesh>(null);

  // Smoothed progress so the scroll link feels fluid rather than jumpy.
  const smoothed = useRef(0);

  useFrame((_, delta) => {
    const target = progressRef.current;
    smoothed.current += (target - smoothed.current) * Math.min(delta * 4, 1);
    const p = smoothed.current;

    if (ringOuter.current) ringOuter.current.rotation.z += delta * 0.12;
    if (ringMid.current) ringMid.current.rotation.z -= delta * 0.18;
    if (ringInner.current) ringInner.current.rotation.z += delta * 0.26;

    if (group.current) {
      // Idle rotation plus a scroll-driven tilt/dolly.
      group.current.rotation.y += delta * 0.05;
      group.current.rotation.x = p * Math.PI * 0.35;
      group.current.position.z = -p * 3.2;
      const scale = 1 - p * 0.35;
      group.current.scale.setScalar(scale);
    }

    if (nucleus.current) {
      const pulse = 1 + Math.sin(performance.now() * 0.002) * 0.08;
      nucleus.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={group}>
      <mesh ref={ringOuter} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.6, 0.012, 8, 128]} />
        <meshBasicMaterial color="#2A2C31" />
      </mesh>
      <mesh ref={ringMid} rotation={[Math.PI / 2.3, 0.35, 0]}>
        <torusGeometry args={[2.0, 0.014, 8, 128]} />
        <meshBasicMaterial color="#7A5B36" />
      </mesh>
      <mesh ref={ringInner} rotation={[Math.PI / 1.8, -0.45, 0]}>
        <torusGeometry args={[1.4, 0.012, 8, 128]} />
        <meshBasicMaterial color="#2A2C31" />
      </mesh>
      <mesh ref={nucleus}>
        <sphereGeometry args={[0.07, 24, 24]} />
        <meshBasicMaterial color="#E3A15D" />
      </mesh>
      {/* four policy nodes orbiting the outer ring */}
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <mesh
            key={deg}
            position={[Math.cos(rad) * 2.6, Math.sin(rad) * 2.6, 0]}
          >
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshBasicMaterial color="#E3A15D" />
          </mesh>
        );
      })}
    </group>
  );
}
