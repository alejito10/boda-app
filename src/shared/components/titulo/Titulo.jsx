import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './titulo.css'

export function Titulo() {
	useEffect(()=>{
		AOS.init({
			duration:2000
		})
	},[])
    return (
			<div className="c-title">
				<h1 data-aos="fade-right" className="title">
					Boda Alejandro & Natalia
				</h1>
			</div>
		);
}
