import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Input from '../smallComponents/inputs'
import Button from '../smallComponents/button'
import Select from '../smallComponents/select'
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

    // display = (displayPage) => {
    //     this.props.display(displayPage)
    // }

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
                            <Input type='date' valueClass='form-date' />
                        </div>
                    </div>

                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p id='first-form'>Station</p>
                        </label>
                        <div>
                            <Select
                                valueClass='form-date'
                                options={['Select Station', 'Station 1', 'Station 2']}
                            />
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
                            <Input type='text' value={buscode} valueClass='form-date' name='buscode' change={this.change} />
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Arrival Time</p>
                        </label>
                        <div>
                            <Input type='date' value={arrivalTime} valueClass='form-date' name='arrivalTime' change={this.change} />
                        </div>
                    </div>

                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Arrived From</p>
                        </label>
                        <div>
                            <Input type='text' value={arrivedFrom} valueClass='form-date' name='arrivedFrom' change={this.change} />
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Departure Time</p>
                        </label>
                        <div>
                            <Input type='date' value={departureTime} valueClass='form-date' name='departureTime' change={this.change} />
                        </div>
                    </div>

                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Departed To</p>
                        </label>
                        <div>
                            <Input type='text' value={departedTo} valueClass='form-date' name='departedTo' change={this.change} />
                        </div>
                    </div>
                </div>

                <Link to='/trip/nextpage'><Button valueClass='next-page' text='NEXT' onClick={() => {
                    this.updateCode(buscode)
                    this.updateSummary({ arrivalTime, arrivedFrom, departureTime, departedTo })
                    // this.display('next')
                }} />
                </Link>
                
            </section>
        )

    }
}

export default Trip1;