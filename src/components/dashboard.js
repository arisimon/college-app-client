import React, { Component } from "react";
import "../scss/components/_dashboard.scss";
import "../scss/_grid.scss";
import AppCard from "../components/app-card";

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1 className="text-center">My College Apps</h1>
				<div className="container">
					<div className="row">
						<div className="col-4">
							<AppCard />
						</div>
						<div className="col-4">
							<AppCard />
						</div>
						<div className="col-4">
							<AppCard />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
