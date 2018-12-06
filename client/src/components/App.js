import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';
import AddCountry from './pages/AddCountry';
import EditCountry from './pages/EditCountry';
import Secret from './pages/Secret';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import logo from '../images/uespaLogo.png'
import City from './pages/City';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      fontStyle: "lcars"
    }
    // api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout()
  }
  klingonHandler = (e) => {
    this.setState({
      fontStyle: "klingon"
    })
  }
  englishHandler = (e) => {
    this.setState({
      fontStyle: "lcars"
    })
  }
  render() {
    return (
      <div className="App" style={{ fontFamily: this.state.fontStyle }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Uespa Logo" />
          <div className="languagebuttons">
            <button className="klingonbutton" onClick={this.klingonHandler}></button>
            <button className="federalbutton" onClick={this.englishHandler}></button>
          </div>
          <p className="App-title">UESPA Weather Kronos</p>
        </header>
        <div className="App-Navbar">
          <NavLink to="/" exact>Choose City</NavLink>
          {/* <NavLink to="/countries">Countries</NavLink>
          <NavLink to="/add-country">Add country</NavLink> */}
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <Link to="/profile">Profile</Link>}

          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
          {/* <NavLink to="/secret">Secret</NavLink> */}
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/add-country" component={AddCountry} />
          <Route path="/edit-country/:id" component={EditCountry} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/secret" component={Secret} />
          <Route path="/cities/:slug" component={City} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
