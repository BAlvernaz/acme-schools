import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Form from './Form';
import { destroyStudent } from '../store'


const Students = ({ students, schools, removeStudent }) => {
  return (
    <div>
     <div>
        <Form />
     </div>
    <div id="allStudentsContainer">
      {students.map(student => (
        <div id="studentCard" key={student.id}>
          <h3>
            {student.firstName} {student.lastName}
          </h3>
          <p>GPA: {student.gpa}</p>
          <select name="schoolId" defaultValue={student.schoolId}>
            <option value={null} >--Not Enrolled --</option>
            {schools.map(school => (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>            
            ))}
            </select>
            <button onClick={() => removeStudent(student.id)}>Destroy Student</button>
        </div>
      ))}
    </div>
    </div>
  );
};

const stateToProps = state => state;

const dispatchToProps = dispatch => {
    return {
      removeStudent: data => dispatch(destroyStudent(data))
    };
  };

export default connect(stateToProps, dispatchToProps)(Students);
