import React from "react";

const Banner = (props) => {
	return (
		<div className={`banner banner--${props.location}`}>
			{props.location === "home" ? (
				<h1 className="banner__title">
					{" "}
					Chez vous, partout et ailleurs{" "}
				</h1>
			) : (
				""
			)}
		</div>
	);
};

export default Banner;
