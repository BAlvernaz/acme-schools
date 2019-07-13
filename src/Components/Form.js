import React from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../store';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      schoolId: null
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  render() {
    const { firstName, lastName, email, gpa, schoolId } = this.state;
    const { schools, onSubmit } = this.props;
    const { onChange } = this;
    return (
      <form onSubmit={() => onSubmit(this.state)}>
        <label htmlFor="firstName" className="inputLables">
          First Name <input name="firstName" value={firstName} onChange={onChange} />
        </label>
        <label htmlFor="lastName" className="inputLables">
          Last Name <input name="lastName" value={lastName} onChange={onChange} />
        </label>
        <label htmlFor="email" className="inputLables">
          Email <input name="email" value={email} onChange={onChange} />
        </label>
        <label htmlFor="gpa" className="inputLables">
          GPA <input name="gpa" value={gpa} onChange={onChange} />
        </label>
        <label htmlFor="schoolId">
          Enroll At{' '}
          <select name="schoolId" onChange={onChange} defaultValue={null}>
            <option >--Not Enrolled --</option>
            {schools.map(school => (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>            
            ))}
          </select>
        </label>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

const stateToProps = state => state;

const distpatchToProps = dispatch => {
  return {
    onSubmit: (student)=> dispatch(addStudent(student))
  }
}

export default connect(stateToProps, distpatchToProps)(Form);
