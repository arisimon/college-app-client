import React, { Component } from "react";
import "./app.css";

import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Landing />
				<Footer />
			</div>
		);
	}
}

export default App;
