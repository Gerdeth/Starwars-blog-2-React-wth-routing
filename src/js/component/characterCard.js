import React from "react";
import PropTypes from "prop-types";

export const CharacterCard = props => {
	return (
		<div className="container">
			<div className="card" style={{ width: "18rem", marginBottom: "5px" }}>
				<img src={props.imageSrc} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">Name: {props.character.name}</p>
					<p className="card-text">Height: {props.character.height}</p>
					<p className="card-text">Mass: {props.character.mass}</p>
					<p className="card-text">Eye Color: {props.character.eye_color}</p>
					<p className="card-text">Skin Color: {props.character.skin_color}</p>
					<p className="card-text">Hair Color: {props.character.hair_color}</p>
					<p className="card-text">Gender: {props.character.gender}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
CharacterCard.propTypes = {
	character: PropTypes.object,
	imageSrc: PropTypes.string
};
