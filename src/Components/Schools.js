import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "./Form";
import axios from "axios";

const Schools = ({students, schools, onChange}) => {
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
                  Student Count{" "}
                  {
                    students.filter(student => student.schoolId === school.id)
                      .length
                  }
                </p>
                <select onChange={(ev) => onChange(ev.target.value, school.id)} defaultValue={<option>select</option>}>
                  {students
                    .filter(student => student.schoolId !== school.id)
                    .map(student => (
                      <option value={student.id} key={student.id}>
                        {student.firstName} {student.lastName}
                      </option>
                    ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


const stateToProps = state => state;
const dispatchToProps = dispatch => {
  return {
    onChange: async(studentId, schoolId) => {
     const response = await axios.put(`/api/students/${studentId}`, {schoolId})
     if (response.data.length) {
      dispatch({type: "GOING_TO_SCHOOL", studentId, schoolId})
      window.location.hash = `/schools/${schoolId}`
     }
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Schools);
