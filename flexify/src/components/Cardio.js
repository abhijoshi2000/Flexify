import React, { Component } from "react";
import running from "../images/running.jpg";

class Cardio extends Component {
  render() {
    return (
      <div>
        <h2>Cardio</h2>
        <h4> 120 to 140 BPM</h4>
        <img src={running} className="exercise-images"></img>
      </div>
    );
  }
}

export default Cardio;
