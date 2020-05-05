import React, { Component } from "react";
import styled from "styled-components";

const Option = styled.option`
  cursor: pointer;
  background-color: lightseagreen;
  border-radius: 20px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-size: 20px;
`;

const Form = styled.select`
  cursor: pointer;
  display: flex;
  border-radius: 20px;
  padding: 10px;
  margin: 0 auto;
  background-color: lightseagreen;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-size: 22px;
`;

class PlaylistSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handlePlaylistChange(event);
  }

  render() {
    return (
      <div className="playlist-selector">
        <Form value={this.props.value} onChange={this.handleChange}>
          <Option value="">Choose a Playlist</Option>
          <Option name="liked" value="liked">
            Liked Songs
          </Option>
          {this.props.titles.map((item) => (
            <Option name={item.name} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Form>
      </div>
    );
  }
}

export default PlaylistSelector;
