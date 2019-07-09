import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store} >
    <HashRouter>
      <Route component={Navbar} />
    </HashRouter>
    </Provider>
  )
}

export default App
