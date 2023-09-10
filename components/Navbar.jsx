import React from "react";
import { Button } from "./Button";
import Menu from "./Menu";
import Link from "next/link";
const Navbar = () => {
	return (
		<>
			<div className="h-16 px-4 flex items-center lg:gap-72 border-b-2 border-secondary/40 border-[1px] justify-between  lg:w-full">
				<div className="md:hidden">
					<Menu />
				</div>
				<h1 className="p-[25px] font-montserrat font-bold text-lg">
					NEXUS
				</h1>
				<ul className="hidden md:flex md:gap-5  md:justify-between  md:h-full md:items-center md:text-[12px] md:font-montserrat md:font-bold">
					<li className="uppercase">
						<Link href="/">home</Link>
					</li>
					<li className="uppercase">
						<Link href="/">about</Link>
					</li>
					<li className="uppercase">
						<Link href="/">discover</Link>
					</li>
				</ul>
				<Button
					size="sm"
					className="font-bold py-30 px-10"
				>
					Login
				</Button>
			</div>
		</>
	);
};

export default Navbar;
