import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

export const CharacterDetails = props => {
	const [characters, setCharacters] = useState([]);
	console.log(props.match.params.id);
	useEffect(() => {
		fetch("https://swapi.dev/api/people/" + props.match.params.id + "/")
			.then(response => response.json())
			.then(data => {
				setCharacters(data);
			});
	}, []);
	return (
		<div className="container">
			<div className="card" style={{ width: "18rem", marginBottom: "5px" }}>
				<div className="card-body">
					<p className="card-text">Height: {characters.height}</p>
					<p className="card-text">
						Mass:
						{characters.mass}
					</p>
					<p className="card-text">Eye Color :{characters.eye_color}</p>
					<p className="card-text">Skin Color :{characters.skin_color}</p>
					<p className="card-text">Hair Color :{characters.hair_color}</p>
					<p className="card-text">Gender :{characters.gender}</p>
				</div>
			</div>
		</div>
	);
};
CharacterDetails.propTypes = {
	match: PropTypes.object
};
