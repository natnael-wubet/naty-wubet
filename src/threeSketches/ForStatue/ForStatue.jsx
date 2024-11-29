import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import styles from "./ForStatue.module.css";

import { OrbitControls,PerspectiveCamera , useGLTF } from "@react-three/drei";

import { Vector2, Vector3, Raycaster, Plane } from "three";

const Model = () => {
	const { scene } = useGLTF("/assets/statue.glb"); // Replace with your model's path

	const modelRef = useRef();
	const raycaster = new Raycaster();
	const mouse = new Vector2();

	// Create a plane geometry for raycasting
	const planeRef = useRef();

	// Use the Three.js context to get the camera
	const { camera } = useThree();

	useEffect(() => {
		if (modelRef.current) {
			modelRef.current.rotation.y = Math.PI; // Rotate 180 degrees to face the camera
		}
		const handleMouseMove = (event) => {
			// Calculate mouse position in normalized device coordinates
			// Calculate mouse position in normalized device coordinates
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = (event.clientY / window.innerHeight) * 2 - 1;

			// Calculate rotation angles based on mouse position
			const targetRotationX = (mouse.y * Math.PI) / 4; // Adjust multiplier for sensitivity
			const targetRotationY = (mouse.x * Math.PI) / 4; // Adjust multiplier for sensitivity

			// Set the rotation of the model
			modelRef.current.rotation.set(
				targetRotationX,
				targetRotationY + Math.PI,
				0,
			);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [mouse, camera]);

	return (
		<>
			<primitive ref={modelRef} object={scene} />
			{/* Create an invisible plane for raycasting */}
			<mesh
				ref={planeRef}
				visible={false}
				position={[0, 0, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
			>
				<planeGeometry args={[100, 100]} /> {/* Adjust size as needed */}
			</mesh>
		</>
	);
	// return <primitive object={scene} />;
};

const CircleBackground = () => {
	return (
<>
		<mesh position={[0, -1.8, -2]}> {/* Adjust Z position further back */}
			<circleGeometry args={[1.2, 15]} /> {/* Increased segments for smoothness */}
			<meshStandardMaterial color="orange" opacity={0.7} transparent />
		</mesh>
					<mesh position={[0, -1.8, -2]}> {/* Adjust Z position further back */}
			<circleGeometry args={[1.2, 8]} /> {/* Increased segments for smoothness */}
			<meshStandardMaterial color="orange" opacity={0.7} transparent />
		</mesh>

					<mesh position={[0, -1.8, -2]}> {/* Adjust Z position further back */}
			<circleGeometry args={[1.2, 10]} /> {/* Increased segments for smoothness */}
			<meshStandardMaterial color="orange" opacity={0.7} transparent />
		</mesh>

		</>
	);
};
const ForStatue = () => {
	return (
		<Canvas>
			{/* Add lights, camera, and 3D objects here */}
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
<CircleBackground />
			
			<Model />
			<OrbitControls enableZoom={true} />
			<PerspectiveCamera makeDefault position={[0, 1, 2]} fov={50} />
			

		</Canvas>
	);
};

export default ForStatue;
