import React, { Component } from "react";
import yoga from "../images/yoga.png";

class Yoga extends Component {
  render() {
    return (
      <div>
        <h2>Yoga</h2>
        <h4> 60 to 90 BPM</h4>
        <img src={yoga} className="exercise-images"></img>
      </div>
    );
  }
}

export default Yoga;
