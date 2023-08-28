import React from "react";
import ButtonTag from "./ButtonTag";
import Collapse from "./Collapse";

const Accomoditation = ({
	title,
	location,
	host,
	tags,
	description,
	equipments,
	rating,
}) => {
	const renderStars = (rating) => {
		const totalStars = 5;
		const stars = [];

		for (let i = 1; i <= totalStars; i++) {
			stars.push(
				<span
					key={i}
					className={`accomoditation__rating--${
						i <= rating ? "fill" : "empty"
					}`}
				>
					&#9733;
				</span>
			);
		}
		return stars;
	};
	return (
		<section className="accomoditation">
			<div className="accomoditation__title__container">
				<h1 className="accomoditation__title">{title}</h1>
				<h2 className="accomoditation__location">{location}</h2>
			</div>
			<div className="accomoditation__host">
				<p>{host.name}</p>
				<img src={host.picture} alt="" />
			</div>

			<ButtonTag tags={tags} />
			<div className="accomoditation__rating">{renderStars(rating)}</div>
			<div className="collapse__container">
				<Collapse label="Description">
					<p className="collapse__text">{description}</p>
				</Collapse>
				<Collapse label="Équipements">
					<ul className="collapse__text">
						{equipments.map((equipment, index) => (
							<li key={index}>{equipment}</li>
						))}
					</ul>
				</Collapse>
			</div>
		</section>
	);
};

export default Accomoditation;
