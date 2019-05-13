import React, { Component } from "react";
import "../scss/components/_dashboard.scss";

import AppCard from "../components/app-card";

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1 className="text-center">My College Apps</h1>
				<AppCard />
			</div>
		);
	}
}
