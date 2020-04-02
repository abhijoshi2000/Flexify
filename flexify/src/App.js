import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
