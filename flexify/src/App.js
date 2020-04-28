import React, { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SpotifyWebAPI from "spotify-web-api-js";
import ExerciseChoosingPage from "./components/ExerciseChoosingPage";
import PlaylistSelector from "./components/PlaylistSelector";
import SubmitButton from "./components/SubmitButton";

const spotifyWebAPI = new SpotifyWebAPI();

class App extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    this.setBPMCount = this.setBPMCount.bind(this);
    this.handlePlaylistChange = this.handlePlaylistChange.bind(this);
    this.state = {
      loggedIn: params.access_token ? true : false,
      userID: this.getUsername(),
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
      playlists: [],
      chosenPlaylist: {},
      chosenPlaylistSongs: [],
      exerciseChosen: "",
    };
    if (params.access_token) {
      spotifyWebAPI.setAccessToken(params.access_token);
    }
  }

  componentDidMount() {
    this.getPlaylists(50, 0);
  }

  getUsername() {
    spotifyWebAPI.getMe().then((response) => {
      this.setState({
        userID: response.id,
      });
    });
  }

  getPlaylists(limit, offset) {
    spotifyWebAPI
      .getUserPlaylists({ limit: limit, offset: offset })
      .then((response) => {
        var playlist;
        for (playlist of response.items) {
          this.setState((state) => {
            const playlists = state.playlists.concat({
              name: playlist.name,
              id: playlist.id,
              length: playlist.tracks.total,
              image: playlist.images[0],
              isChosen: false,
            });
            return {
              playlists,
            };
          });
        }
        if (this.state.playlists.length < response.total)
          this.getPlaylists(limit, offset + limit);
      });
  }

  handlePlaylistChange(e) {
    console.log("hi");
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

  setBPMCount(value, exercise) {
    this.setState({
      BPMCount: value,
      exerciseChosen: exercise,
    });
  }

  handlePlaylistChange(e) {
    const { options, selectedIndex } = e.target;
    this.setState({
      chosenPlaylist: {
        name: options[selectedIndex].innerHTML,
        id: e.target.value,
      },
    });
  }

  onSubmitButtonClick() {
    if (this.state.chosenPlaylist.id === "liked") {
      this.generateSongs();
    } else {
      this.setState({ chosenPlaylistSongs: [] });
      this.getPlaylistSongs(this.state.chosenPlaylist.id);
    }
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
          <ExerciseChoosingPage data={this.setBPMCount} />
          <div className="header-text-and-logo">
            <h2>Playlists:</h2>
          </div>
          <PlaylistSelector
            titles={this.state.playlists}
            handlePlaylistChange={this.handlePlaylistChange}
            value={this.state.chosenPlaylist.id}
            isMobile={this.state.isMobile}
          />
          <SubmitButton onClick={() => this.onSubmitButtonClick()} />
        </div>
      );
    }
  }
}

export default App;
