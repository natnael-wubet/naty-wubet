import styles from "./Welcome.module.css";
import { useState, useEffect } from "react";

import React from "react";
//import { useDispatch, useSelector } from "react-redux";

import Statue from "../Statue";
import ParallaxView from "./ParallaxView";
export default function Welcome() {
	const welcomeText = () => {
		return (
			<>
				<div className="flex h-screen items-center w-1/2 justify-center ">
					<div className="  bg-white ml-4 top:2 dark:bg-gray-900 bg-gray rounded-lg shadow-lg overflow-hidden">
						<div className="m-0 pl-4 pr-4 pb-6">
							<h2 className="flex text-xl font-bold text-gray-800">
								<div className="relative p-1 pt-2">
									<h1 className="font-mono text-white text-2xl whitespace-nowrap overflow-hidden border-r-4 border-white animate-typewriter w-full">
										Hi, I'm Natnael Wubet!
									</h1>
								</div>
							</h2>
							<p className="mt-2 text-gray-600">
								I am a versatile software, website, and application developer
								with 11 years of experience across various technologies and 5 years experiance in work. i am self taught but also took cources afterwards to gain more knowledge. Lets dive in to know me more ↓ 
							</p>
						</div>
						<div className="flex justify-between p-4 border-t">
							<button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
								Explore
							</button>
							<button className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</>
		);
	};
	return (
		<>
			<div className={styles.parent}>
				<ParallaxView WelcomeText={welcomeText} WelcomeCard={Statue} />
			</div>
		</>
	);
}
