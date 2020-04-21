import React, { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
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
