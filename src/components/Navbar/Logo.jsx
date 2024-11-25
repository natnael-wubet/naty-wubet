import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import React from "react";
//import { useDispatch, useSelector } from "react-redux";
import LogoImage from "../../assets/profile.jpg";

export default function Logo() {
	return (
		<>
			<div className="logo">
				<img
					src={LogoImage}
					alt="Logo"
					className="h-12 w-12 rounded-full object-cover border-2 border-white"
				/>{" "}
				{/* Replace with your logo path */}
			</div>
		</>
	);
}
