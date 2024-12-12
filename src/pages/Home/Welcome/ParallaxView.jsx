import layer1 from "../../../assets/bg/1.png";

import bg1 from "../../../assets/bg1.webp";
import layer2 from "../../../assets/bg/2.png";
import layer3 from "../../../assets/bg/3.png";
import layer4 from "../../../assets/bg/4.png";
import layer5 from "../../../assets/bg/5.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import styles from "./Welcome.module.css";

export default function ParallaxView({ WelcomeText, WelcomeCard, Bio }) {
	const factor = 1.8;
	return (
		<div className={"w-full h-full"}>
			<Parallax pages={3}>
				<ParallaxLayer
					offset={0}
					speed={0}
					factor={factor}
					style={{
						backgroundImage: `url(${layer5})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></ParallaxLayer>

				<ParallaxLayer offset={0} speed={0.001} factor={factor}>
					<ParallaxLayer offset={0} speed={0} factor={factor}>
						<WelcomeText />
					</ParallaxLayer>
				</ParallaxLayer>
				<ParallaxLayer
					offset={0}
					speed={0.1}
					factor={factor}
					style={{
						backgroundImage: `url(${layer4})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></ParallaxLayer>

				<ParallaxLayer offset={0} speed={0.001} factor={factor}>
					<ParallaxLayer offset={0} speed={0.005} factor={factor}>
						<WelcomeCard />
					</ParallaxLayer>
				</ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={0.3}
					factor={factor}
					style={{
						backgroundImage: `url(${layer3})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={0.5}
					factor={factor}
					style={{
						backgroundImage: `url(${layer2})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></ParallaxLayer>
				{/*
				// <ParallaxLayer
				// 	offset={0.5}
				// 	speed={0.5}
				// 	factor={factor}
				// 	style={{
				// 		backgroundImage: `url(${layer1})`,
				// 		backgroundSize: "cover",
				// 		backgroundPosition: "center",
				// 	}}
				// ></ParallaxLayer>*/}
				<ParallaxLayer
					offset={1}
					factor={factor}
					speed={0.8} // Adjust speed for desired effect
					style={{

						backgroundImage: `url(${bg1})`,
						backgroundSize:"cover",
						height:"130vh",
						backgroundColor: "rgba(255, 255, 255, 1)", // Semi-transparent white overlay
					}}
				>
					<div style={{backdropFilter:"blur(10px)" ,width:"100vw",height:"130vh"}}>
					{/* You can add content here if needed */}
					<Bio />
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
