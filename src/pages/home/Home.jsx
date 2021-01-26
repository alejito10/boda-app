import React from "react";
import { CuentaAtras } from "../../shared/components/cuentaAtras/CuentaAtras";
import "./home.css";
import { Helmet } from "react-helmet";

export function Home() {
	return (
		<main>
			<Helmet>
				<title>Boda Alex y Natalia</title>
				<meta
					name="description"
					content="Pagina de inicio de la boda de Alejandro y Natalia, donde encontraras una breve descripción de la ceremonia y una cuenta tras hasta la fecha de la boda, navegando encontraras un formulario para declarar alergias o preferencia en la comida y si vas a utilizar el servicio de autobuses puesto por los novios. En la pagina de donde dormir encontraras múltiples hoteles donde poder reservar una habitación."
				/>
			</Helmet>
			<div className="countdown">
				<CuentaAtras />
			</div>
			<hr />
			<div className="texto">
				<p>
					¡Hola! Bienvenidos a nuestra web de boda, navegando podréis encontrar
					todo lo relacionado con la celebración que estamos
					<br />
					preparando. Sigue leyendo y conoce un poquito de nuestra historia.
				</p>
			</div>
		</main>
	);
}
