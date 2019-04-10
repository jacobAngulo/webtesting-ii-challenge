import React, { Component } from "react";

export class Display extends Component {
  render() {
    return (
      <div>
        <h1>Display</h1>
        <h2>At Bat</h2>
        <p>strikes: {this.props.strikes}</p>
        <p>balls: {this.props.balls}</p>
      </div>
    );
  }
}

export default Display;
