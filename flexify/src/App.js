import React, { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SpotifyWebAPI from "spotify-web-api-js";
import ExerciseChoosingPage from "./components/ExerciseChoosingPage";

const spotifyWebAPI = new SpotifyWebAPI();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      nowPlaying: {
        name: "Not checked",
        image: "",
      },
      alert: false,
      isMobile: false,
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
          <ExerciseChoosingPage />
        </div>
      );
    }
  }
}

export default App;
