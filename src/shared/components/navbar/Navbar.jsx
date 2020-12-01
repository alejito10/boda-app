import React from "react";
import { NavbarWrapper } from "./NavbarStyles";

export function Navbar({ open }) {
	return (
		<NavbarWrapper open={open}>
			<a href="/">Inicio</a>
			<a href="alergias">Alergias o intolerancias</a>
			<a href="donde">Celebracion</a>
			<a href="dormir">Dónde dormir</a>
		</NavbarWrapper>
	);
}

