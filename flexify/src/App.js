import React, { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SpotifyWebAPI from "spotify-web-api-js";
import ExerciseChoosingPage from "./components/ExerciseChoosingPage";
import PlaylistSelector from "./components/PlaylistSelector";
import SubmitButton from "./components/SubmitButton";
import Modal from "./components/Modal";

const spotifyWebAPI = new SpotifyWebAPI();

class App extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      userID: this.getUsername(),
      show: false,
      hideNav: false,
      BPMCount: {
        low: 0,
        high: 0,
      },
      playlists: [],
      chosenPlaylist: {},
      selectedPlaylistSongs: [],
      exerciseChosen: "",
    };
    if (params.access_token) {
      spotifyWebAPI.setAccessToken(params.access_token);
    }
    this.setBPMCount = this.setBPMCount.bind(this);
    this.handlePlaylistChange = this.handlePlaylistChange.bind(this);
  }

  componentDidMount() {
    this.getPlaylists(50, 0);
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = window.innerWidth <= 760;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
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

  getPlaylistSongs(playlistID) {
    var result = this.state.playlists.find((obj) => {
      return obj.id === playlistID;
    });
    var numCalls = Math.ceil(result.length / 100);
    var playlistIDArray = [];
    for (var i = 0; i < numCalls; i++) {
      playlistIDArray.push(playlistID);
    }
    Promise.all(
      playlistIDArray.map((playlistID, index) =>
        spotifyWebAPI.getPlaylistTracks(playlistID, { offset: index * 100 })
      )
    ).then((response) => {
      var song;
      var arr;
      for (arr of response) {
        for (song of arr.items) {
          if (song.track != null) {
            this.setState((state) => {
              const selectedPlaylistSongs = state.selectedPlaylistSongs.concat({
                name: song.track.name,
                uri: song.track.uri,
                id: song.track.id,
              });

              return {
                selectedPlaylistSongs,
              };
            });
          }
        }
      }
      this.generatePlaylist();
    });
  }

  generatePlaylist() {
    var songIDs = [[]];
    var song;
    var hundred = 0;

    for (song of this.state.selectedPlaylistSongs) {
      if (songIDs[hundred].length === 100) {
        hundred += 1;
        songIDs.push([]);
      }
      songIDs[hundred].push(song.id);
    }

    Promise.all(
      songIDs.map((songID) => spotifyWebAPI.getAudioFeaturesForTracks(songID))
    ).then((response) => {
      var song;
      var arr;
      var weightsURIs = [[]];
      var cardioURIs = [[]];
      var yogaURIs = [[]];
      var danceURIs = [[]];
      var hiitURIS = [[]];

      for (arr of response) {
        for (song of arr.audio_features) {
          if (song != null) {
            if (song.tempo >= 130 && song.tempo <= 150) {
              if (weightsURIs[weightsURIs.length - 1].length === 100) {
                weightsURIs.push([]);
              }
              weightsURIs[weightsURIs.length - 1].push(song.uri);
            }
            if (song.tempo >= 120 && song.tempo <= 140) {
              if (cardioURIs[cardioURIs.length - 1].length === 100) {
                cardioURIs.push([]);
              }
              cardioURIs[cardioURIs.length - 1].push(song.uri);
            }
            if (song.tempo >= 60 && song.tempo <= 90) {
              if (yogaURIs[yogaURIs.length - 1].length === 100) {
                yogaURIs.push([]);
              }
              yogaURIs[yogaURIs.length - 1].push(song.uri);
            }
            if (song.tempo >= 130 && song.tempo <= 170) {
              if (danceURIs[danceURIs.length - 1].length === 100) {
                danceURIs.push([]);
              }
              danceURIs[danceURIs.length - 1].push(song.uri);
            }
            if (song.tempo >= 130 && song.tempo <= 170) {
              if (hiitURIS[hiitURIS.length - 1].length === 100) {
                hiitURIS.push([]);
              }
              hiitURIS[hiitURIS.length - 1].push(song.uri);
            }
          }
        }
      }

      spotifyWebAPI
        .createPlaylist(this.state.userID, {
          name:
            "Flexify " +
            this.state.exerciseChosen +
            " songs of " +
            this.state.chosenPlaylist.name,
          description:
            "Flexify generated this playlist from your current " +
            this.state.chosenPlaylist.name +
            " playlist",
        })
        .then((response) => {
          if (this.state.exerciseChosen === "Weightlifting") {
            cardioURIs.map((weightURI) => {
              spotifyWebAPI.addTracksToPlaylist(response.id, weightURI);
            });
          } else if (this.state.exerciseChosen === "Cardio") {
            cardioURIs.map((cardioURI) => {
              spotifyWebAPI.addTracksToPlaylist(response.id, cardioURI);
            });
          } else if (this.state.exerciseChosen === "Yoga") {
            yogaURIs.map((yogaURI) => {
              spotifyWebAPI.addTracksToPlaylist(response.id, yogaURI);
            });
          } else if (this.state.exerciseChosen === "Dance") {
            danceURIs.map((danceURI) => {
              spotifyWebAPI.addTracksToPlaylist(response.id, danceURI);
            });
          } else if (this.state.exerciseChosen === "HIIT") {
            hiitURIS.map((hiitURI) => {
              spotifyWebAPI.addTracksToPlaylist(response.id, hiitURI);
            });
          }
          this.setState({ alert: true });
        });
    });
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

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  onSubmitButtonClick(e) {
    if (this.state.chosenPlaylist.id === "liked") {
      this.generateSongs();
    } else {
      this.setState({ selectedPlaylistSongs: [] });
      this.getPlaylistSongs(this.state.chosenPlaylist.id);
    }
    this.showModal(e);
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
          <Modal onClose={this.showModal} show={this.state.show}>
            Login to Your Spotify Account to see the newly generated playlist!
          </Modal>
          <SubmitButton onClick={(e) => this.onSubmitButtonClick(e)} />
        </div>
      );
    }
  }
}

export default App;
