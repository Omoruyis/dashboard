import React, { Component } from 'react';
import Nav from './nav'
import Sidebar from './sidebar'
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";

class Drivers extends Component {
    state = {
        drivers: 'current-link',
        tripDetails: [
            { name: 'Olalekan Ojo', bus: '#1233334', passengers: 200, date: '08/21/2019', mileage: 1200 },
            { name: 'Marian Hassan', bus: '#1233334', passengers: 200, date: '08/21/2019', mileage: 1200 },
            { name: 'Olalekan Ojo', bus: '#1233334', passengers: 200, date: '08/21/2019', mileage: 1200 },
            { name: 'Olalekan Ojo', bus: '#1233334', passengers: 200, date: '08/21/2019', mileage: 1200 },
            { name: 'Olalekan Ojo', bus: '#1233334', passengers: 200, date: '08/21/2019', mileage: 1200 },
            { name: 'Olalekan Ojo', bus: '#1233334', passengers: 200, date: '08/21/2019', mileage: 1200 },
            { name: 'Olalekan Ojo', bus: '#1233334', passengers: 200, date: '08/21/2019', mileage: 1200 },
        ]
    }

    render() {
        const { drivers, tripDetails } = this.state
        return (
            <div>
                <Nav />
                <div className='container'>
                    <Sidebar
                        drivers={drivers}
                    />
                    <section className='section-container'>
                        <p>Driver<span ><IconContext.Provider
                            value={{ className: 'right-arrow' }}
                        >
                            <IoIosArrowForward />
                        </IconContext.Provider></span>Driver Details</p>
                        <label>
                            <input type='date' defaultValue='2019-03-30' className='drivers-date driver-heading' />
                        </label>
                        <label>
                            <input type='date' defaultValue='2019-03-30' className='drivers-date driver-heading' />
                        </label>
                        <button className='filter-button driver-heading'>FILTER</button>
                        <div>
                            <div className='details-description'>
                                <p>NAME</p>
                                <p>BUS ASSIGNED</p>
                                <p>PASSENGERS</p>
                                <p>TRIP DATE</p>
                                <p>MILEAGE</p>
                            </div>
                            <div>
                                {tripDetails.map((cur, i) => (
                                    <div className='trip-details'>
                                        <p className='trip-detail' style={{ color: '#8798AD', width: '38px' }}>{i + 1}</p>
                                        <div className='collection'>
                                            <p className='trip-detail passenger-name'>{cur.name}</p>
                                            <p className='trip-detail'>{cur.bus}</p>
                                            <p className='trip-detail'>{cur.passengers}</p>
                                            <p className='trip-detail'>{cur.date}</p>
                                            <p className='trip-detail'>{cur.mileage}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default Drivers;