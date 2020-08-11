import React from "react";
import PropTypes from "prop-types";

export const PlanetDetails = props => {
	return (
		<div className="container">
			<div className="card" style={{ width: "18rem", marginBottom: "5px" }}>
				<img src={""} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">Name: </p>
					<p className="card-text">Rotation Period: </p>
					<p className="card-text">Climate: </p>
					<p className="card-text">Population: </p>
				</div>
			</div>
		</div>
	);
};
// PlanetDetails.propTypes = {
// }
