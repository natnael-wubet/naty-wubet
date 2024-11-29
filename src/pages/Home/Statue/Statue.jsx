import styles from "./Statue.module.css";
import { useState,useRef, useEffect } from "react";


import React from "react";
//import { useDispatch, useSelector } from "react-redux";

import p5 from 'p5';
import ForStatue from '../../../threeSketches/ForStatue';

export default function Statue() {
	return (
		<>
			<div className={styles.parent}>
				<div className="flex h-screen">
					{/* Left empty space */}
					<div className="w-1/2"></div>

					{/* Right half div */}
					<div id="canvas-container" className="w-1/2 flex items-center justify-center ">
						<ForStatue />
					</div>
				</div>
			</div>
		</>
	);
}
