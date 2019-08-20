import React, { Component } from "react";
import "../scss/components/_login.scss";

export default function Login() {
	return (
		<div className="login-container">
			<h1 className="text-center">Login page</h1>
			<form id="login-form">
				<label htmlFor="username-input">Username</label>
				<br />
				<input type="text" id="username-input" />
				<br />
				<label htmlFor="password-input">Password</label>
				<br />
				<input type="password" id="password-input" />
				<br />
				<button className="button" id="login-button" type="submit">
					Log In
				</button>
			</form>
		</div>
	);
}
