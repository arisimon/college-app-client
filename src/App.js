import React, { Component } from "react";
import "./app.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar";
// import Footer from "./components/footer";
//

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				{/*<Footer />*/}

			</div>
		);
	}
}

export default App;
