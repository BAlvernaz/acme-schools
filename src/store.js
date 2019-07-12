import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunkMiddleware from 'redux-thunks'

const GET_ALL = 'GET_ALL';
const GOING_TO_SCHOOL = 'GOING_TO_SCHOOL'


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
        return student.id === action.studentId
        ? {...student, schooId: action.schooId}
        : student
      })
      return {...state, students}
  }
  return state;
};

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

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
