import React, { Component } from "react";
import "../App.css";

export default class Weather extends Component {
  handleWeather() {
    alert("Happy Rainy day");
  }
  render() {
    return (
      <div className="App">
        <h1> Today, there is Raining</h1>
        <button onClick={() => this.handleWeather()}>Greeting</button>
      </div>
    );
  }
}
