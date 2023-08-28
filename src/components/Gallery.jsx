import { React, useState } from "react";
import nextButton from "../assets/images/nextButton.svg";
import prevButton from "../assets/images/prevButton.svg";
const Gallery = ({ images, title }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevImage = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const nextImage = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};
	return (
		<section className="carousel">
			<img
				src={images[currentIndex]}
				alt={title}
				className="carousel__image"
			/>
			{images.length > 1 && (
				<>
					<div className="carousel__button__container">
						<button
							className="carousel__button"
							onClick={prevImage}
						>
							<img
								className="carousel__button__image"
								src={prevButton}
								alt=""
							/>
						</button>
						<button
							className="carousel__button"
							onClick={nextImage}
						>
							<img
								className="carousel__button__image"
								src={nextButton}
								alt=""
							/>
						</button>
					</div>
					<p className="carousel__index">{`${currentIndex + 1}/${
						images.length
					}`}</p>
				</>
			)}
		</section>
	);
};

export default Gallery;
