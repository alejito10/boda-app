import React from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup,Tooltip } from "react-leaflet";
import '../maps/maps.css'

class MapView extends React.Component {
	render() {
        const styleMap = { width: "80%", height: "80vh" };
        const position = [40.6837789, -3.6501037];
		return (
			<div className="mapa-container">
				<MapContainer
					style={styleMap}
					center={[40.6837789, -3.6501037]}
					zoom={13}
				>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
					<Marker position={position}>
						<Popup>
							<a href="https://www.google.com/maps/place/Finca+Valquijancho+de+Araceli/@40.6837789,-3.6501037,15z/data=!4m5!3m4!1s0x0:0x149f6134cfa2233f!8m2!3d40.6837789!4d-3.6501037">Como llegar</a>
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		);
	}
}
export default MapView;