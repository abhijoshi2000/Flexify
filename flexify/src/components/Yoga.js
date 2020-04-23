import React, { Component } from "react";
import yoga from "../images/yoga.png";

class Yoga extends Component {
  render() {
    return (
      <div>
        <h2>Yoga</h2>
        <h4> 60 to 90 BPM</h4>
        <input
          type="image"
          className="exercise-images"
          src={yoga}
          onClick={this.props.setBPMCountYoga}
        />
      </div>
    );
  }
}

export default Yoga;
