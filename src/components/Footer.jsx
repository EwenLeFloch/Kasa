import React from "react";
import logo from "../assets/images/LOGO.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<img
				className="footer__image"
				src={logo}
				alt="Logo de l'entreprise"
			/>
			<p className="footer__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
