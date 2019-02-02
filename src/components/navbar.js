import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import "../scss/components/_navbar.scss";

class Navbar extends Component {
	render() {
		return (
			<div className="nav-container">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Apps</a>
					</li>
					<li>
						<a href="#">Login</a>
					</li>
					<li>
						<a href="#">Register</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navbar;
