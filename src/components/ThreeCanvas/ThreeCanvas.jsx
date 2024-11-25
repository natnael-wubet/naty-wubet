
import React from 'react';
import { Canvas } from '@react-three/fiber';

const ThreeCanvas = () => {
    return (
        <Canvas>
            {/* Add lights, camera, and 3D objects here */}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={'orange'} />
            </mesh>
        </Canvas>
    );
};

export default ThreeCanvas;
