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

  async onChange(student, schoolId) {
    await axios.put(`/api/students/${student.id}`, { schoolId });
    const selection = this.state.selection.map(_student => {
      if (_student !== student.id) {
        return _student;
      } else {
        return { ...student, schoolId };
      }
    });
    this.setState({ selection });
    window.location.hash = `/schools/${schoolId}`;
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
                {students
                  .filter(student => student.schoolId !== school.id)
                  .map(student => (
                    <div key={student.id}>
                      <select onChange={ev => onChange(student, school.id)}>
                        <option>Select A Student To Ad</option>
                        <option value={student.Id}>
                          {student.firstName} {student.lastName}
                        </option>
                      </select>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
import Axios from "axios";

const stateToProps = state => state;

export default connect(stateToProps)(Schools);
