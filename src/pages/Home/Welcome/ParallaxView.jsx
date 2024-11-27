import layer1 from "../../../assets/bg/1.png";
import layer2 from "../../../assets/bg/2.png";
import layer3 from "../../../assets/bg/3.png";
import layer4 from "../../../assets/bg/4.png";
import layer5 from "../../../assets/bg/5.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import styles from "./Welcome.module.css";

export default function ParallaxView({ WelcomeText }) {
	const factor = 1.8;
	return (
		<div className={"w-full h-full"}>
			<Parallax pages={2}>
				<ParallaxLayer
					offset={0}
					speed={0.1}
					factor={factor}
					style={{
						backgroundImage: `url(${layer5})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></ParallaxLayer>

				<ParallaxLayer offset={0} speed={0.005} factor={factor}>
					<WelcomeText />
				</ParallaxLayer>
				<ParallaxLayer
					offset={0}
					speed={0.4}
					factor={factor}
					style={{
						backgroundImage: `url(${layer4})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={0.6}
					factor={factor}
					style={{
						backgroundImage: `url(${layer3})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={0.85}
					factor={factor}
					style={{
						backgroundImage: `url(${layer2})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></ParallaxLayer>
				<ParallaxLayer
					offset={0}
					speed={0.99}
					factor={factor}
					style={{
						backgroundImage: `url(${layer1})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={0.99}
					factor={factor}
					className="h-screen w-full h-[70vh] bg-gradient-to-b from-blue-200 to-purple-500"
				></ParallaxLayer>
				<ParallaxLayer
					offset={1}

					factor={factor}
					speed={2.2} // Adjust speed for desired effect
					style={{
						backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white overlay
						opacity: 0.8, // Adjust opacity as needed
					}}
				>
					{/* You can add content here if needed */}
					<div className="flex items-center justify-center h-full">
						<h1 className="text-3xl font-bold text-black">
							Welcome to My Portfolio
						</h1>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
