import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Dashboard from './dashboard'
import Drivers from './drivers'
import Stations from './stations'
import Trip from './trip' 
import Trip2 from './trip/trip2' 


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Dashboard} />
        <Route path='/stations' component={Stations} />
        <Route path='/drivers' component={Drivers} />
        <Route path='/trip' component={Trip} />
        {/* <Route path='/trip/nextpage' component={Trip2}/> */}
      </div>
    )

  }
}

export default App;

