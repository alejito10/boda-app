import React from 'react'
import { useForm } from "react-hook-form";
import './formulario.css'

export function Formulario() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
			console.log("DATOS", data);
		};
    return (
			<div>
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
								{errors.name && <span>This field is required</span>}
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
								{errors.email && (
									<span>This field is required and need to be an email</span>
								)}
							</label>
						</div>
						<div className="c-contenido">
							<div>
								<span>vegano</span>
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
									className="b-input"
									name="alergias"
									id="alergias"
									cols="30"
									rows="10"
									ref={register({ required: true })}
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

