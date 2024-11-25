import styles from "./Welcome.module.css";
import { useState, useEffect } from "react";

import React from "react";
//import { useDispatch, useSelector } from "react-redux";

export default function Welcome() {
	return (
		<>
			<div className={styles.parent}>
				<div className="flex items-center justify-center h-screen ">
					<div className="relative">
						<h1 className="font-mono text-2xl whitespace-nowrap overflow-hidden border-r-4 border-black animate-typewriter">
							Hello, World!
						</h1>
						<span className="absolute right-0 animate-blink">|</span>{" "}
						{/* Blinking cursor */}
					</div>
				</div>
			</div>
		</>
	);
}
