"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, Float, PresentationControls } from "@react-three/drei"
import type { Mesh } from "three"

function Model() {
  const mesh = useRef<Mesh>(null!)

  // Simple cube as fallback if GLTF fails to load
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <mesh ref={mesh} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.2} />
    </mesh>
  )
}

function LaptopModel() {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf",
  )

  useFrame((state) => {
    scene.rotation.y = state.clock.getElapsedTime() * 0.15
  })

  return <primitive object={scene} scale={0.8} position={[0, -0.5, 0]} />
}

export function ThreeDElement() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
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
            <Suspense fallback={<Model />}>
              <LaptopModel />
            </Suspense>
          </Float>
        </PresentationControls>

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

// Lazy load the component with Suspense
import dynamic from "next/dynamic"
import { Suspense } from "react"

export const DynamicThreeDElement = dynamic(() => Promise.resolve(ThreeDElement), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center bg-primary/5">
      <div className="animate-pulse text-primary">Loading 3D Element...</div>
    </div>
  ),
})

