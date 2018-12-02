import React, { Component } from 'react';
import api from '../../api';
import { runInThisContext } from 'vm';
import { Route, Link } from "react-router-dom";


export default class CityForecast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      forecast: { a: "bullshit" },
      slug: this.props.slug
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let slug = this.props.slug
    api.getForecast(slug)
      .then(forecast =>
        this.setState({
          forecast: forecast,
          slug: slug
        })
      )
  }

  render() {
    return (
      <div>
        <div>
          <pre>{JSON.stringify(this.state.forecast, null, 2)}</pre>
        </div>
        <button onClick={this.handleClick}>
          5-Day Forecast
        </button>
      </div>
    )
  }
}
