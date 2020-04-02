import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Slide } from "react-slideshow-image";

import BackgroundSlideshow from "react-background-slideshow";

import running from "../images/running.png";
import lifting from "../images/lifting.png";
import yoga from "../images/yoga.png";
import flexify from "../images/flexify.png";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-text-and-logo">
          <h1 className="header-text"> Welcome to Flexify! </h1>
          <h3 className="header-text-2">
            Get the best exercise tracks from your playlist and <br></br>get
            ready for the gym!
          </h3>
          <h4 className="header-text-3">
            Click the image below to login to your spotify and get started!
          </h4>
          <img className="flexify-logo" src={flexify}></img>
        </div>
        <div className="background-slideshow">
          <BackgroundSlideshow images={[running, lifting, yoga]} />
        </div>
      </div>
    );
  }
}

export default Header;
