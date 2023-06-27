import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Loader from "./Loader";
import { OrbitControls } from "@react-three/drei";
import useJoystickEvent from "../hooks/useJoystickEvent";
import * as THREE from "three";

const ModelRender = () => {
  // const { joyStickEvents } = useJoystickEvent();
  const meshRef = useRef();
  // console.log(joyStickEvents, "joyStickEvents");

  const gltf = useLoader(GLTFLoader, "/stark-tower.gltf");
  const MeshModel = () => {
    const [pos, setPos] = useState([0, -4, -2]);
    // useEffect(() => {
    //   setPos([pos[0], pos[1], pos[2] + joyStickEvents.x]);
    //   meshRef.current?.position;
    // console.log("==>", meshRef.current?.position.z);
    if (meshRef.current) {
      //   meshRef.current?.position.z += joyStickEvents.y;
      // meshRef.current.position = new THREE.Vector3(
      //   meshRef.current.position.x,
      //   meshRef.current.position.y,
      //   meshRef.current.position.z + joyStickEvents.y
      // );
      // setPos([
      //   meshRef.current.position.x,
      //   meshRef.current.position.y,
      //   (meshRef.current.position.z += joyStickEvents.y),
      // ]);
    }
    // }, [joyStickEvents]);
    return (
      <mesh ref={meshRef} position={pos}>
        <primitive scale={3} object={gltf.scene} />
      </mesh>
    );
  };
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }} on>
      <ambientLight />
      <MeshModel />
      <OrbitControls />
    </Canvas>
  );
};

export default ModelRender;
