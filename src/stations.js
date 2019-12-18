import React, { Component } from 'react';
import Nav from './nav'
import Sidebar from './sidebar'

class Stations extends Component {
    state = {
        stations: 'current-link'
    }

    render() {
        return (
            <div>
                <Nav />
                <div className='container'>
                    <Sidebar
                        stations={this.state.stations}
                    />
                </div>
            </div>
        )

    }
}

export default Stations;