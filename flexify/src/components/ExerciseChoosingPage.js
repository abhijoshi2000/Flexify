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
    };
  }

  setBPMCountWeightLifting() {
    this.setState(
      {
        BPMCount: {
          low: 130,
          high: 150,
        },
      },
      () => {
        this.props.data(this.state.BPMCount);
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
      },
      () => {
        this.props.data(this.state.BPMCount);
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
      },
      () => {
        this.props.data(this.state.BPMCount);
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
      },
      () => {
        this.props.data(this.state.BPMCount);
      }
    );
  }

  setBPMCountHIIT() {
    this.setState(
      {
        BPMCount: {
          low: 140,
          high: 200,
        },
      },
      () => {
        this.props.data(this.state.BPMCount);
      }
    );
  }

  render() {
    return (
      <div>
        <div className="header-text-and-logo">
          <img className="flexify-logo-2" src={flexify}></img>
          <h4>
            Choose an exercise category and the playlists from which you want
            the music from and we will generate a new playlist based on the
            researched optimal BPM for the chosen activity.
          </h4>
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
