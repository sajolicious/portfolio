import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
// Bubble Component
export const Bubble = (props) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  // Random initial velocity for each bubble with increased speed
  const velocity = useRef({
    x: (Math.random() - 0.5) * 0.1,
    y: (Math.random() - 0.5) * 0.1,
    z: (Math.random() - 0.5) * 0.1,
  });

  useFrame(() => {
    // Continuously update the position
    mesh.current.position.x += velocity.current.x;
    mesh.current.position.y += velocity.current.y;
    mesh.current.position.z += velocity.current.z;

    // If a bubble moves too far from its original position, invert its direction
    if (Math.abs(mesh.current.position.x - props.position[0]) > 5)
      velocity.current.x = -velocity.current.x;
    if (Math.abs(mesh.current.position.y - props.position[1]) > 5)
      velocity.current.y = -velocity.current.y;
    if (Math.abs(mesh.current.position.z - props.position[2]) > 5)
      velocity.current.z = -velocity.current.z;

    // Rotation for a dynamic flair
    mesh.current.rotation.x += 0.02;
    mesh.current.rotation.y += 0.02;

    // Scale adjustment for hover effect
    const scale = hovered ? 1.3 : 1;
    mesh.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      receiveShadow
      castShadow
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereGeometry args={[props.size || 1, 32, 32]} />
      <meshStandardMaterial
        color={props.color || (hovered ? 'red' : 'teal')}
        metalness={0.8}
        roughness={0.1}
        envMap={props.envMap}
      />
    </mesh>
  );
};
