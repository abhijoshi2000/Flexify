import React, { Component } from "react";
import flexify from "../images/flexify.png";
import downArrow from "../images/downArrow.png";

class LoginPage extends Component {
  render() {
    return (
      <div className="body">
        <div className="header-text-and-logo">
          <h1 className="header-text"> Welcome to Flexify! </h1>
          <h3 className="header-text-2">
            Get the best exercise tracks from your playlist and <br></br>get
            ready for the gym!
          </h3>
          <h4 className="header-text-3">
            Click the image below to login to your Spotify Account and get
            started!
          </h4>
        </div>
        <img className="down-arrow" src={downArrow}></img>
        <img className="flexify-logo" src={flexify}></img>
      </div>
    );
  }
}

export default LoginPage;
