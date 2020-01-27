import React, { Component } from 'react';
import Nav from './nav'
import Sidebar from './sidebar'
import DashboardComponent from './smallComponents/dashboardComponents'
import Select from './smallComponents/select'
import Text from './smallComponents/text'

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
                        <Text text='Dashboard' textClass='section-container-p' TagName='p'/>
                        <div className='dashboard-elements'>
                            <DashboardComponent
                                contents={{
                                    value:'32,500,000',
                                    valueClass:'amount',
                                    valueWrapper:'element-value',
                                    wrapperClass:'dashboard-element',
                                    titleClass:'element-title',
                                    title:'Revenue',
                                }}   
                            />
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
                                <Select
                                valueClass='stations'
                                options={['Select Station', 'Station 1']} 
                                />
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