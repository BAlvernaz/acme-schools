import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Form from './Form';
import SelectStudent from './SelectStudent';


const Schools = ({ students, schools }) => {
  return (
    <div>
      <div>
        <Form />
      </div>
      <div id="allSchoolContainer">
        <div className="schoolCards">
          {schools.map(school => (
            <div key={school.id} id="schoolCard">
              <Link to={`/schools/${school.id}`}>{school.name}</Link>
              <img id="schoolImg" src={school.image} />
              <p>
                Student Count{' '}
                {
                  students.filter(student => student.schoolId === school.id)
                    .length
                }
              </p>
              <SelectStudent
                school={school}
                students={students}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const stateToProps = state => state;

export default connect(stateToProps)(Schools);
