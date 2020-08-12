import React from "react";
import { CharacterCard } from "../component/characterCard";

export class CharacterHome extends React.Component {
	constructor() {
		super();
		this.state = {
			char: []
		};
	}
	componentDidMount() {
		fetch("https://swapi.dev/api/people/")
			.then(response => response.json())
			.then(characters => {
				this.setState({ char: characters.results });
			});
	}
	render() {
		// const charCards=null;
		return (
			<div className="container-fluid">
				<div className="cardsdisplay">
					{this.state.char.length > 1 ? (
						this.state.char.map((character, cardIndex) => {
							return (
								<div key={cardIndex}>
									<CharacterCard
										imageSrc={`https://loremflickr.com/200/200/starwars?random=${cardIndex + 1}`}
										character={character}
										{...this.props}
										index={cardIndex}
									/>
								</div>
							);
						})
					) : (
						<h1>Loading...</h1>
					)}
				</div>
			</div>
		);
	}
}
