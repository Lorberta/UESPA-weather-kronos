import React, { Component } from 'react'
import api from '../../api';
import { runInThisContext } from 'vm';
import { Route, Link } from "react-router-dom";

export default class Planets extends Component {
  render() {
    return (
      <div className="klingonPlanets">

        <div className="orbitimage" >
          <div id="text">The subspace transmission has been disrupted.<br /> Please try again later.</div>
        </div>
      </div>
    )
  }
}
