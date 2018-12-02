import React, { Component } from 'react';
import KronosRot from '../elements/KronosRot';
import api from '../../api';

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
          {/* <KronosRot /> */}
        </div>
        <ul>
          {Object.entries(this.state.cities).map(([k, value]) => (
            <a href={`/cities/${k}`} class="city-button">{value.name}<br /></a>
            //   {api.isLoggedIn() && <button onClick={() => this.handleEdit(c._id)}>Edit</button>}
            //   {api.isLoggedIn() && <button onClick={() => this.handleDelete(c._id)}>Delete</button>}
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
