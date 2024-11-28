const abs = (x) => {
	return (x < 0) * -x + (x > 0) * x;
};
import {statue} from "../../assets/statue.glb";
const myP5Sketch = (p) => {
	p.preload = () => {
		myModel = p.loadModel(
			"../../assets/statue.glb",
			true,
			(model) => {
				console.log("Model loaded successfully:", model);
			},
			(error) => {
				console.error("Failed to load model:", error);
			},
		);
	};
	p.setup = () => {
		p.createCanvas(window.innerWidth / 2, window.innerHeight);
		width_ = window.innerWidth / 2;

		height_ = window.innerHeight / 2;
		p.canvas.style.backgroundColor = "rgba(0, 0, 0, 0)";
	};
	let width_ = 0;

	let height_ = 0;
	let myModel;
	let mx = 0,
		my = 0;
	let dx = 1,
		dy = 1;

	p.draw = () => {
		// Clear the canvas while maintaining transparency
		p.clear(); // This makes every pixel on the canvas transparent
		// Add your drawing code here (e.g., shapes, animations)
		p.fill(255, 0, 0, 150); // Red color with some transparency
		mx += dx;
		my += dy;
		dx = 1 + (mx > p.mouseX) * -2;
		dx = (dx * Math.abs(mx - p.mouseX)) / (width_ / 4);
		dy = 1 + (my > p.mouseY) * -2;

		dy = (dy * Math.abs(my - p.mouseY)) / (height_ / 4);

		p.ellipse(mx, my, 15, 15); // Draw an ellipse at mouse position
		if (myModel) {
			p.rotateY(p.frameCount * 0.01); // Rotate the model for animation
			p.rotateX(p.frameCount * 0.01);
			p.model(myModel); // Display the loaded model
		} else {
			p.textSize(32);
			p.fill(0);
			p.text("Loading model...", -p.width / 2, -p.height / 2); // Show loading text
		}
		// Add your drawing code here (e.g., shapes, animations)
	};
};

export default myP5Sketch;
