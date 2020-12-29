import React from 'react'
import {CuentaAtras} from '../../shared/components/cuentaAtras/CuentaAtras'
import './home.css'

export function Home() {
    return (
			<div>
				<div className="countdown">
					<CuentaAtras />
				</div>
				<hr />
				<div className='texto'>
					<p>
						¡Hola! Bienvenidos a nuestra web de boda, navegando podréis
						encontrar todo lo relacionado con la celebración que estamos
						<br/>
						preparando. Sigue leyendo y conoce un poquito de nuestra historia.
					</p>
				</div>
			</div>
		);
}

