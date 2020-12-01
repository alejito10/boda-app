import React from 'react'
import MapView from "../../shared/components/maps/Maps";
import './donde.css'

export function Donde() {
    return (
			<div>
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
							Aunque si preferís ir en vuestro propio coche,la finca Valquijancho tiene un parking exclusivo para los invitados de la boda.
                            <br/>
							Os dejamos la ubicación y algo de información acerca del sitio.
						</p>
					</div>
				</div>
				<MapView/>
			</div>
		);
}
