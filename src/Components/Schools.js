import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "./Form";
import axios from "axios";

class Schools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: []
    };
    this.onChange = this.onChange.bind(this);
  }

  // async
  onChange(student) {
    console.log(student)
    // await axios.put(`/api/students/${student}`, { schoolId });
  }

  render() {
    const { selection } = this.state;
    const { students, schools } = this.props;
    const { onChange } = this;
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
                <select onChange={ev => console.log(ev.target.value)}>
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
}


const stateToProps = state => state;

export default connect(stateToProps)(Schools);
