import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  display: flex;
  border-radius: 3px;
  padding: 10px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  background-color: #1c65ef;
  width: 300px;
  border-radius: 20px;
  color: white;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-size: 18px;
`;

class SubmitButton extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.onClick}>Generate Your Playlist!</Button>
      </div>
    );
  }
}

export default SubmitButton;
