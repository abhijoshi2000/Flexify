import React, { Component } from "react";
import flexify from "../images/flexify.png";
import Yoga from "../components/Yoga";
import Weightlifting from "../components/Weightlifting";
import Cardio from "../components/Cardio";
import HIIT from "../components/HIIT";
import Dance from "../components/Dance";
import Warmup from "../components/Warmup";
import CoolDown from "../components/CoolDown";

class ExerciseChoosingPage extends Component {
  render() {
    return (
      <div>
        <div className="header-text-and-logo">
          <img className="flexify-logo-2" src={flexify}></img>
          <h4>
            Choose an exercise category and we will generate a playlist from
            your current songs based on the researched optimal BPM for the
            chosen activity.
          </h4>
          <div className="exercise-options">
            <Weightlifting />
            <Cardio />
            <Yoga />
            <HIIT />
            <Dance />
            <Warmup />
            <CoolDown />
          </div>
        </div>
      </div>
    );
  }
}

export default ExerciseChoosingPage;
