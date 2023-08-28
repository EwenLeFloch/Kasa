import { React, useState } from "react";
import arrow from "../assets/images/collapseArrow.svg";

const Collapse = ({ label, children, page }) => {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};
	return (
		<div className={`collapse${page === "about" ? "--about" : ""}`}>
			<div className="collapse__header" onClick={toggle}>
				<p>{label}</p>{" "}
				<img
					className={`collapse__arrow ${open ? "open" : ""} ${
						page === "about" ? "--about" : ""
					}`}
					src={arrow}
					alt="arrow"
				/>
			</div>
			{
				<div
					className={`collapse__content ${open ? "open" : ""} ${
						page === "about" ? "--about" : ""
					}`}
				>
					{children}
				</div>
			}
		</div>
	);
};

export default Collapse;
