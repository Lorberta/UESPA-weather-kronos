import React, { Component } from 'react'
import api from '../../api';
import { runInThisContext } from 'vm';
import { Route, Link } from "react-router-dom";
import Loader from '../elements/Loader';


export default class Planets extends Component {
  constructor() {
    super()
    this.state = {
      loading: "loading........"
    }

    setTimeout(() => {
      this.setState({
        loading: <div className="klingonPlanets">
          <div className="orbitimage" >
            <div id="text">The subspace transmission has been disrupted.<br /> Please try again later.</div>
          </div>
        </div>
      })
    }, 5000)
  }

  render() {

    return (
      <div>
        <div className="loader" style={{ color: "grey" }}>
          {this.state.loading}
          {/* <Loader /> */}
        </div>

      </div>
    )
  }
}
