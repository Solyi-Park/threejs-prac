import { AdamHead } from "../../public/AdamHead";

export default function Element3d() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[0, 5, 5]} intensity={1} />
      <AdamHead />
    </>
  );
}
