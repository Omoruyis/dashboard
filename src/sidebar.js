import React, { Component } from 'react'
import './app.css'
import { Link } from 'react-router-dom'


class Sidebar extends Component {
    state = {
        sidebar: ['Dashboard', 'Stations', 'Drivers', 'Trip Analysis'],
        prop: ['dashboard', 'stations', 'drivers', 'trip'],
        links: ['/', '/stations', '/drivers', '/trip']
    }

    render() {
        const { sidebar, prop, links } = this.state

        return (
            <div className='aside'>
                <ul>
                    {sidebar.map((cur, i) =>
                        <Link to={links[i]} className='sidebar-links'><li className={`sidebar-content ${this.props[prop[i]] ? this.props[prop[i]] : ''}`}><span className={this.props[prop[i]] ? 'green' : ''}></span>{cur}</li></Link>
                    )}
                </ul>
            </div>
        )
    }
}

export default Sidebar 