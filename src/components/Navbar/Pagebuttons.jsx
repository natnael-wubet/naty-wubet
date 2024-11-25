import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import React from "react";
//import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom'; 
export default function Pagebuttons() {
	return (
		<>
			<div className="flex space-x-2">
				<Link
					to="/"
					className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 text-sm rounded transition duration-300"
				>
					Home
				</Link>
				<Link
					to="/about"
					className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 text-sm rounded transition duration-300"
				>
					About
				</Link>
			</div>
		</>
	);
}
