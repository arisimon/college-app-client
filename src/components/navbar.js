import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import "../scss/components/navbar.scss";

class Navbar extends Component {
	render() {
		return (
			<div className="nav-container">
				<ul>
					<li id="register-btn">
						<a href="#">Register</a>
					</li>
					<li>
						<a href="#">Log In</a>
					</li>
					<li>
						<a href="#">My Apps</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navbar;
