import { Canvas } from "@react-three/fiber";
import Element3d from "./Element3d";

export default function CustomCanvas() {
  return (
    <Canvas>
      <Element3d />
    </Canvas>
  );
}
