import React, { Component } from "react";
import flexify from "../images/flexify.png";
import downArrow from "../images/downArrow.png";

class LoginPage extends Component {
  render() {
    return (
      <div className="body">
        <div className="header-text-and-logo">
          <h1> Welcome to Flexify! </h1>
          <h3>
            Get the best exercise tracks from your playlist and <br></br>get
            ready for the gym!
          </h3>
          <h4>
            Click the image below to login to your Spotify Account and get
            started!
          </h4>
          <img className="down-arrow" src={downArrow}></img>
        </div>
        <div className="login-page-images">
          <a href="http://localhost:8888/login">
            <img className="flexify-logo" src={flexify}></img>
          </a>
        </div>
      </div>
    );
  }
}

export default LoginPage;
