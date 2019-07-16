import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { popularHelper, topSchoolHelper } from '../helpers';

const NavBar = ({ students, schools }) => {
  const mostPopular = popularHelper(students, schools);
  const topSchool = topSchoolHelper(students, schools);
  return (
    <div id="NavbarContainer">
      <h1>Acme Schools</h1>
      <NavLink to="/">
        <h3>Home</h3>
      </NavLink>
      <NavLink to="/schools">
        <h3>{`Schools (${schools.length})`}</h3>
      </NavLink>
      <NavLink to="/students">
        <h3>{`Students (${students.length})`}</h3>
      </NavLink>
      {mostPopular ? (
        <NavLink to={`/schools/${mostPopular.id}`}>
          {mostPopular.name}(
          {
            students.filter(student => student.schoolId === mostPopular.id)
              .length
          }
          )
        </NavLink>
      ) : (
        ''
      )}
      {topSchool ? (
        <NavLink to={`/schools/${topSchool.id}`}>
          Top School ({topSchool.name})
        </NavLink>
      ) : (
        ''
      )}
    </div>
  );
};

const stateToProps = ({ students, schools }) => {
  return {
    students,
    schools
  };
};

export default connect(stateToProps)(NavBar);
