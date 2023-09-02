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
        varying vec2 vUv;
        void main() {
          // Change the background color to white
          vec3 backgroundColor = vec3(1.0, 1.0, 1.0);
          gl_FragColor = vec4(backgroundColor, 1.0);
        }
      `}
    />
  </mesh>
);