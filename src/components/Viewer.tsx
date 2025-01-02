import * as THREE from "three";
import { useEffect, useRef } from "react";

export default function Viewer() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  console.log("mountRef", mountRef);

  useEffect(() => {
    if (!mountRef.current) return;

    const { clientWidth: width, clientHeight: height } = mountRef.current;
    console.log("clientWidth", width);
    console.log("clientHeight", height);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    console.log("renderer", renderer);
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animate);

    mountRef.current?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
  }, []);
  return <div className="w-full h-full" ref={mountRef} />;
}
