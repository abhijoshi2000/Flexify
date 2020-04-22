import React, { Component } from "react";
import hiit from "../images/hiit.jpg";

class HIIT extends Component {
  render() {
    return (
      <div>
        <h2>HIIT/CrossFit</h2>
        <h4> 140 to 180+ BPM</h4>
        <img className="exercise-images" src={hiit}></img>
      </div>
    );
  }
}

export default HIIT;
