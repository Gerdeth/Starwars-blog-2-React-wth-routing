import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

export const PlanetDetails = props => {
	const [planets, setPlanets] = useState([]);
	console.log(props.match.params.id);
	useEffect(() => {
		fetch("https://swapi.dev/api/planets/" + props.match.params.id + "/")
			.then(response => response.json())
			.then(data => {
				setPlanets(data);
			});
	}, []);
	return (
		<div className="container">
			<div className="card" style={{ width: "18rem", marginBottom: "5px" }}>
				<div className="card-body">
					<p className="card-text">Rotation Period: {planets.rotation_period}</p>
					<p className="card-text">
						Climate:
						{planets.climate}{" "}
					</p>
					<p className="card-text">
						Population:
						{planets.population}{" "}
					</p>
					<p className="card-text">
						Terrain:
						{planets.terrain}{" "}
					</p>
					<p className="card-text">
						Gravity:
						{planets.gravity}{" "}
					</p>
				</div>
			</div>
		</div>
	);
};
PlanetDetails.propTypes = {
	match: PropTypes.object
};
