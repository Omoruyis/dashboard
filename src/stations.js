import React, { Component } from 'react';
import Nav from './nav'
import Sidebar from './sidebar'

class Stations extends Component {
    state = {
        stations: 'current-link'
    }



    render() {
        const { stations } = this.state 

        return (
            <div>
                <Nav />
                <div className='container'>
                    <Sidebar
                        stations={stations}
                    />
                    <section className='section-container'>
                    </section>

                </div>
            </div>
        )

    }
}

export default Stations;