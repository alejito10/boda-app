import React from 'react'
import { Link } from "react-router-dom";
import './menu.css'

export function Menu() {
    return (
        <nav className="c-menu">
				<Link className="c-menu__link" to="/">Inicio</Link>
				<Link className="c-menu__link" to="/alergias">Alergias o intolerancias</Link>
				<Link className="c-menu__link" to="/donde">Celebracion</Link>
				<Link className="c-menu__link" to="/dormir">Dónde dormir</Link>
			</nav>
    )
}
