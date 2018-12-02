import React, { Component } from 'react';
import api from '../../api';
import { runInThisContext } from 'vm';
import { Route, Link } from "react-router-dom";
import CityForecast from './CityForecast'

class City extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCity: [],
      weather: {},
      forecast: {},
      currentSlug: ""
    }
  }

  componentDidMount() {
    let slug = this.props.match.params.slug
    api.getWeather(slug)
      .then(weather =>
        this.setState({
          weather: weather,
          currentCity: this.state.currentCity,
          forecast: this.state.forecast,
          currentSlug: slug
        })
      )
  }

  render() {
    return (
      <div>
        <div>
          <pre>{JSON.stringify(this.state.weather.main, null, 2)}</pre>
        </div>
        <div >
          <CityForecast slug={this.props.match.params.slug} />
        </div>
      </div>

    );
  }
}

export default City;
