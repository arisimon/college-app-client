import React from "react";
import "../scss/components/_landing-features.scss";

export default function LandingFeature(props) {
	return (
		<div className="row">
			<div className="col-12" id={props.sub_section}>
				<h2>{props.landing_title}</h2>
				<p>{props.landing_desc}</p>
			</div>
		</div>
	);
}
