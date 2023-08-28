import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/LOGO.png";

const Header = (props) => {
	return (
		<header className={`header`}>
			<NavLink to="/">
				<img
					className="header__logo"
					src={logo}
					alt="Logo de l'entreprise Kasa"
				/>
			</NavLink>
			<nav className="header__navigation">
				<ul className="header__navigation__list">
					<NavLink to="/">
						<li className="header__navigation__list__item">
							Accueil
						</li>
					</NavLink>
					<NavLink to="/about">
						<li className="header__navigation__list__item">
							A Propos
						</li>
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
