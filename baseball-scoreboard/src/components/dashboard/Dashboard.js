import React, { Component } from "react";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <section>
          <button onClick={this.props.handleStrike}>strike</button>
          <button onClick={this.props.handleBall}>ball</button>
          <button onClick={this.props.handleFoul}>foul</button>
          <button onClick={this.props.handleHit}>hit</button>
        </section>
      </div>
    );
  }
}

export default Dashboard;
