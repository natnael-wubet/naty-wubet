import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import React from "react";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function SocialMenu() {
	return (
		<>
			{/* Profile dropdown */}
			<Menu as="div" className="relative ml-3">
				<div>
					<MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
						<span className="absolute -inset-1.5" />
						<span className="sr-only">Open user menu</span>

<Icon icon="line-md:phone" 
                className="text-blue-500 w-8 h-8 bg-transparent" />
					</MenuButton>
				</div>
				<MenuItems
					transition
					className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
				>
					<MenuItem>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
						>
							Your Profile
						</a>
					</MenuItem>
					<MenuItem>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
						>
							Settings
						</a>
					</MenuItem>
					<MenuItem>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
						>
							Sign out
						</a>
					</MenuItem>
				</MenuItems>
			</Menu>
		</>
	);
}
