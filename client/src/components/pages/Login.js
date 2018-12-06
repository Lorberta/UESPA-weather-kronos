import React, { Component } from 'react';
import api from '../../api';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
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
    api.login(this.state.username, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Login">
        <form>
          Username: <input className="loginusername" type="text" value={this.state.username} onChange={(e) => this.handleInputChange("username", e)} /> <br />
          Password: <input className="loginpassword" type="password" value={this.state.password} onChange={(e) => this.handleInputChange("password", e)} /> <br />
          <p className="loginbutton" onClick={(e) => this.handleClick(e)}>Login</p>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    );
  }
}

export default Login;
