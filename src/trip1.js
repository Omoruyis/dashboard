import React, { Component } from 'react';
import { IoIosArrowForward } from "react-icons/io";

import {
    FaRegCalendarAlt
} from 'react-icons/fa'
import { IconContext } from "react-icons";

class Trip1 extends Component {

    state = {
        buscode: '',
        arrivalTime: '',
        arrivedFrom: '',
        departureTime: '',
        departedTo: '', 
    }

    display = (displayPage) => {
        this.props.display(displayPage)
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateSummary = (summary) => {
        this.props.updateSummary(summary)
    }

    updateCode = (code) => {
        this.props.updateCode(code)
    }

    render() {
        const { buscode, arrivalTime, arrivedFrom, departureTime, departedTo } = this.state

        return (
            <section className='section-container'>
                <p>Trip Analysis<span ><IconContext.Provider
                    value={{ className: 'right-arrow' }}
                >
                    <IoIosArrowForward />
                </IconContext.Provider></span>Fill Form</p>
                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p id='first-form'>Date</p>
                        </label>
                        <div>
                            <input type='date' defaultValue='Select Date' className='form-date' />
                        </div>
                    </div>

                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p id='first-form'>Station</p>
                        </label>
                        <div>
                            <select className='form-date'>
                                <option>Select Station</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='form-detail-title' id='form-detail-paragraph'>Please complete the following fields</p>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Bus Code</p>
                        </label>
                        <div>
                            <input type='text' className='form-date' value={buscode} name='buscode' onChange={this.change} />
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Arrival Time</p>
                        </label>
                        <div>
                            <input type='date' defaultValue='Select Date' className='form-date' value={arrivalTime} name='arrivalTime' onChange={this.change} />
                        </div>
                    </div>

                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Arrived From</p>
                        </label>
                        <div>
                            <input type='text' className='form-date' value={arrivedFrom} name='arrivedFrom' onChange={this.change} />
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Departure Time</p>
                        </label>
                        <div>
                            <input type='date' defaultValue='Select Date' className='form-date' value={departureTime} name='departureTime' onChange={this.change} />
                        </div>
                    </div>

                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Departed To</p>
                        </label>
                        <div>
                            <input type='text' className='form-date' value={departedTo} name='departedTo' onChange={this.change} />
                        </div>
                    </div>
                </div>


                <button className='next-page' onClick={() => {
                    this.updateCode(buscode)
                    this.updateSummary({ arrivalTime, arrivedFrom, departureTime, departedTo })
                    this.display('next')
                }}>NEXT</button>

            </section>
        )

    }
}

export default Trip1;