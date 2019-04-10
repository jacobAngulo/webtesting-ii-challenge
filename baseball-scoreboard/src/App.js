import React, { Component } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Display from "./components/display/Display";

export class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

  render() {
    return (
      <div>
        <Dashboard
          handleStrike={this.handleStrike}
          handleBall={this.handleBall}
          handleFoul={this.handleFoul}
          handleHit={this.handleHit}
        />
        <Display strikes={this.state.strikes} balls={this.state.balls} />
      </div>
    );
  }

  handleStrike = () => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1
      });
    } else {
      this.setState({
        strikes: 0,
        balls: 0
      });
    }
  };

  handleBall = () => {
    if (this.state.balls < 3) {
      this.setState({
        balls: this.state.balls + 1
      });
    } else {
      this.setState({
        strikes: 0,
        balls: 0
      });
    }
  };

  handleFoul = () => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  handleHit = () => {
    this.setState({
      strikes: 0,
      balls: 0
    });
  };
}

export default App;
