import React from 'react'
import { useForm } from "react-hook-form";

export function Formulario() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
			console.log("DATOS", data);
		};
    return (
        <div>
            <div className="d-flex justify-content-center">
			<form onSubmit={handleSubmit(onSubmit)} className="b-form">
				<label htmlFor="name">
					<span className="b-text-label">Nombre</span>
					<input
						className="b-input"
						name="name"
						id="name"
						defaultValue=""
						ref={register({ required: true })}
						placeholder='Nombre'
					/>
					{errors.name && <span>This field is required</span>}
				</label>

				<label htmlFor="email">
					<span className="b-text-label">Email</span>

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

				<label htmlFor="message">
					<span className="b-text-label">Mensaje</span>
					<textarea
						className="b-input"
						name="message"
						id="message"
						cols="30"
						rows="10"
						ref={register({ required: true })}
					/>
					{errors.message && <span>This field is required</span>}
				</label>

				<input className="b-btn mt-3" type="submit" />
			</form>
			
		</div>
        </div>
    )
}

