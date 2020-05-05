import React, { Component } from "react";
import flexify from "../images/flexify.png";
import Yoga from "../components/Yoga";
import Weightlifting from "../components/Weightlifting";
import Cardio from "../components/Cardio";
import HIIT from "../components/HIIT";
import Dance from "../components/Dance";

class ExerciseChoosingPage extends Component {
  constructor(props) {
    super(props);
    this.setBPMCountWeightLifting = this.setBPMCountWeightLifting.bind(this);
    this.setBPMCountCardio = this.setBPMCountCardio.bind(this);
    this.setBPMCountHIIT = this.setBPMCountHIIT.bind(this);
    this.setBPMCountDance = this.setBPMCountDance.bind(this);
    this.setBPMCountYoga = this.setBPMCountYoga.bind(this);
    this.state = {
      BPMCount: {
        low: 0,
        high: 0,
      },
      ExerciseChosen: "",
    };
  }

  setBPMCountWeightLifting() {
    this.setState(
      {
        BPMCount: {
          low: 130,
          high: 150,
        },
        ExerciseChosen: "Weightlifting",
      },
      () => {
        this.props.data(this.state.BPMCount, this.state.ExerciseChosen);
      }
    );
  }

  setBPMCountCardio() {
    this.setState(
      {
        BPMCount: {
          low: 120,
          high: 140,
        },
        ExerciseChosen: "Cardio",
      },
      () => {
        this.props.data(this.state.BPMCount, this.state.ExerciseChosen);
      }
    );
  }

  setBPMCountYoga() {
    this.setState(
      {
        BPMCount: {
          low: 60,
          high: 90,
        },
        ExerciseChosen: "Yoga",
      },
      () => {
        this.props.data(this.state.BPMCount, this.state.ExerciseChosen);
      }
    );
  }

  setBPMCountDance() {
    this.setState(
      {
        BPMCount: {
          low: 130,
          high: 170,
        },
        ExerciseChosen: "Dance",
      },
      () => {
        this.props.data(this.state.BPMCount, this.state.ExerciseChosen);
      }
    );
  }

  setBPMCountHIIT() {
    this.setState(
      {
        BPMCount: {
          low: 140,
          high: 400,
        },
        ExerciseChosen: "HIIT",
      },
      () => {
        this.props.data(this.state.BPMCount, this.state.ExerciseChosen);
      }
    );
  }

  render() {
    return (
      <div>
        <div className="header-text-and-logo">
          <img className="flexify-logo-2" src={flexify}></img>
          <h4>
            Choose an exercise category and a playlist from which you want the
            music from and we will generate a new exercise playlist based on the
            researched optimal beats per minute (BPM) for the chosen activity.
          </h4>
          <h4>Exercise Category Chosen: {this.state.ExerciseChosen}</h4>
          <div className="exercise-options">
            <Weightlifting
              setBPMCountWeightLifting={this.setBPMCountWeightLifting}
            />
            <Cardio setBPMCountCardio={this.setBPMCountCardio} />
            <Yoga setBPMCountYoga={this.setBPMCountYoga} />
            <Dance setBPMCountDance={this.setBPMCountDance} />
            <HIIT setBPMCountHIIT={this.setBPMCountHIIT} />
          </div>
        </div>
      </div>
    );
  }
}

export default ExerciseChoosingPage;
