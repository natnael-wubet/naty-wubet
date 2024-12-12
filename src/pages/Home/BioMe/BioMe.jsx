import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import mypic from "../../../assets/myImage2.webp";
export default function BioMe() {
	return (
		<>
			{/* Left Side - Image */}

			<ParallaxLayer
				offset={0}
				speed={0}
				style={{
					backgroundImage: "url(your-image-url)",
					backgroundSize: "cover",
				}}
			>
				<h1 className="absolute top-10  text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
					About Me
				</h1>
			</ParallaxLayer>
			<ParallaxLayer
				offset={0.1}
				speed={0}
				style={{
					backgroundImage: "url(your-image-url)",
					backgroundSize: "cover",
				}}
			>
				<div className="flex w-1/2 items-center justify-center h-full relative">
					<img src={mypic} alt="Your Photo" className="w-full object-cover" />
				</div>
			</ParallaxLayer>

			<ParallaxLayer
				offset={0.6}
				speed={0.4}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "end",
				}}
			>
				<div className="flex flex-col space-y-4 w-1/2 p-8">
					<div className="bg-white p-4 rounded-lg shadow-lg">
						<h2 className="text-xl font-bold">Bio</h2>
						<p>
							Bio Highly seasoned programmer with 11 years of ​experience in web
							development, full stack, and ​various programming languages.
							Proficient in CSS, ​NodeJS, ReactJS, VueJS, Ionic, React Native,
							​MongoDB, Firebase, blockchain, and more. ​Pursuing creative
							interests in animation, video ​production, and YouTube content
							creation. ​Passionate about philosophy and physics. Let me know if
							you'd like me to make any ​adjustments!
						</p>
					</div>
					<div className="bg-white p-4 rounded-lg shadow-lg">
						<h2 className="text-xl font-bold">Who Am I</h2>
						<p>
							I'm a programmer with a passion for innovation ​and creativity.
							With 11 years of experience in web ​development, full stack, and
							various programming ​languages, I've built a reputation for
							delivering ​exceptional solutions. When I'm not coding, you ​can
							find me exploring the realms of philosophy, ​physics, or dabbling
							in animation and video ​production.
						</p>
					</div>
				</div>
			</ParallaxLayer>
		</>
	);
}
