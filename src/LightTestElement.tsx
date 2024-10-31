import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Environment, useHelper, useTexture } from "@react-three/drei";

export default function LightTestElement() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

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
      item.position.x = (index % (meshLenght! / 2)) * 2 - 2;

      if (index > meshLenght! / 2) {
        item.position.z = 2;
      }
    });
  }, []);

  const directLight = useRef<THREE.DirectionalLight>(null!);
  useHelper(directLight, THREE.DirectionalLightHelper);

  const spotLight = useRef<THREE.SpotLight>(null!);
  useHelper(spotLight, THREE.SpotLightHelper);

  return (
    <>
      {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}
      {/* <ambientLight color={"blue"} intensity={1} /> */}
      {/* <hemisphereLight args={["blue", "yellow", 2]} /> */}

      {/* <directionalLight
        ref={directLight}
        color={"#fff"}
        position={[0, 5, 0]}
        intensity={2}
        target-position={[0, 0, 2]}
      /> */}

      {/* <pointLight
        color={"#fff"}
        position={[0, 0, 2]}
        intensity={10} // 강도
        distance={5} // 거리
      /> */}

      <spotLight
        ref={spotLight}
        color={"#fff"}
        position={[0, 5, 0]}
        intensity={300} // 강도
        distance={10} // 거리
        angle={THREE.MathUtils.degToRad(40)} // spotLight의 각도를 설정하는 옵션
        target-position={[0, 0, 0]} // 빛을 받는 타겟의 포지션 옵션
        penumbra={0.5} // 빛의 가장자리를 번지게 하는 옵션
      />

      <Environment files={"./images/hdr1.hdr"} background blur={0.1} />

      {/* 배경 깔기 */}
      <mesh rotation-x={[THREE.MathUtils.degToRad(-90)]} position-y={-1}>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial side={THREE.DoubleSide} color={"grey"} />
      </mesh>

      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2]} />
        <meshBasicMaterial color="green" visible={false} />
      </mesh>

      <group ref={groupRef}>
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
            thickness={0.5} // 유리의 두께 조절
            ior={2.33} // 굴절 유리 옵션
          />
        </mesh>

        <mesh>
          <meshToonMaterial gradientMap={toon} color="skyblue" />
        </mesh>
      </group>
    </>
  );
}
