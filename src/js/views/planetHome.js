import React from "react";
import { PlanetCard } from "../component/planetCard";
export class PlanetHome extends React.Component {
	constructor() {
		super();
		this.state = {
			plnt: []
		};
	}
	componentDidMount() {
		fetch("https://swapi.dev/api/planets/")
			.then(response => response.json())
			.then(hPlanet => {
				this.setState({ plnt: hPlanet.results });
			});
	}
	render() {
		return (
			<div className="planetdisplay">
				{this.state.plnt.length > 1 ? (
					this.state.plnt.map((hPlanet, plntcardIndex) => {
						return (
							<div key={plntcardIndex}>
								<PlanetCard
									imageSrc={`https://loremflickr.com/200/200/planets?random=${plntcardIndex + 1}`}
									hPlanet={hPlanet}
									{...this.props}
									index={plntcardIndex}
								/>
							</div>
						);
					})
				) : (
					<h1>Loading....</h1>
				)}
			</div>
		);
	}
}
