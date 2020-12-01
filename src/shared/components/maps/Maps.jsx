import React from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup,Tooltip } from "react-leaflet";
import '../maps/maps.css'

class MapView extends React.Component {
	render() {
        const styleMap = { width: "50%", height: "50vh" };
        const position = [40.6837789, -3.6501037];
		return (
			<div className='mapa-container'>
				<MapContainer
				style={styleMap}
				center={[40.6837789, -3.6501037]}
				zoom={13}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Marker position={position} />
			</MapContainer>
			</div>
			
		);
	}
}
export default MapView;