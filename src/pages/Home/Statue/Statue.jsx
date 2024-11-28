import styles from "./Statue.module.css";
import { useState,useRef, useEffect } from "react";

import React from "react";
//import { useDispatch, useSelector } from "react-redux";

import p5 from 'p5';
import forStatue from '../../../sketches/forStatue';

const P5Canvas = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const sketch = new p5(forStatue, canvasRef.current);
        return () => {
            sketch.remove(); // Cleanup on unmount
        };
    }, []);

    return <div ref={canvasRef}></div>;
}
export default function Statue() {
	return (
		<>
			<div className={styles.parent}>
				<div className="cursor-none focus:cursor-none hover:bg-blue-500 flex h-screen">
					{/* Left empty space */}
					<div className="w-1/2"></div>

					{/* Right half div */}
					<div id="canvas-container" className="w-1/2 flex items-center justify-center cursor-none">
						<P5Canvas/>
					</div>
				</div>
			</div>
		</>
	);
}
