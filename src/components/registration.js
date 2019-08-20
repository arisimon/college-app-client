import React, { Component } from "react";
import "../scss/components/_registration.scss";

export default function Registration() {
	return (
		<div className="registration-container">
			<h1>Registration page</h1>
			<p>Register for an account below:</p>
			<form id="registration-form">
				<label htmlFor="email-input">Email Address</label>
				<br />
				<input type="email" id="email-input" placeholder="" />
				<br />
				<label htmlFor="username-input">Username</label>
				<br />
				<input type="text" id="username-input" />
				<br />
				<label htmlFor="password-input">Password</label>
				<br />
				<input type="password" id="password-input" />
				<br />
				<button className="button" id="reg-button" type="submit">
					Register
				</button>
			</form>
		</div>
	);
}
