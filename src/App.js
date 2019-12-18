import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Dashboard from './dashboard'
import Drivers from './drivers'
import Stations from './stations'
import Trip from './trip'


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Dashboard} />
        <Route path='/stations' component={Stations} />
        <Route path='/drivers' render={() => {
          return <Drivers />
        }} />
        <Route path='/trip' component={Trip} />
      </div>
    )

  }
}

export default App;

