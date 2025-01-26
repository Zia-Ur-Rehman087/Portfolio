import React, { useRef,useState,useEffect } from "react";
import { Canvas, useFrame,useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const PersonModel = () => {
  const texture = useTexture("/assets/prfolemyimagenotbg.png"); // Load texture
  const meshRef = useRef(); // Reference to the mesh for animation

    // Animation logic: Smooth movement from top to bottom
    useFrame((state) => {
        meshRef.current.position.y = 0.1 + Math.sin(state.clock.elapsedTime) * 0.15
      });
      const { size } = useThree();  
      const [scale, setScale] = useState([2.7, 1.7, 1.5]);  
    
      useEffect(() => {
       
        const scaleX = (size.width / window.innerWidth) * 2.7;  // Adjust scaling logic as needed
        const scaleY = (size.height / window.innerHeight) * 1.7;  // Adjust scaling logic as needed
        setScale([scaleX, scaleY, 1.5]);  
      }, [size]); 
  return (
    <mesh ref={meshRef} scale={[2.7, 1.7, 1.5]} 
    position={[0,-1.5,0]}
    rotation={[0.25,0,0]}
    >
      {/* Scale the plane by 1.5x */}
      <planeGeometry args={[2, 4]} /> {/* Plane dimensions */}
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight  position={[0,0,0]} />
      <PersonModel />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
