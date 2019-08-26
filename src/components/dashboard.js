import React, { Component } from "react";
import "../scss/components/_dashboard.scss";
import "../scss/_grid.scss";
import AppCard from "../components/app-card";

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1 className="text-center">My College Apps</h1>
				<div className="container" id="app-container">
					<div className="row">
						<div className="col-4 app" data-id="1">
							<AppCard />
						</div>
						<div className="col-4 app" data-id="2">
							<AppCard />
						</div>
						<div className="col-4 app" data-id="3">
							<AppCard />
						</div>
					</div>
					<div className="row">
						<div className="col-4 app" data-id="4">
							<AppCard />
						</div>
						<div className="col-4 app" data-id="5">
							<AppCard />
						</div>
						<div className="col-4 app" data-id="6">
							<AppCard />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
