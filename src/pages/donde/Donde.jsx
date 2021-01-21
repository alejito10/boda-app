import React from "react";
import { Helmet } from "react-helmet";
import MapView from "../../shared/components/maps/Maps";
import "./donde.css";

export function Donde() {
	return (
		<main>
			<Helmet>
				<title>Celebracion || Alex y Natalia</title>
				<meta
					name="description"
					content="Detalles de la celebración y mapa de donde se encuentra la finca donde se hace la boda "
				/>
			</Helmet>
			<div className="c-celebracion">
				<h2>¿Cómo llegar?</h2>

				<div className="c-celebracion">
					<p>
						La mejor manera de llegar es subirse a uno de los autobuses que
						<br />
						pondremos para que no os tengáis que preocupar de nada más que de
						disfrutar. A continuación os dejamos los itinerarios:
					</p>
				</div>
				<div className="c-celebracion">
					<p>
						Aunque si preferís ir en vuestro propio coche,la finca Valquijancho
						tiene un parking exclusivo para los invitados de la boda.
						<br />
						Os dejamos la ubicación y algo de información acerca del sitio.
						Pincha en el icono del mapa para que te lleve a la celebracion.
					</p>
				</div>
			</div>
			<MapView />
		</main>
	);
}
