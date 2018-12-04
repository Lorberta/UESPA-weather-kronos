import React, { Component } from 'react';
import KronosRot from '../elements/KronosRot';
import Loader from '../elements/Loader';
import api from '../../api';
import { Route, Link } from "react-router-dom";


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    api.getCities()
      .then(cities =>
        this.setState({
          cities: cities
        })
      )
  }

  render() {
    return (
      <div className="Home">
        <div className="KronosRot">
          <KronosRot />
          <div className="citieslist">
            <ul>
              {Object.entries(this.state.cities).map(([k, value]) => (
                <Link to={`/cities/${k}`} class="city-button">{value.name}</Link>
                //   {api.isLoggedIn() && <button onClick={() => this.handleEdit(c._id)}>Edit</button>}
                //   {api.isLoggedIn() && <button onClick={() => this.handleDelete(c._id)}>Delete</button>}
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
