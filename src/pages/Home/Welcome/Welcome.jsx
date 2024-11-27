import styles from "./Welcome.module.css";
import { useState, useEffect } from "react";

import React from "react";
//import { useDispatch, useSelector } from "react-redux";

import ParallaxView from "./ParallaxView";
export default function Welcome() {
	const welcomeText = () => {
		return <>
			<div className="flex items-center justify-center h-screen ">
				<div className="relative p-5">
					<h1 className="font-mono text-white text-2xl whitespace-nowrap overflow-hidden border-r-4 border-black animate-typewriter">Hello there! I’m Natnael wubet.</h1>
					<span className="absolute right-0 text-white animate-blink">|</span>{" "}


				</div>
			</div>

		</>
	}
	return (
		<>
			<div className={styles.parent}>
				<ParallaxView WelcomeText={welcomeText} />
			</div>
		</>
	);
}
