import { createStore } from 'redux'

const initState = {
  students: [],
  schools: []
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    
  }
  return state
}

const store = createStore(reducer)

export default store
