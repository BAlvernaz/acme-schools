import { createStore } from "redux";
import axios from "axios";

const GET_ALL = "GET_ALL";

const initState = {
  students: [],
  schools: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL:
      state = { students: action.students, schools: action.schools };
      break;
  }
  return state;
};

const start = async () => {
  const students = axios.get("/api/students");
  const schools = axios.get("/api/schools");
  const response = await Promise.all([students, schools]);
  store.dispatch({
    type: GET_ALL,
    students: response[0].data,
    schools: response[1].data
  });
};

start();

const store = createStore(reducer);

export default store;
