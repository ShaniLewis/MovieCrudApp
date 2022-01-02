import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">MovieDash</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
            </li>
          <li className="navbar-item">
              <Link to="/users" className="nav-link">User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/movies" className="nav-link">Movie</Link>
          </li>
          <li className="navbar-item">
          <Link to="/moviesList" className="nav-link">MovieList</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}