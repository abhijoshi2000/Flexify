import React, { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

export default App;
