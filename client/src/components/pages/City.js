import React, { Component } from 'react';
import api from '../../api';
import { runInThisContext } from 'vm';
import { Route, Link } from "react-router-dom";
import CityForecast from './CityForecast'

class City extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // cities: [],
      currentCity: [],
      weather: {},
      forecast: {},
      currentSlug: "",
      isloading: true
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
          currentSlug: slug,
          isloading: false
        })
      )
    api.getCities()
      .then(cities =>
        this.setState({
          cities: cities
        })
      )
  }

  render() {
    if (this.state.isloading) {
      return <h1>loading...</h1>
    }

    return (
      <div>
        {/* <ul> {this.state.weather.}</ul> */}
        <div className="weather">
          <img className="imgUrl" src={this.state.cities[this.props.match.params.slug].imgUrl} />

          {this.state.weather.weather.map(e =>
            <a>
              <img className="weathericon" src={`http://openweathermap.org/img/w/${e.icon}.png`} />
              <br />main :{e.main} <br /> description : {e.description}</a>
          )}
        </div>
        <div >
          <CityForecast slug={this.props.match.params.slug} />
        </div>
      </div>

    );
  }
}

export default City;
