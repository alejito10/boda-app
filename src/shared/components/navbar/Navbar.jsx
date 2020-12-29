import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "./NavbarStyles";

export function Navbar({ open }) {
	return (
		<NavbarWrapper open={open}>
			<Link to="/">Inicio</Link>
			<Link to="alergias">Alergias o intolerancias</Link>
			<Link to="donde">Celebracion</Link>
			<Link to="dormir">Dónde dormir</Link>
		</NavbarWrapper>
	);
}

