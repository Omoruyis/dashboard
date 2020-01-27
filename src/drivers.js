import React, { Component, Fragment } from 'react';
import { CircularProgress } from '@material-ui/core';
import Modal from 'react-modal'
import Nav from './nav'
import Sidebar from './sidebar'
import Delete from './remove'
import View from './view'
import Input from './smallComponents/inputs'
import Button from './smallComponents/button'
import Text from './smallComponents/text'
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import ReactCollapsingTable from 'react-collapsing-table'

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
        ],
        openModal: false,
        data: ''
    }

    deleteData = (index) => {
        this.setState(state => ({
            tripDetails: state.tripDetails.filter((cur, i) => i !== index)
        }))
    }

    modalOpen = () => {
        this.setState({
            openModal: true
        })
    }

    closeModal = () => {
        this.setState({
            openModal: false
        })
    }


    render() {
        const { drivers, tripDetails, openModal, data } = this.state

        let rows = tripDetails.map((cur, i) => {
            return {
                id: i + 1,
                name: cur.name,
                busAssigned: cur.bus,
                passengers: cur.passengers,
                tripDate: cur.date,
                mileage: cur.mileage,
            }
        })



        let columns = [
            { accessor: 'id', label: '', priorityLevel: 1, position: 1, minWidth: 150, isVisible: true, sortable: false },
            { accessor: 'name', label: 'NAME', priorityLevel: 2, position: 2, minWidth: 150, isVisible: true, sortable: false },
            { accessor: 'busAssigned', label: 'BUS ASSIGNED', priorityLevel: 3, position: 3, minWidth: 150, isVisible: true, sortable: false },
            { accessor: 'passengers', label: 'PASSENGERS', priorityLevel: 4, position: 4, minWidth: 150, sortable: false },
            { accessor: 'tripDate', label: 'TRIP DATE', priorityLevel: 5, position: 5, minWidth: 150, isVisible: true, sortable: false },
            { accessor: 'mileage', label: 'MILEAGE', priorityLevel: 6, position: 6, minWidth: 150, isVisible: true, sortable: false },
            { accessor: 'delete', label: 'DELETE', priorityLevel: 7, position: 7, minWidth: 150, isVisible: true, sortable: false, CustomComponent: Delete },
            { accessor: 'view', label: 'VIEW', priorityLevel: 8, position: 8, minWidth: 150, isVisible: true, sortable: false, CustomComponent: View },
        ]

        const tableCallbacks = { delete: this.deleteData, view: this.modalOpen }

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
                        <Input type='date' defaultValue='2019-03-30' valueClass='drivers-date driver-heading' />
                        <Input type='date' defaultValue='2019-03-30' valueClass='drivers-date driver-heading' />
                        <Button valueClass='filter-button' text='FILTER' />
                        <div className='react-table'>
                            <ReactCollapsingTable
                                rows={rows}
                                columns={columns}
                                theme='my-collapsible-theme'
                                callbacks={tableCallbacks}
                            />
                        </div>


                        <Modal
                            className='modal'
                            overlayClassName='overlay'
                            isOpen={openModal}
                            onRequestClose={this.closePostModal}
                        >
                            <div className='modal-data'>
                                {
                                    data ? <p>{data}</p> : <div>
                                        <CircularProgress />
                                        <Button text='Close' onClick={this.closeModal} />
                                    </div>
                                }
                            </div>
                        </Modal>
                    </section>
                </div>

            </div>
        )
    }
}

export default Drivers;