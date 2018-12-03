import React, { Component } from 'react';
import api from '../../api';
import { runInThisContext } from 'vm';
import { Route, Link } from "react-router-dom";


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
          forecast: forecast.list,
          slug: slug,
        })
      )
  }

  render() {
    console.log(this.state.forcast)
    //wind.speed , main.temp , weather[0].main weather[0].icon 
    return (
      <div>
        <div>

          <ul style={{ color: "white" }}>{this.state.forecast.map(e => <li>wind speed:{e.wind.speed} temp:{e.main.temp}weather main :{e.weather[0].main} icon :{e.weather[0].icon}</li>)} </ul>

          {/* <pre>{JSON.stringify(this.state.forecast, null, 2)}</pre> */}
        </div>
        <button onClick={this.handleClick}>
          5-Day Forecast
        </button>
      </div>
    )
  }
}
