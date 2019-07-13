import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import { Provider } from 'react-redux'
import store from './store'
import Home from './Components/Home.js'
import Schools from './Components/Schools'
import Students from './Components/Students';

const App = () => {
  return (
    <Provider store={store} >
    <HashRouter>
      <Route component={Navbar} />
      <div>
        <Route path="/home" component={Home} />
        <Route exact path="/schools" component={Schools} />
        <Route path="/schools/:id" component={Home} />
        <Route path="/students" component={Students} />
      </div>
    </HashRouter>
    </Provider>
  )
}

export default App
