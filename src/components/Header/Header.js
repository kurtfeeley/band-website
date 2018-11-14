import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png'

class Header extends Component {
  state = { collapsed: true };

  toggleNavbar = () => this.setState({ collapsed: !this.state.collapsed });

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed': 'navbar-toggler navbar-toggler-right';

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            style={{
              width: '140px',
              height: '40px'
          }}/>
        </NavLink>
        <button
          onClick={this.toggleNavbar}
          className={`${classTwo}`}
          type='button'
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${classOne}`} id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>About Me</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/music" exact>Listen</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/merchandise" exact>Merchandise</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tours" exact>Tours</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};

export default Header;