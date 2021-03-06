import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import getState from "../store/flux";
import { Context } from "../store/appContext";

const Navbar = props => {
	return (
		<Context.Consumer>
			{context => {
				return (
					<div className="container-fluid">
						<nav className="navbar navbar-dark ">
							<a className="navbar-brand">
								<ul className="socialMedia">
									<li>
										<i className="fab fa-facebook-square" aria-hidden="true" />
									</li>

									<li>
										<i className="fab fa-instagram" aria-hidden="true" />
									</li>
									<li>
										<i className="fab fa-tumblr" aria-hidden="true" />
									</li>
									<li>
										<i className="fab fa-twitter" aria-hidden="true" />
									</li>
									<li>
										<i className="fab fa-youtube-play" aria-hidden="true" />
									</li>
								</ul>
							</a>
							<img
								className="image"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Star_Wars_Logo_2.svg/1024px-Star_Wars_Logo_2.svg.png"
							/>
							<form className="navSearch">
								<input
									className="form-control"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button className="searchButton">
									<i className="fa fa-search" aria-hidden="true" />
								</button>
							</form>
						</nav>
						<ul className="viewChoice">
							<li>
								<Link to="/home">Home</Link>
							</li>
							<li>
								<Link to="/characters">Characters</Link>
							</li>
							<li>
								<Link to="/planets">Planets</Link>
							</li>
							<br />
							<br />
							<div className="dropdown">
								<button
									className="btn btn-secondary dropdown-toggle"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Favorites
								</button>
								<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									{context.store.favorites.map((favs, index) => {
										return (
											<a className="dropdown-item" href="#" key={index}>
												{favs.name}
											</a>
										);
									})}
								</div>
							</div>
						</ul>
					</div>
				);
			}}
		</Context.Consumer>
	);
};
Navbar.propTypes = {
	history: PropTypes.object,
	store: PropTypes.objects
};
export default withRouter(Navbar);
