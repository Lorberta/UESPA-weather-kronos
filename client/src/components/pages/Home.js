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
        <h2>Home</h2>
        <div className="KronosRot">
          {/* <KronosRot /> */}
        </div>
        <p>This is a sample project with the MERN stack</p>
        <ul>
          {Object.entries(this.state.cities).map(([key, value]) => (
            <li><a href="/cities/{key}">{value.name}</a></li>
            //   {api.isLoggedIn() && <button onClick={() => this.handleEdit(c._id)}>Edit</button>}
            //   {api.isLoggedIn() && <button onClick={() => this.handleDelete(c._id)}>Delete</button>}
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
