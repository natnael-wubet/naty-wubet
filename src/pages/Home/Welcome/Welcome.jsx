import styles from "./Welcome.module.css";
import BioMe from "../BioMe";
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
					<div className="bg-gray-800 shadow-lg mt-12 pb-10 rounded-lg p-2 max-w-lg relative">
						<div className="m-0 pl-4 pr-4 pb-6">
							<h2 className="flex text-xl font-bold text-gray-800">
								<div className="relative p-1 pt-2">
									<h1 className="font-mono text-white text-2xl whitespace-nowrap overflow-hidden border-r-4 border-white animate-typewriter w-full">
										Hi, I'm Natnael Wubet!
									</h1>
								</div>
							</h2>
							<p className="text-gray-300 mb-6">
								I am a versatile software, website, and application developer
								with 11 years of experience across various technologies and 5
								years experiance in work. i am self taught but also took cources
								afterwards to gain more knowledge. Lets dive in to know me more
								↓
							</p>
						</div>
						<Scrollanim/>
					</div>
				</div>
			</>
		);
	};
	return (
		<>
			<div className={styles.parent}>
				<ParallaxView WelcomeText={welcomeText} WelcomeCard={Statue} Bio={BioMe} />
				
			</div>
		</>
	);
}
const Scrollanim = () => {
return  <div className="text-center relative"><div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    {/* Additional Arrow Icon for Better Scroll Indication */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400 animate-bounce mt-2" // Adjust size and spacing
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                </div>

}
