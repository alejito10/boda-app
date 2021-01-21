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
					content="Home de la boda con una cuenta atras y un descripcion de que lo te vas a encontrar dentro de la pagina de la boda"
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
