import React, { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SpotifyWebAPI from "spotify-web-api-js";
import ExerciseChoosingPage from "./components/ExerciseChoosingPage";

const spotifyWebAPI = new SpotifyWebAPI();

class App extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    this.setBPMCount = this.setBPMCount.bind(this);
    this.state = {
      loggedIn: params.access_token ? true : false,
      nowPlaying: {
        name: "Not checked",
        image: "",
      },
      alert: false,
      isMobile: false,
      BPMCount: {
        low: 0,
        high: 0,
      },
    };
    if (params.access_token) {
      spotifyWebAPI.setAccessToken(params.access_token);
    }
  }

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  setBPMCount(value) {
    this.setState({
      BPMCount: value,
    });
  }

  getNowPlaying() {
    spotifyWebAPI.getMyCurrentPlaybackState().then((response) => {
      this.setState({
        nowPlaying: {
          name: response.item.name,
          image: response.item.album.images[0].url,
        },
      });
    });
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <LoginPage />
        </div>
      );
    } else {
      return (
        <div className="Exercise">
          <h1> Main Page Component BPM Count Low: {this.state.BPMCount.low}</h1>
          <h1>
            Main Page Component BPM Count High: {this.state.BPMCount.high}
          </h1>
          <ExerciseChoosingPage data={this.setBPMCount} />
        </div>
      );
    }
  }
}

export default App;
