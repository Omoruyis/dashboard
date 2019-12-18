import React, { Component } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import {
    FaRegCalendarAlt
} from 'react-icons/fa'
import { IconContext } from "react-icons";

class Trip2 extends Component {

    display = (displayPage) => {
        this.props.display(displayPage)
    }

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
                            <input type='date' defaultValue='Select Date' className='form-date' />
                        </div>
                    </div>

                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p id='first-form'>Station</p>
                        </label>
                        <div>
                            <select className='form-date'>
                                <option>Ikeja</option>
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
                            <p>Captain Full Name</p>
                        </label>
                        <div>
                            <input type='text' className='form-date' />
                        </div>
                    </div>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Staff ID</p>
                        </label>
                        <div>
                            <input type='text' className='form-date' />
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Trip Type</p>
                        </label>
                        <div>
                            <select className='form-date'>
                                <option>Sub Trip</option>
                            </select>
                        </div>
                    </div>

                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Operator</p>
                        </label>
                        <div>
                            <input type='text' className='form-date' />
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Number Of Passengers</p>
                        </label>
                        <div>
                            <input type='text' className='form-date' />
                        </div>
                    </div>

                    <div className='form-detail' id='checkbox'>
                        <label className='form-detail-title'>
                            <p>AC</p>
                        </label>
                        <div className='checkbox'>
                            <input type='checkbox' />
                            <p>YES</p>
                            <input type='checkbox' />
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
                            <input type='text' className='form-date' />
                        </div>
                    </div>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Bus Loaded By</p>
                        </label>
                        <div>
                            <input type='text' className='form-date' />
                        </div>
                    </div>
                </div>


                <button className='next-page' id='previous-page' onClick={() => this.display('previous')}>PREVIOUS</button>

                <button className='next-page' id='summary' onClick={() => this.display('summary')}>VIEW SUMMARY</button>
            </section>

        )

    }
}

export default Trip2;