import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

import React from "react";
//import { useDispatch, useSelector } from "react-redux";
import SocialMenu from "./SocialMenu";
import Logo from "./Logo";
import Pagebuttons from "./Pagebuttons";
const Navbar = () => {
	return (
		<nav className="navbar bg-transparent p-2 flex justify-between items-center fixed w-full z-10">
			<Logo />
			<Pagebuttons />
		</nav>
	);
};
export default Navbar;
