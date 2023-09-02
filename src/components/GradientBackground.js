export const GradientBackground = () => (
  <mesh position={[0, 0, -50]} scale={[200, 200, 1]}>
    <planeGeometry attach="geometry" args={[200, 200]} />
    <shaderMaterial
      attach="material"
      depthTest={false}
      depthWrite={false}
      vertexShader={`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `}
      fragmentShader={`
        varying vec4 vUv;
        void main() {
          // Change the background color to #BCDECC
          vec4 backgroundColor = vec4(188, 222, 204, 1.0);
          gl_FragColor = backgroundColor;
        }
      `}
    />
  </mesh>
);