import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import DeveloperDeskScene from "./DeveloperDeskScene";

const FLOOR_Y = -58.229725;

const DeveloperDesk = () => {
  return (
    <div
      className="h-80 w-full overflow-hidden rounded-lg sm:h-96 lg:h-[28rem]"
      style={{ background: "radial-gradient(ellipse at center, #7dd3fc 25%, #0ea5e9 80%)" }}
    >
      <Canvas shadows camera={{ position: [50, 150, 370], fov: 35 }}>
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[200, 240, 150]}
          intensity={2}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-near={100}
          shadow-camera-far={600}
          shadow-camera-left={-110}
          shadow-camera-right={110}
          shadow-camera-top={90}
          shadow-camera-bottom={-90}
          shadow-bias={-0.001}
        />
        <directionalLight position={[-150, 142, 250]} intensity={1.1} />
        <pointLight position={[-100, 22, -50]} intensity={0.6} color="#0ea5e9" />
        <Suspense fallback={null}>
          <DeveloperDeskScene />
        </Suspense>
        <mesh receiveShadow position={[0, FLOOR_Y, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[400, 400]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
        <OrbitControls
          target={[0, 0, 0]}
          enablePan={false}
          enableZoom={true} 
          minDistance={100}
          maxDistance={500}
          minPolarAngle={-Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default DeveloperDesk;
