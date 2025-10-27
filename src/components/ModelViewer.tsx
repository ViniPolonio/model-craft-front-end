import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Grid } from "@react-three/drei";
import { Suspense } from "react";

interface ModelViewerProps {
  fileName: string;
}

export const ModelViewer = ({ fileName }: ModelViewerProps) => {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-muted/30 rounded-xl overflow-hidden border-2 border-border shadow-soft">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            {/* Placeholder mesh - In a real scenario, you'd load the actual model */}
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.2} />
            </mesh>
          </Stage>
          <Grid
            args={[10, 10]}
            cellSize={0.5}
            cellThickness={0.5}
            cellColor="#6b7280"
            sectionSize={2}
            sectionThickness={1}
            sectionColor="#374151"
            fadeDistance={25}
            fadeStrength={1}
            followCamera={false}
            infiniteGrid
          />
          <OrbitControls makeDefault />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          Preview de: <span className="font-semibold text-foreground">{fileName}</span>
        </p>
      </div>
    </div>
  );
};
