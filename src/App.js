import React, { Component } from "react";
import "./App.css";
import Characters from "./components/Characters/Characters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Characters />
      </div>
    );
  }
}

export default App;
