import React, { Component } from 'react';
import api from '../../api';
import { runInThisContext } from 'vm';

class City extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCity: [],
      weather: {},
      forecast: {}
    }
  }

  componentDidMount() {
    api.getWeather("Kronos2")
      .then(weather =>
        this.setState({
          weather: weather,
          currentCity: this.state.currentCity,
          forecast: this.state.forecast
        })
      )
  }

  render() {
    return (
      <div><pre>{JSON.stringify(this.state.weather.weather, null, 2)}</pre></div>
    );
  }
}

export default City;
