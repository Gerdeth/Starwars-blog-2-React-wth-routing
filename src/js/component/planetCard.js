import React from "react";
import PropTypes from "prop-types";

export const PlanetCard = props => {
	return (
		<div className="container">
			<div className="card" style={{ width: "18rem", marginBottom: "5px" }}>
				<img src={props.imageSrc} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">Name: {props.hPlanet.name}</p>
					{/* <p className="card-text">Rotation Period: {props.hPlanet.rotation_period}</p>
					<p className="card-text">Climate: {props.hPlanet.climate}</p>
					<p className="card-text">Population: {props.hPlanet.population}</p> */}
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
PlanetCard.propTypes = {
	hPlanet: PropTypes.object,
	imageSrc: PropTypes.string
};
