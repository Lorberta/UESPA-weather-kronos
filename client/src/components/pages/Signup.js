import React, { Component } from 'react';
import api from '../../api';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      name: "",
      password: "",
      message: null
    }
  }

  handleInputChange(stateFieldName, event) {
    this.setState({
      [stateFieldName]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Signup">
        <form>
          Username: <input className="signupusername" type="text" value={this.state.username} onChange={(e) => this.handleInputChange("username", e)} /> <br />
          EMailAdd.: <input className="signupemail" type="text" value={this.state.name} onChange={(e) => this.handleInputChange("name", e)} /> <br />
          Password: <input className="signuppassword" type="password" value={this.state.password} onChange={(e) => this.handleInputChange("password", e)} /> <br />
          <p className="signupbutton" onClick={(e) => this.handleClick(e)}>Signup</p>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    );
  }
}

export default Signup;
