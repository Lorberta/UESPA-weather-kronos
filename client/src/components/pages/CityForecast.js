import React, { Component } from 'react';
import api from '../../api';
import { runInThisContext } from 'vm';
import { Route, Link } from "react-router-dom";
import Translation from '../elements/Translations';


export default class CityForecast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      forecast: [],
      slug: this.props.slug,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let slug = this.props.slug
    api.getForecast(slug)
      .then(forecast =>
        this.setState({
          forecast: forecast.list.filter((forecast, index) => index % 8 == 0),
          slug: slug,
        })
      )
  }

  render() {
    // console.log(this.state.forecast)
    return (
      <div className="forecast">
        <div>
          <div className="forecastlist">
            {this.state.forecast.map(e =>
              <div>
                <img className="forecasticon" src={`http://openweathermap.org/img/w/${e.weather[0].icon}.png`} /> <br />
                {(new Date((parseInt(e.dt) + 7316352000) * 1000).toLocaleDateString())} <br />Condition :{e.weather[0].main} <br /> Wind [m/s]: {e.wind.speed} <br /> Temp. [°C]: {e.main.temp}<br />
              </div>)}
          </div>
        </div>
        <p className="forecastbutton" onClick={this.handleClick}>
          5 Day Forecast here
        </p>
      </div>
    )
  }
}
