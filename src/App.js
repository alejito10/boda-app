import React from "react";
//import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import firebase from "firebase";
import {Formulario} from './pages/formulario/Formulario'
import {Home} from './pages/home/Home'
import {Titulo} from './shared/components/titulo/Titulo'
import {Donde} from './pages/donde/Donde'
import {Dormir} from './pages/dormir/Dormir'
import {Header} from './shared/components/header/Header'

function App() {
  return (
		<Router>
			<Header />
			<hr/>
			<Titulo/>
			<hr/>
			<Switch>
				<Route path="/dormir">
					<Dormir />
				</Route>
				<Route path="/donde">
					<Donde />
				</Route>
				<Route path="/alergias">
					<Formulario />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
