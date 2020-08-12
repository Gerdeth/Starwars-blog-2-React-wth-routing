import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { PlanetDetails } from "./planetDetails";

export const PlanetCard = props => {
	console.log(props);
	return (
		<Context.Consumer>
			{context => {
				return (
					<div className="container">
						<div className="card" style={{ width: "18rem", marginBottom: "5px" }}>
							<img src={props.imageSrc} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">Name: {props.hPlanet.name}</p>

								<button onClick={() => props.history.push(`/planetdetails/${props.index + 1}`)}>
									Planet Details...
								</button>

								<button onClick={() => context.actions.addFavorite(props.hPlanet.name)}>
									Favorites
								</button>
							</div>
						</div>
					</div>
				);
			}}
		</Context.Consumer>
	);
};
PlanetCard.propTypes = {
	hPlanet: PropTypes.object,
	imageSrc: PropTypes.string,
	name: PropTypes.string,
	history: PropTypes.object,
	index: PropTypes.number
};
