import React from "react";
import { connect } from "react-redux";
import { selectStudent } from '../store' 

class SelectStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: ""
    };
    
  }

  render() {
    const { selection } = this.state;
    const { students, school, onChange } = this.props;
    console.log(this.state)
    return (
      <select value={selection} onChange={ } >
        <option value='null'>-- Add Student ---</option>
        {students.filter(student => student.schoolId !== school.id).map(student => (
          <option key={student.id} value={student.id}>
            {student.firstName} {student.lastName}
          </option>
        )
        )}
      </select>
    );
  }
}





export default SelectStudent;
