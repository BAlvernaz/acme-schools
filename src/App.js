import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import { Provider } from 'react-redux'
import store from './store'
import Home from './Components/Home.js'
import Schools from './Components/Schools'

const App = () => {
  return (
    <Provider store={store} >
    <HashRouter>
      <Route component={Navbar} />
      <div>
        <Route path="/home" component={Home} />
        <Route path="/schools" component={Schools} />

      </div>
    </HashRouter>
    </Provider>
  )
}

export default App
