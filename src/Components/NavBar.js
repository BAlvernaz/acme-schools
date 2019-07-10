import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavBar = ({ students, schools }) => {
  console.log(students, schools)
    return (
      <div id='NavbarContainer'>
        <h1>Acme Schools</h1>
        <NavLink to="/Home"><h3>Home</h3></NavLink>
        <NavLink to="/schools"><h3>{`Schools (${schools.length})`}</h3></NavLink>
        <NavLink to="/students"><h3>{`Students (${students.length})`}</h3></NavLink>
      </div>
    )
  }

  const stateToProps = state => state

export default connect(stateToProps)(NavBar)
