import React, { Component } from "react";
import "../scss/components/landing.scss";

class Landing extends Component {
	render() {
		return (
			<div className="container page" id="page-container">
				<div className="row">
					<div className="col-12">
						<div id="hero-section">
							<h1>College Application Tracker</h1>
							<p>
								Senioritis too real? Keep track of your
								applications in the easiest way possible!
							</p>
						</div>
					</div>
				</div>
				<div className="row" id="highlights">
					<div className="col-4">
						<h2>Stay Organized</h2>
						<p>
							This application allows you to keep track of your
							college application process. Enter in all the
							information that you need in order to make sure your
							applications are all in one place.
						</p>
					</div>
					<div className="col-4">
						<h2>Keep Track of Your Progress</h2>
						<p>
							Are some of the schools that you're applying to
							rolling admission? Do you plan on applying early to
							some schools? Make sure you know due dates and enter
							them into your application calendar
						</p>
					</div>
					<div className="col-4">
						<h2>Research Your Schools</h2>
						<p>
							Want to learn more about the schools you're applying
							to? Use the College Scorecard API to research about
							your potential schools!
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
