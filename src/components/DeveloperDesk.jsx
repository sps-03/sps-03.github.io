import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import DeveloperDeskScene from "./DeveloperDeskScene";

const CENTER = [0, 58, 78];

const DeveloperDesk = () => {
  return (
    <div className="h-80 w-full overflow-hidden rounded-lg bg-primary-shade sm:h-96 lg:h-[28rem]">
      <Canvas camera={{ position: [150, 208, 328], fov: 38 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[200, 300, 150]} intensity={2} />
        <directionalLight position={[-150, 200, 250]} intensity={1.2} />
        <pointLight position={[-100, 80, -50]} intensity={0.6} color="#0ea5e9" />
        <Suspense fallback={null}>
          <DeveloperDeskScene />
        </Suspense>
        <OrbitControls target={CENTER} enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default DeveloperDesk;
