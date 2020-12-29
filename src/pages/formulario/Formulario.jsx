import React from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";
import './formulario.css'

export function Formulario() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data,e) => {
			console.log("DATOS", data);
			axios.post("https://back-boda-app.herokuapp.com/new",data).then(res=>{
				//respuesta del servidor
				console.log(res);
				if(res.status===200){
					e.target.reset();
				}
			});
			
			
		};
    return (
			<div>
				<h2 className='subtitulo'>¿Alergias o intolerancias?</h2>
				<p className="texto-alergias">
					Queremos que disfrutéis de nuestro día al máximo y cómo os merecéis,
					así que si tenéis alguna alergia o intolerancia, 
					<br/>tendremos todo
					preparado para que no os tengáis que preocupar de nada.<br/> Sólo tenéis
					que rellenar el formulario a continuación y el staff de Valquijancho
					se encargará de todo.
				</p>
				<div className="c-formulario">
					<form onSubmit={handleSubmit(onSubmit)} className="b-form">
						<div className="c-contenido">
							<label htmlFor="name">
								<div>
									<span className="b-text-label">Nombre</span>
								</div>

								<input
									className="b-input"
									name="name"
									id="name"
									defaultValue=""
									ref={register({ required: true })}
									placeholder="Nombre"
								/>
								{errors.name && <span>Este campo es requerido</span>}
							</label>
						</div>
						<div className="c-contenido">
							<label htmlFor="email">
								<div>
									<span className="b-text-label">Email</span>
								</div>

								<input
									className="b-input"
									name="email"
									id="email"
									placeholder="...@gmail.com"
									ref={register({
										required: true,
										pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
									})}
								/>
								{errors.email && <span>Este campo es requerido</span>}
							</label>
						</div>
						<div className="c-contenido">
							<div>
								<span>Vegano/Vegetariano</span>
							</div>
							<select name="vegano" id="vegano" ref={register}>
								<option value="no">No</option>
								<option value="si">Si</option>
							</select>
						</div>
						<div className="c-contenido">
							<div>
								<span>Autobus</span>
							</div>
							<select name="autobus" id="autobus" ref={register}>
								<option value="no">No</option>
								<option value="si">Si</option>
							</select>
						</div>
						<div className="c-contenido">
							<label htmlFor="message">
								<div>
									<span className="b-text-label">Alergias</span>
								</div>

								<textarea
									className="b-input2"
									name="alergias"
									id="alergias"
									ref={register}
								/>
								{errors.message && <span>This field is required</span>}
							</label>
						</div>
						<div className="c-contenido">
							<input className="b-btn mt-3" type="submit" />
						</div>
					</form>
				</div>
			</div>
		);
}

