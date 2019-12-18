import React, { Component } from 'react';
import Nav from './nav'
import Sidebar from './sidebar'
import naira from './images/naira.svg'

class Dashboard extends Component {
    state = {
        dashboard: 'current-link'
    }

    render() {
        return (
            <div>
                <Nav />
                <div className='container'>
                    <Sidebar
                        dashboard={this.state.dashboard}
                    />
                    <section className='section-container'>
                        <p>Dashboard</p>
                        <div className='dashboard-elements'>
                            <div className='dashboard-element'>
                                <p className='element-title'>Revenue</p>
                                <div className='element-value'>
                                    <div className='circle'>
                                        <img src={naira}></img>
                                    </div>
                                    <p className='amount'>32,500,000</p>
                                </div>
                            </div>
                            <div className='dashboard-element'>
                                <p className='element-title'>No of Buses</p>
                                <div className='element-value'>
                                    <div className='circle'>
                                        <div className='green-circle'>
                                            <div className='small-green-circle'></div>
                                        </div>
                                    </div>
                                    <p className='amount'>5,000</p>
                                </div>
                            </div>
                            <div className='dashboard-element'>
                                <p className='element-title'>Total Mileage</p>
                                <div className='element-value'>
                                    <div className='circle'>
                                        <div className='green-circle'>
                                            <div className='small-green-circle'></div>
                                        </div>
                                    </div>
                                    <p className='amount'>125000</p>
                                </div>
                            </div>
                        </div>

                        <div className='dashboard-elements2'>
                            <div className='dashboard-chart dashboard-element2'>
                                <p className='element-title'>Revenue Filter</p>
                            </div>
                            <div className='dashboard-stations dashboard-element2'>
                                <select className='stations'>
                                    <option>Select Station</option>
                                </select>
                                <div className='locations'>
                                    <p>Ebute-Meta</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        )

    }
}

export default Dashboard;