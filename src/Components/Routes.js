import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Navbar from './NavBar'
import Home from './Home'
import Schools from './Schools'
import Students from './Students'
import { loadAll } from '../store'

class Routes extends React.Component {
  componentDidMount() {
    this.props.getAll()
  }
  render() {
    return (
      <HashRouter>
      <Route component={Navbar} />
      <div>
        <Route path="/home" component={Home} />
        <Route exact path="/schools" component={Schools} />
        <Route path="/schools/:id" component={Home} />
        <Route path="/students" component={Students} />
      </div>
    </HashRouter>
    )
  }
}

const dispatchToProps = dispatch => {
  return {
    getAll: () => dispatch(loadAll())
  }
}

export default connect(null, dispatchToProps)(Routes)
