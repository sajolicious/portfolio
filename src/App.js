import React, {  useMemo, Suspense, useEffect } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls, Environment, Text,Plane } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import {animateBackgroundColor}  from './components/Utility';
import { GradientBackground } from './components/GradientBackground';
import {Bubble} from './components/Bubble';
import {Navbar} from './components/Navbar'
// Main App Component
function App() {
  useEffect(() => {
    animateBackgroundColor()
  }, [])

  const bubbles = useMemo(
    () =>
      Array(30)
        .fill()
        .map((_, i) => {
          const pos = [
            20 - Math.random() * 40,
            20 - Math.random() * 40,
            20 - Math.random() * 40,
          ]
          return <Bubble position={pos} key={i} />
        }),
    [],
  )

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        
      }}
    >
      <Navbar />
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 0, 50], fov: 75 }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <GradientBackground />
          {/* Plane to catch the shadow */}
          <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} args={[20, 20]} receiveShadow>
                    <meshStandardMaterial color="#121212" />
                </Plane>

                {/* Name with shadow */}
                <Text
                    position={[-5, 8, 0]}
                    fontSize={8}
                    color="#FFD700"
                    anchorX="center"
                    anchorY="middle"
                    castShadow   // Enables the text mesh to cast shadows
                >
                    Sajol Das
                </Text>
                <Text
                    position={[-6.5, -2, 0]}
                    fontSize={7}
                    color="#7DF9FF"
                    anchorX="center"
                    anchorY="middle"
                    castShadow   // Enables the text mesh to cast shadows
                >
                    Web Developer
                </Text>
        <Suspense fallback={null}>
          <Environment preset="studio" background />
          {bubbles}
        </Suspense>
        <OrbitControls />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            intensity={0.3}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default App
