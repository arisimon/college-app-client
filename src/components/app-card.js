import React, { Component } from "react";
import "../scss/components/_app-card.scss";
import AddAppForm from "../components/add-app";


export default class AppCard extends Component {
	render() {
		return (
			<div>
				<div className="application-card">
					<table>
						<thead />
						<tbody>
							<tr>
								<td className="title">University Name:</td>
								<td>university_name</td>
							</tr>
							<tr>
								<td className="title">Due Date:</td>
								<td>app_due_date</td>
							</tr>
							<tr>
								<td className="title">Admission Type:</td>
								<td>admission_type</td>
							</tr>
							<tr>
								<td>insert progress bar here</td>
							</tr>
							<tr>
								<td>
									<button className="button small" >
										View
									</button>
								</td>
								<td>
									<button className="button small red">
										Delete
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
