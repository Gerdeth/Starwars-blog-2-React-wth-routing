import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { CharacterDetails } from ".//characterDetails";

export const CharacterCard = props => {
	return (
		<Context.Consumer>
			{context => {
				return (
					<div className="container">
						<div className="card" style={{ width: "18rem", marginBottom: "5px" }}>
							<img src={props.imageSrc} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">Name: {props.character.name}</p>

								<button onClick={() => props.history.push(`/characterdetails/${props.index + 1}`)}>
									Character Details..
								</button>
								<button onClick={() => context.actions.addFavorite(props.character.name)}>
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
CharacterCard.propTypes = {
	character: PropTypes.object,
	imageSrc: PropTypes.string,
	history: PropTypes.object,
	index: PropTypes.number
};
