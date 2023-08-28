import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
const Home = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Banner location="home" />
				<Card />
			</main>
			<Footer />
		</>
	);
};

export default Home;
