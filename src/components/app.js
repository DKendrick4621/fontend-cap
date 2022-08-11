import React, { Component } from "react";
import axios from "axios";

import Garage from "./garage";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://dlk-the-garage.herokuapp.com/car/get", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response);
        this.setState({ cars: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderCars() {
    return this.state.cars.map((car) => {
      return <Garage key={car.id} carData={car} />;
    });
  }

  render() {
    return (
      <div className="app">
        <h1>My Garage</h1>
        <audio
          controls
          autoPlay={true}
          volume={40}
          src="Drift.mp3"
          className="sound"
          type="audio/mp3"
        />
        <div className="BG">{this.renderCars()}</div>
      </div>
    );
  }
}
