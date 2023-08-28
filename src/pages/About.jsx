import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

const About = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Banner location="about" />

				<section className="collapse__container about">
					<Collapse label="Fiabilité" page="about">
						<p className="collapse__text">
							Les annonces postées sur Kasa garantissent une
							fiabilité totale. Les photos sont conformes aux
							logements, et toutes les informations sont
							régulièrement vérifiées par nos équipes.
						</p>
					</Collapse>
					<Collapse label="Respect" page="about">
						<p className="collapse__text">
							La bienveillance fait partie des valeurs fondatrices
							de Kasa. Tout comportement discriminatoire ou de
							perturbation du voisinage entraînera une exclusion
							de notre plateforme.
						</p>
					</Collapse>
					<Collapse label="Service" page="about">
						<p className="collapse__text">
							La bienveillance fait partie des valeurs fondatrices
							de Kasa. Tout comportement discriminatoire ou de
							perturbation du voisinage entraînera une exclusion
							de notre plateforme.
						</p>
					</Collapse>
					<Collapse label="Sécurité" page="about">
						<p className="collapse__text">
							La sécurité est la priorité de Kasa. Aussi bien pour
							nos hôtes que pour les voyageurs, chaque logement
							correspond aux critères de sécurité établis par nos
							services. En laissant une note aussi bien à l'hôte
							qu'au locataire, cela permet à nos équipes de
							vérifier que les standards sont bien respectés. Nous
							organisons également des ateliers sur la sécurité
							domestique pour nos hôtes.
						</p>
					</Collapse>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default About;
