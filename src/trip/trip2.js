import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import {
    FaRegCalendarAlt
} from 'react-icons/fa'
import { IconContext } from "react-icons";
import Input from '../smallComponents/inputs'
import Button from '../smallComponents/button'
import Select from '../smallComponents/select'

class Trip2 extends Component {

    // display = (displayPage) => {
    //     this.props.display(displayPage)
    // }

    render() {

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
                                options={['Select Station', 'Ikeja', 'Station 2']}
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
                            <p>Captain Full Name</p>
                        </label>
                        <div>
                            <Input type='text' valueClass='form-date' />
                        </div>
                    </div>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Staff ID</p>
                        </label>
                        <div>
                            <Input type='text' valueClass='form-date' />
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Trip Type</p>
                        </label>
                        <div>
                            <Select
                                valueClass='form-date'
                                options={['Sub Trip', 'Long Trip', 'Short Trip']}
                            />
                        </div>
                    </div>

                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Operator</p>
                        </label>
                        <div>
                            <Input type='text' valueClass='form-date' />
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Number Of Passengers</p>
                        </label>
                        <div>
                            <Input type='text' valueClass='form-date' />
                        </div>
                    </div>

                    <div className='form-detail' id='checkbox'>
                        <label className='form-detail-title'>
                            <p>AC</p>
                        </label>
                        <div className='checkbox'>
                            <Input type='checkbox' />
                            <p>YES</p>
                            <Input type='checkbox' />
                            <p>NO</p>
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Mileage</p>
                        </label>
                        <div>
                            <Input type='text' valueClass='form-date' />
                        </div>
                    </div>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Bus Loaded By</p>
                        </label>
                        <div>
                            <Input type='text' valueClass='form-date' />
                        </div>
                    </div>
                </div>

                <Link to="/trip">
                    <Button valueClass='next-page' id='previous-page' text='PREVIOUS' 
                    // onClick={() => {
                    //     this.display('previous')
                    // }} 
                    />
                </Link>

                <Link to="/trip/summary">
                    <Button valueClass='next-page' id='summary' text='VIEW SUMMARY' 
                    // onClick={() => {
                    //     this.display('summary')
                    // }} 
                    />
                </Link>
            </section>

        )

    }
}

export default Trip2;