// GradientBackground Component
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
            float distanceFromCenter = distance(vUv, vec2(0.5, 0.5));
            vec3 startColor = vec3(0.04, 0.04, 0.12);
            vec3 endColor = vec3(0.01, 0.01, 0.03);
            vec3 gradient = mix(startColor, endColor, distanceFromCenter * 2.0);
            gl_FragColor = vec4(gradient, 1.0);
          }
        `}
      />
    </mesh>
  );
  