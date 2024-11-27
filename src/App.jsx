import { useState } from "react";

import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from "./components/Navbar";
const App = () => {
	return (
		<div className="app-container">
			<Router>
				<Navbar />
<div className="h-screen bg-gradient-to-b from-blue-900 to-purple-500">
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/about" element={<About />} />
						{/* Add more routes as needed */}
					</Routes>
				</div>
			</Router>
		</div>
	);
};

export default App;
