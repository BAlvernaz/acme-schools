import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavBar = ({students}) => {
  console.log(students)
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

  const stateToProps = state => state

export default connect(stateToProps)(NavBar)
