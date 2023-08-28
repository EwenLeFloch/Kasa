import React from "react";
const ButtonTag = ({ tags }) => {
	return (
		<>
			<ul className="accomoditation__tags__list">
				{tags.map((tags, index) => (
					<li className="accomoditation__tags" key={index}>
						{tags}
					</li>
				))}
			</ul>
		</>
	);
};

export default ButtonTag;
