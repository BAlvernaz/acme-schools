import React from 'react'
import { NavLink } from 'react-router-dom'
import store from '../store'
class NavBar extends React.Component {
  render() {
    return (
      <div id='NavbarContainer'>
        <h1>Acme Schools</h1>
        <NavLink to="/Home"><h3>Home</h3></NavLink>
        <NavLink to="/schools"><h3>Schools</h3></NavLink>
        <NavLink to="/students"><h3>Students</h3></NavLink>
        {
          
        }
      </div>
    )
  }
}

export default NavBar
