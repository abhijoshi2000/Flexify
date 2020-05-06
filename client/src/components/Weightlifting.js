import React, { Component } from "react";
import lifting from "../images/lifting.png";

class Weightlifting extends Component {
  render() {
    return (
      <div>
        <h2>Weights </h2>
        <h4> 130 to 150 BPM</h4>
        <input
          type="image"
          className="exercise-images"
          src={lifting}
          onClick={this.props.setBPMCountWeightLifting}
        />
      </div>
    );
  }
}

export default Weightlifting;
