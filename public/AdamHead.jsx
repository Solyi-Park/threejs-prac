/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 adamHead.gltf 
ExporterVersion: 2.2.0
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function AdamHead(props) {
  const { nodes, materials } = useGLTF("/adamHead.gltf");
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={100}>
        <group position={[-0.003, -0.012, -0.008]} rotation={[-1.571, 0, 0]}>
          <mesh
            geometry={nodes["node_Eye_L_LowerEyelid_-5732"].geometry}
            material={materials["08 - Default"]}
            rotation={[-0.307, 0, Math.PI]}
          >
            <mesh
              geometry={nodes["node_Eye_L_EyelidSegment_08_-5828"].geometry}
              material={materials["No Name"]}
              rotation={[-0.307, 0, -Math.PI]}
            />
            <mesh
              geometry={nodes["node_Eye_L_EyelidSegment_15_-5830"].geometry}
              material={materials["No Name"]}
              rotation={[-0.307, 0, -Math.PI]}
            />
          </mesh>
          <mesh
            geometry={nodes["node_Eye_L_Sclera_-5734"].geometry}
            material={materials["09 - Default"]}
            rotation={[-0.001, 0.013, 0.001]}
          >
            <mesh
              geometry={nodes["node_Eye_L_Lens_-5962"].geometry}
              material={materials["15 - Default"]}
              rotation={[0, 0, Math.PI]}
              scale={1.131}
            />
          </mesh>
          <mesh
            geometry={nodes["node_Eye_L_Side1_-5736"].geometry}
            material={materials["09 - Default"]}
            position={[-0.001, 0, 0]}
            rotation={[Math.PI, 1.57, 0]}
          />
          <mesh
            geometry={nodes["node_Eye_L_Side2_-5738"].geometry}
            material={materials["09 - Default"]}
            position={[0.001, 0, 0]}
            rotation={[0, -1.57, 0]}
          />
          <mesh
            geometry={nodes["node_Eye_L_UpperEyelid_-5740"].geometry}
            material={materials["08 - Default"]}
            rotation={[0.325, 0, 0]}
          >
            <mesh
              geometry={nodes["node_Eye_L_EyelidSegment_00_-5772"].geometry}
              material={materials["No Name"]}
              rotation={[-0.325, 0, 0]}
            />
            <mesh
              geometry={nodes["node_Eye_L_EyelidSegment_07_-5774"].geometry}
              material={materials["No Name"]}
              rotation={[-0.325, 0, 0]}
            />
          </mesh>
        </group>
        <group position={[0.003, -0.012, -0.008]} rotation={[-1.571, 0, 0]}>
          <mesh
            geometry={nodes["node_Eye_R_LowerEyelid_-5722"].geometry}
            material={materials["08 - Default"]}
            rotation={[-0.307, 0, Math.PI]}
          >
            <mesh
              geometry={nodes["node_Eye_R_EyelidSegment_08_-5854"].geometry}
              material={materials["No Name"]}
              rotation={[-0.307, 0, -Math.PI]}
            />
            <mesh
              geometry={nodes["node_Eye_R_EyelidSegment_15_-5856"].geometry}
              material={materials["No Name"]}
              rotation={[-0.307, 0, -Math.PI]}
            />
          </mesh>
          <mesh
            geometry={nodes["node_Eye_R_Sclera_-5724"].geometry}
            material={materials["09 - Default"]}
            rotation={[-0.001, -0.032, 0]}
          >
            <mesh
              geometry={nodes["node_Eye_R_Lens_-5942"].geometry}
              material={materials["15 - Default"]}
              rotation={[0, 0, Math.PI]}
              scale={1.131}
            />
          </mesh>
          <mesh
            geometry={nodes["node_Eye_R_Side1_-5726"].geometry}
            material={materials["09 - Default"]}
            position={[-0.001, 0, 0]}
            rotation={[Math.PI, 1.57, 0]}
          />
          <mesh
            geometry={nodes["node_Eye_R_Side2_-5728"].geometry}
            material={materials["09 - Default"]}
            position={[0.001, 0, 0]}
            rotation={[0, -1.57, 0]}
          />
          <mesh
            geometry={nodes["node_Eye_R_UpperEyelid_-5730"].geometry}
            material={materials["08 - Default"]}
            rotation={[0.325, 0, 0]}
          >
            <mesh
              geometry={nodes["node_Eye_R_EyelidSegment_00_-5890"].geometry}
              material={materials["No Name"]}
              rotation={[-0.325, 0, 0]}
            />
            <mesh
              geometry={nodes["node_Eye_R_EyelidSegment_07_-5892"].geometry}
              material={materials["No Name"]}
              rotation={[-0.325, 0, 0]}
            />
          </mesh>
        </group>
        <group position={[0, -0.001, -0.003]} rotation={[3.037, 1.57, 0]}>
          <mesh
            geometry={
              nodes.mesh_Adam_BloodyHeadBracket_10374Adam_BloodyHeadBracket
                .geometry
            }
            material={materials.Adam_head_rubber}
          />
          <mesh
            geometry={
              nodes.mesh_Adam_BloodyHeadBracket_10374Adam_BloodyHeadBracket_1
                .geometry
            }
            material={materials.Adam_head_rubber}
          />
        </group>
        <mesh
          geometry={nodes["node_Adam_monitor_back_-5608"].geometry}
          material={materials.Adam_monitors}
          position={[0, -0.001, -0.003]}
          rotation={[3.037, 1.57, 0]}
        />
        <mesh
          geometry={nodes["node_cables_-5610"].geometry}
          material={materials.Adam_head_rubber}
          position={[0, 0.004, 0.163]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_L_Blend_00_-5612"].geometry}
          material={materials["08 - Default"]}
          position={[-0.003, -0.013, -0.009]}
          rotation={[1.569, -0.013, -2.667]}
        />
        <mesh
          geometry={nodes["node_Eye_L_Blend_01_-5614"].geometry}
          material={materials["08 - Default"]}
          position={[-0.003, -0.013, -0.009]}
          rotation={[1.569, -0.013, -1.62]}
        />
        <mesh
          geometry={nodes["node_Eye_L_Blend_02_-5616"].geometry}
          material={materials["08 - Default"]}
          position={[-0.003, -0.013, -0.008]}
          rotation={[1.569, -0.013, -0.573]}
        />
        <mesh
          geometry={nodes["node_Eye_L_Blend_03_-5618"].geometry}
          material={materials["08 - Default"]}
          position={[-0.003, -0.013, -0.008]}
          rotation={[1.569, -0.013, 0.474]}
        />
        <mesh
          geometry={nodes["node_Eye_L_Blend_04_-5620"].geometry}
          material={materials["08 - Default"]}
          position={[-0.003, -0.013, -0.008]}
          rotation={[1.569, -0.013, 1.522]}
        />
        <mesh
          geometry={nodes["node_Eye_L_Blend_05_-5622"].geometry}
          material={materials["08 - Default"]}
          position={[-0.003, -0.013, -0.009]}
          rotation={[1.569, -0.013, 2.569]}
        />
        <mesh
          geometry={nodes["node_Eye_L_BlendBase_-5624"].geometry}
          material={materials["08 - Default"]}
          position={[-0.003, -0.013, -0.008]}
          rotation={[1.569, -0.013, 3.141]}
        />
        <mesh
          geometry={nodes["node_Eye_L_BlendScrew_00_-5626"].geometry}
          material={materials["09 - Default"]}
          position={[-0.003, -0.013, -0.009]}
          rotation={[1.569, -0.013, 3.141]}
        />
        <mesh
          geometry={nodes["node_Eye_L_BlendScrew_01_-5628"].geometry}
          material={materials["09 - Default"]}
          position={[-0.003, -0.013, -0.008]}
          rotation={[1.569, -0.013, -1.048]}
        />
        <mesh
          geometry={nodes["node_Eye_L_BlendScrew_02_-5630"].geometry}
          material={materials["09 - Default"]}
          position={[-0.003, -0.013, -0.009]}
          rotation={[1.569, -0.013, -2.095]}
        />
        <mesh
          geometry={nodes["node_Eye_L_BlendScrew_03_-5632"].geometry}
          material={materials["09 - Default"]}
          position={[-0.003, -0.013, -0.008]}
          rotation={[1.569, -0.013, -0.001]}
        />
        <mesh
          geometry={nodes["node_Eye_L_BlendScrew_04_-5634"].geometry}
          material={materials["09 - Default"]}
          position={[-0.003, -0.013, -0.008]}
          rotation={[1.569, -0.013, 1.047]}
        />
        <mesh
          geometry={nodes["node_Eye_L_BlendScrew_05_-5636"].geometry}
          material={materials["09 - Default"]}
          position={[-0.003, -0.013, -0.009]}
          rotation={[1.569, -0.013, 2.094]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_01_-5638"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.571, 0, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_02_-5640"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.571, 0, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_03_-5642"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.554, 0.005, -0.001]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_04_-5644"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.553, -0.005, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_05_-5646"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.571, 0, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_06_-5648"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.571, 0, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_09_-5650"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.739, 0.003, -0.004]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_10_-5652"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.739, 0.005, -0.002]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_11_-5654"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.74, -0.001, 0.001]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_12_-5656"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.74, -0.001, 0.001]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_13_-5658"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.739, 0, -0.001]}
        />
        <mesh
          geometry={nodes["node_Eye_L_EyelidSegment_14_-5660"].geometry}
          material={materials["No Name"]}
          position={[-0.003, -0.012, -0.008]}
          rotation={[-1.739, -0.001, 0.002]}
        />
        <mesh
          geometry={nodes["node_Eye_R_Blend_00_-5664"].geometry}
          material={materials["08 - Default"]}
          position={[0.003, -0.013, -0.009]}
          rotation={[1.569, 0.032, -2.666]}
        />
        <mesh
          geometry={nodes["node_Eye_R_Blend_01_-5666"].geometry}
          material={materials["08 - Default"]}
          position={[0.003, -0.013, -0.009]}
          rotation={[1.569, 0.032, -1.619]}
        />
        <mesh
          geometry={nodes["node_Eye_R_Blend_02_-5668"].geometry}
          material={materials["08 - Default"]}
          position={[0.003, -0.013, -0.008]}
          rotation={[1.569, 0.032, -0.572]}
        />
        <mesh
          geometry={nodes["node_Eye_R_Blend_03_-5670"].geometry}
          material={materials["08 - Default"]}
          position={[0.003, -0.013, -0.008]}
          rotation={[1.569, 0.032, 0.475]}
        />
        <mesh
          geometry={nodes["node_Eye_R_Blend_04_-5672"].geometry}
          material={materials["08 - Default"]}
          position={[0.003, -0.013, -0.008]}
          rotation={[1.569, 0.032, 1.523]}
        />
        <mesh
          geometry={nodes["node_Eye_R_Blend_05_-5674"].geometry}
          material={materials["08 - Default"]}
          position={[0.003, -0.013, -0.009]}
          rotation={[1.569, 0.032, 2.57]}
        />
        <mesh
          geometry={nodes["node_Eye_R_BlendBase_-5676"].geometry}
          material={materials["08 - Default"]}
          position={[0.003, -0.013, -0.008]}
          rotation={[1.569, 0.032, -3.141]}
        />
        <mesh
          geometry={nodes["node_Eye_R_BlendScrew_00_-5678"].geometry}
          material={materials["09 - Default"]}
          position={[0.003, -0.013, -0.009]}
          rotation={[1.569, 0.032, -3.141]}
        />
        <mesh
          geometry={nodes["node_Eye_R_BlendScrew_01_-5680"].geometry}
          material={materials["09 - Default"]}
          position={[0.003, -0.013, -0.008]}
          rotation={[1.569, 0.032, -1.047]}
        />
        <mesh
          geometry={nodes["node_Eye_R_BlendScrew_02_-5682"].geometry}
          material={materials["09 - Default"]}
          position={[0.003, -0.013, -0.009]}
          rotation={[1.569, 0.032, -2.094]}
        />
        <mesh
          geometry={nodes["node_Eye_R_BlendScrew_03_-5684"].geometry}
          material={materials["09 - Default"]}
          position={[0.003, -0.013, -0.008]}
          rotation={[1.569, 0.032, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_R_BlendScrew_04_-5686"].geometry}
          material={materials["09 - Default"]}
          position={[0.003, -0.013, -0.008]}
          rotation={[1.569, 0.032, 1.048]}
        />
        <mesh
          geometry={nodes["node_Eye_R_BlendScrew_05_-5688"].geometry}
          material={materials["09 - Default"]}
          position={[0.003, -0.013, -0.009]}
          rotation={[1.569, 0.032, 2.095]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_01_-5690"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.571, 0, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_02_-5692"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.571, 0, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_03_-5694"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.559, 0.003, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_04_-5696"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.55, -0.006, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_05_-5698"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.571, 0, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_06_-5700"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.571, 0, 0]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_09_-5702"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.739, 0.003, -0.004]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_10_-5704"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.739, 0.005, -0.002]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_11_-5706"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.741, -0.001, 0.001]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_12_-5708"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.74, -0.001, 0.001]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_13_-5710"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.739, 0, -0.001]}
        />
        <mesh
          geometry={nodes["node_Eye_R_EyelidSegment_14_-5712"].geometry}
          material={materials["No Name"]}
          position={[0.003, -0.012, -0.008]}
          rotation={[-1.739, -0.001, 0.002]}
        />
        <group position={[0, -0.001, -0.003]} rotation={[3.037, 1.571, 0]}>
          <mesh
            geometry={nodes.mesh_mesh_Adam_mask_10520mesh_Adam_mask.geometry}
            material={materials.Adam_mask}
          />
          <mesh
            geometry={nodes.mesh_mesh_Adam_mask_10520mesh_Adam_mask_1.geometry}
            material={materials.Adam_Mask_metal}
          />
        </group>
        <group position={[0, 0.004, 0.163]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.mesh_mesh_Adam_spine_10522mesh_Adam_spine.geometry}
            material={materials.Adam_Torso_metal}
          />
          <mesh
            geometry={
              nodes.mesh_mesh_Adam_spine_10522mesh_Adam_spine_1.geometry
            }
            material={materials.Adam_Torso_plastic}
          />
        </group>
        <group position={[0, 0.004, 0.163]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.mesh_Object001_10524Object001.geometry}
            material={materials.Adam_Torso_metal}
          />
          <mesh
            geometry={nodes.mesh_Object001_10524Object001_1.geometry}
            material={materials.Adam_Torso_plastic}
          />
          <mesh
            geometry={nodes.mesh_Object001_10524Object001_2.geometry}
            material={materials.Adam_Torso_rubber}
          />
          <mesh
            geometry={nodes.mesh_Object001_10524Object001_3.geometry}
            material={materials.Adam_head_metal}
          />
          <mesh
            geometry={nodes.mesh_Object001_10524Object001_4.geometry}
            material={materials.Adam_head_plastic}
          />
          <mesh
            geometry={nodes.mesh_Object001_10524Object001_5.geometry}
            material={materials.Adam_head_metal}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/adamHead.gltf");
