import { Canvas } from "@react-three/fiber";

export default function CustomCanvas({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />

      {/* 3D모델 jsx컴포넌트 */}
      {children}
    </Canvas>
  );
}
