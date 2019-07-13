import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const GET_ALL = 'GET_ALL';
const GOING_TO_SCHOOL = 'GOING_TO_SCHOOL';
const NEW_STUDENT = 'NEW_STUDENT';
const DESTROY_STUDENT = 'DESTROY_STUDENT';

const newStudent = student => ({
  type: NEW_STUDENT,
  student
});

const selectedSchool = data => ({
  type: GOING_TO_SCHOOL,
  data
});

const deletedStudent = studentId => ({
  type: DESTROY_STUDENT,
  studentId
});

export const addStudent = student => {
  return async dispatch => {
    const response = await axios.post('/api/students', student);
    dispatch(newStudent(response.data));
  };
};

export const selectStudent = data => {
  return async dispatch => {
    await axios.put(`/api/students/${data.studentId}`, {
      schoolId: data.schoolId
    });
    dispatch(selectedSchool(data));
  };
};

export const destroyStudent = studentId => {
  return async dispatch => {
    const response = await axios.delete(`/api/students/${studentId}`);
    console.log(response.data);
    dispatch(deletedStudent(response.data));
  };
};

const initState = {
  students: [],
  schools: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL:
      state = { students: action.students, schools: action.schools };
      break;
    case GOING_TO_SCHOOL:
      const students = state.students.map(student => {
        return student.id === action.data.studentId
          ? { ...student, schoolId: action.data.schoolId }
          : student;
      });
      state = { ...state, students };
      break;
    case NEW_STUDENT:
      state = { ...state, students: [...state.students, action.product] };
      break;
    case DESTROY_STUDENT:
      state = {
        ...state,
        students: state.students.filter(
          student => student.id !== action.studentId
        )
      };
      break;
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(thunk));

const start = async () => {
  const students = axios.get('/api/students');
  const schools = axios.get('/api/schools');
  const response = await Promise.all([students, schools]);
  store.dispatch({
    type: GET_ALL,
    students: response[0].data,
    schools: response[1].data
  });
};

start();

export default store;
