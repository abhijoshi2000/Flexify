import React, { Component } from "react";
import running from "../images/running.jpg";

class Cardio extends Component {
  render() {
    return (
      <div>
        <h2>Cardio</h2>
        <h4> 120 to 140 BPM</h4>
        <input
          type="image"
          className="exercise-images"
          src={running}
          onClick={this.props.setBPMCountCardio}
        />
      </div>
    );
  }
}

export default Cardio;
