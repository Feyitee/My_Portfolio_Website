import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px" });
  const isMobile = useMediaQuery({ quert: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Room>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
        <OrbitControls />
        enablePan ={false}
        enableZoom ={!isTablet}
        maxDistance ={20}
        minDistanve ={5}
        minPolarAngle = {Math.PI / 5}
        maxPolarAngle ={Math.PI / 2}
      </Room>
    </Canvas>
  );
};

export default HeroExperience;
