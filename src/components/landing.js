import React from "react";
import "../scss/components/_landing.scss";

import LandingFeature from "../components/landing-features";

export default function Landing() {
	return (
		<div className="container page">
			<section id="hero-section">
				<div className="row">
					<div className="col-12">
						<h1>College Application Tracker</h1>
						<p>
							Senioritis too real? Keep track of your applications
							in the easiest way possible!
						</p>
					</div>
				</div>
			</section>
			<section id="highlights">
				<LandingFeature
					sub_section="organize"
					landing_title="Stay Organized"
					landing_desc="This application allows you to keep track of
								your college application process. Enter in all
								the information that you need in order to make
								sure your applications are all in one place."
				/>
				<LandingFeature
					sub_section="progress"
					landing_title="Keep Track of Your Progress"
					landing_desc="Are some of the schools that you're applying to
								rolling admission? Do you plan on applying early
								to some schools? Make sure you know due dates
								and enter them into your application calendar"
				/>
				<LandingFeature
					sub_section="research"
					landing_title="Research Your Schools"
					landing_desc="Want to learn more about the schools you're
								applying to? Use the College Scorecard API to
								research about your potential schools!"
				/>
			</section>
		</div>
	);
}
