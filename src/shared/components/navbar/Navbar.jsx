import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "./NavbarStyles";
import {debounce} from '../../utilities/helpers'

export function Navbar({ open }) {
	  const [prevScrollPos, setPrevScrollPos] = useState(0);
		const [visible, setVisible] = useState(true);

		const handleScroll = debounce(() => {
			const currentScrollPos = window.pageYOffset;

			setVisible(
				(prevScrollPos > currentScrollPos &&
					prevScrollPos - currentScrollPos > 70) ||
					currentScrollPos < 10
			);

			setPrevScrollPos(currentScrollPos);
		}, 100);

		useEffect(() => {
			window.addEventListener("scroll", handleScroll);

			return () => window.removeEventListener("scroll", handleScroll);
		}, [prevScrollPos, visible, handleScroll]);

		const navbarStyles = {
			position: "fixed",
			height: "60px",
			width: "100%",
			backgroundColor: "grey",
			transition: "top 0.6s",
			margin:'0'
		};
	return (
			<NavbarWrapper open={open} style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}>
				<Link to="/">Inicio</Link>
				<Link to="alergias">Formulario</Link>
				<Link to="donde">Celebracion</Link>
				<Link to="dormir">Dónde dormir</Link>
			</NavbarWrapper>
	);
}

