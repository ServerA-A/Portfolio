"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function OrbMesh() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (!meshRef.current) return
    meshRef.current.rotation.x = t * 0.35
    meshRef.current.rotation.y = t * 0.6
  })

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshStandardMaterial
          color="#5eead4"
          emissive="#0f766e"
          emissiveIntensity={1.2}
          roughness={0.28}
          metalness={0.62}
        />
      </mesh>
      <mesh>
        <torusGeometry args={[1.15, 0.035, 16, 72]} />
        <meshBasicMaterial color="#7dd3fc" transparent opacity={0.5} />
      </mesh>
    </Float>
  )
}

export default function MiniOrb() {
  return (
    <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3.1], fov: 40 }}>
        <ambientLight intensity={0.45} />
        <pointLight position={[2, 2, 2]} intensity={1.7} color="#6ee7b7" />
        <pointLight position={[-2, -1.5, 1]} intensity={1.3} color="#7dd3fc" />
        <OrbMesh />
      </Canvas>
    </div>
  )
}
