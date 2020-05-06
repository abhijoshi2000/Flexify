import React, { Component } from "react";
import dancing from "../images/dancing.jpg";

class Dance extends Component {
  render() {
    return (
      <div>
        <h2>Dance</h2>
        <h4> 130 to 170 BPM</h4>
        <input
          type="image"
          className="exercise-images"
          src={dancing}
          onClick={this.props.setBPMCountDance}
        />
      </div>
    );
  }
}

export default Dance;
