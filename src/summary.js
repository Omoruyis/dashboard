import React, { Component } from 'react';
import { FaAngleRight } from 'react-icons/fa'
import { IoIosArrowForward, IoIosArrowRoundBack } from "react-icons/io";

import {
    FaRegCalendarAlt
} from 'react-icons/fa'
import { IconContext } from "react-icons";
import { MdKeyboardBackspace } from "react-icons/md";


class Summary extends Component {

    display = (displayPage) => {
        this.props.display(displayPage)
    }


    render() {

        const { summary, buscode } = this.props
        const value = Object.keys(summary)

        return (
            <section className='section-container'>
                <p>Trip Analysis<span ><IconContext.Provider
                    value={{ className: 'right-arrow' }}
                >
                    <IoIosArrowForward />
                </IconContext.Provider></span>Fill Form</p>
                <div className='summary-heading'>
                    <p className='summary'>Summary</p>
                    <div onClick={() => this.display('next')}>
                        <span ><IconContext.Provider
                            value={{ className: 'right-arrow back-arrow' }}
                        >
                            <MdKeyboardBackspace />
                        </IconContext.Provider></span><span className='go-back'>GO BACK</span>
                    </div>
                </div>

                <div className='summary-details'>
                    <p className='summary'>Date</p>
                    <div className='summary-detail-head'>
                        <p className='summary-detail-grey'>Bus Code</p>
                        <p className='summary-detail-black'>{buscode}</p>
                    </div>

                    <div className='table1'>
                        <table style={{ width: '100%' }}>
                            <tr>
                                <th className='summary-detail-grey'>ARRIVAL TIME</th>
                                <th className='summary-detail-grey'>ARRIVED FROM</th>
                                <th className='summary-detail-grey'>DEPARTURE TIME</th>
                                <th className='summary-detail-grey' id='no-border'>DEPARTED TO</th>
                            </tr>
                            <tr>
                                {value.map((cur, i) => {
                                return <td className='table-detail' width='25%' key={i} id={`${i === (value.length - 1) ? 'no-border' : ''}`}>{summary[cur]}</td>
                                })}
                                {/* <td className='table-detail' width="25%">03/30/2019</td>
                                <td className='table-detail' width="25%">Ebute-Metta, Lagos</td>
                                <td className='table-detail' width="25%">03/30/2019</td>
                                <td className='table-detail' id='no-border' width="25%">Ebute-Meta, Lagos</td> */}
                            </tr>
                        </table>
                    </div>

                    <div className='table2'>
                        <table style={{ width: '100%' }}>
                            <tr>
                                <td className='summary-detail-grey table2-border' width='50%'>ARRIVAL TIME</td>
                                <td className='table-detail table2-border' id='table2-no-border'>{summary['arrivalTime']}</td>
                            </tr>
                            <tr className='tr'>
                                <td className='summary-detail-grey table2-border'>ARRIVED FROM</td>
                                <td className='table-detail table2-border' id='table2-no-border'>{summary['arrivedFrom']}</td>
                            </tr>
                            <tr className='tr'>
                                <td className='summary-detail-grey table2-border'>DEPARTURE TIME</td>
                                <td className='table-detail table2-border' id='table2-no-border'>{summary['departureTime']}</td>
                            </tr>
                            <tr className='tr'>
                                <td className='summary-detail-grey'>DEPARTED TO</td>
                                <td className='table-detail' id='table2-no-border'>{summary['departedTo']}</td>
                            </tr>
                        </table>
                    </div>



                </div>
            </section>
        )

    }
}

export default Summary;