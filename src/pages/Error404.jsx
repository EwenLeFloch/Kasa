import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import error404 from "../assets/images/404.png";

const Error404 = () => {
	return (
		<div className="error">
			<Header location="Error404" />
			<main className="main">
				<img className="error__image" src={error404} alt="Erreur 404" />
				<p className="error__subtitle">
					Oups! La page que vous demandez n'existe pas.
				</p>
				<Link to="/" className="error__link">
					Retourner sur la page d'accueil
				</Link>
			</main>
			<Footer />
		</div>
	);
};

export default Error404;
