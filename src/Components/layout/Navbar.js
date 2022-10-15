import React from 'react'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
      <Link to="/" className="navbar-brand">
          <img src={logo} height="60" alt="mb-logo" />
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/recipe" className="nav-link" style={{paddingLeft:'30px'}}>Recipe</Link>
          </li>
          <li className="nav-item">
            <Link to="/feed" className="nav-link" style={{paddingLeft:'100px'}}>Feed</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-link" style={{paddingLeft:'100px'}}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/support" className="nav-link" style={{paddingLeft:'100px'}}>Support</Link>
          </li>
        </ul>
       
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/signIn" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/signUp" className="nav-link">Sign Up</Link>
          </li>
        </ul>
      </div>

    </nav >
  )
}

export default Navbar;
