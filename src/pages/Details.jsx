import React from "react";
import { useParams, Navigate } from "react-router-dom";
import housing from "../local-json/housing";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Accomoditation from "../components/Accomoditation";
import Footer from "../components/Footer";

const Details = () => {
	const { id } = useParams();
	const card = housing.find((card) => card.id.toString() === id);

	if (!card) {
		return <Navigate to="/404" />;
	}

	return (
		<>
			<Header />
			<main className="main main--details">
				<Gallery
					images={card.pictures}
					title={card.title}
					location={card.location}
					host={card.host}
					tags={card.tags}
					description={card.description}
					equipments={card.equipments}
				/>
				<Accomoditation
					title={card.title}
					location={card.location}
					host={card.host}
					tags={card.tags}
					description={card.description}
					equipments={card.equipments}
					rating={card.rating}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Details;
