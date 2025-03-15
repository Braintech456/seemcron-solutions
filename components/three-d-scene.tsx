"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, PresentationControls } from "@react-three/drei"
import type { Mesh } from "three"

function Model() {
  const mesh = useRef<Mesh>(null!)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.2
    }
  })

  return (
    <group>
      {/* Main cube */}
      <mesh ref={mesh} scale={1.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Orbiting smaller cubes */}
      <OrbitingCube distance={2} speed={1} color="#60a5fa" />
      <OrbitingCube distance={2.5} speed={0.7} color="#93c5fd" offset={Math.PI} />
      <OrbitingCube distance={3} speed={0.5} color="#2563eb" offset={Math.PI / 2} />
    </group>
  )
}

function OrbitingCube({ distance, speed, color, offset = 0 }) {
  const mesh = useRef<Mesh>(null!)

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime()
      mesh.current.position.x = Math.sin(time * speed + offset) * distance
      mesh.current.position.z = Math.cos(time * speed + offset) * distance
      mesh.current.rotation.y = time * 2
      mesh.current.rotation.x = time * 2
    }
  })

  return (
    <mesh ref={mesh} scale={0.4}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

export function ThreeDScene() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.4}>
            <Model />
          </Float>
        </PresentationControls>

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

// Lazy load the component with Suspense
import dynamic from "next/dynamic"

export const DynamicThreeDScene = dynamic(() => Promise.resolve(ThreeDScene), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center bg-primary/5">
      <div className="animate-pulse text-primary">Loading 3D Element...</div>
    </div>
  ),
})

