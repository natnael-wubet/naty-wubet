
const myP5Sketch = (p) => {
    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
    };

    p.draw = () => {
        p.background(100);
        // Add your drawing code here (e.g., shapes, animations)
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
};

export default myP5Sketch;
