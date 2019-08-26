import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../scss/components/_navbar.scss";

import Landing from "../components/landing";
import Registration from "../components/registration";
import Login from "../components/login";
import NotFound from "../components/404";
import Dashboard from "../components/dashboard";
import AddAppForm from "../components/add-app";


export default class Navbar extends Component {
	render() {
		return (
			<Router>
				<div className="nav-container">
					<nav>
						<ul>
							<li>
								<Link to="/register"> Register </Link>
							</li>
							<li>
								<Link to="/login"> Login</Link>
							</li>
							<li>
								<Link to="/apps"> My Apps </Link>
							</li>
							<li>
								<Link to="/add-app"> Create New App </Link>
							</li>
							<li>
								<Link to="/"> Home </Link>
							</li>
						</ul>
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route
								exact
								path="/register"
								component={Registration}
							/>
							<Route exact path="/login" component={Login} />
							<Route exact path="/apps" component={Dashboard} />
							<Route exact path="add-app" component={AddAppForm} />
							<Route component={NotFound} />
						</Switch>
					</nav>
				</div>
			</Router>
		);
	}
}
