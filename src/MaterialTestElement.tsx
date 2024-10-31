import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { useTexture } from "@react-three/drei";

export default function MaterialTestElement() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const controls = useControls({
    thickness: { value: 0.1, min: 0.1, max: 10, step: 0.1 },
  });

  const matcap1 = useTexture("./images/matcap1.jpg");
  const matcap2 = useTexture("./images/matcap2.jpg");
  const matcap3 = useTexture("./images/matcap3.jpg");
  const matcap4 = useTexture("./images/matcap4.jpg");

  const toon = useTexture("./images/threeTone.jpg");
  toon.minFilter = THREE.NearestFilter;
  toon.magFilter = THREE.NearestFilter;

  useEffect(() => {
    const meshLenght = groupRef.current?.children.length;

    groupRef.current?.children.map((item, index) => {
      item.geometry = meshRef.current?.geometry;
      item.position.x = (index % (meshLenght! / 2)) * 2 - 4;

      if (index > meshLenght! / 2) {
        item.position.z = 2;
      }
    });
  }, []);

  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2]} />
        <meshBasicMaterial color="green" visible={false} />
      </mesh>

      <group ref={groupRef}>
        <mesh position={[0, 0, 0]}>
          <meshBasicMaterial color="green" wireframe />
        </mesh>

        <mesh>
          <meshBasicMaterial
            color="yellow"
            visible
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={false}
          />
        </mesh>
        <mesh>
          <meshLambertMaterial
            color="red"
            visible
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={false}
            emissive={"blue"}
          />
        </mesh>

        <mesh>
          <meshPhongMaterial
            color="red"
            visible
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={false}
            emissive={"blue"}
            specular={"#fff"}
            shininess={50}
            flatShading={true}
          />
        </mesh>

        <mesh>
          <meshNormalMaterial />
        </mesh>

        <mesh>
          <meshStandardMaterial
            color="red"
            visible
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={false}
            emissive={"blue"}
            // flatShading={true}
            roughness={1} // 거칠기 정도를 조절하는 옵션
            metalness={0} // 금속성 정도를 조절하는 옵션
          />
        </mesh>

        <mesh>
          <meshPhysicalMaterial
            color="#fff"
            visible={true}
            transparent={true}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            roughness={0} // 거칠기 정도를 조절하는 옵션
            metalness={0} // 금속성 정도를 조절하는 옵션
            clearcoat={0} // 표면을 코팅하는 듯한 효과를 조절하는 옵션
            clearcoatRoughness={0} // 코팅 값의 거칠기를 조절하는 옵션
            //
            transmission={1} // 투명도 조절
            thickness={controls.thickness} // 유리의 두께 조절
            ior={2.33} // 굴절 유리 옵션
          />
        </mesh>

        <mesh>
          <meshDepthMaterial />
        </mesh>

        <mesh>
          <meshMatcapMaterial matcap={matcap1} flatShading={true} />
        </mesh>

        <mesh>
          <meshToonMaterial gradientMap={toon} color="skyblue" />
        </mesh>
      </group>
    </>
  );
}
