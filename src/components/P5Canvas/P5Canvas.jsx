// src/components/P5Canvas.js

import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import myP5Sketch from '../../sketches/myP5Sketch';

const P5Canvas = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const sketch = new p5(myP5Sketch, canvasRef.current);
        return () => {
            sketch.remove(); // Cleanup on unmount
        };
    }, []);

    return <div ref={canvasRef}></div>;
};

export default P5Canvas;
