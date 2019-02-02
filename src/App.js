import React, { Component } from "react";
import "./scss/_styles.scss";
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
