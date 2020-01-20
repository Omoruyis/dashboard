import React, { Component } from 'react';
import Nav from './nav'
import Sidebar from './sidebar'
import ReactCollapsingTable from 'react-collapsing-table'

class Stations extends Component {
    state = {
        stations: 'current-link',
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
        const { stations, tripDetails } = this.state
        
        const rows = tripDetails.map((cur, i) => {
            return {
                id: i + 1,
                name: cur.name,
                busAssigned: cur.bus,
                passengers: cur.passengers,
                tripDate: cur.date,
                mileage: cur.mileage,
            }
        })


        const columns = [
            {accessor: 'id', label:'', priorityLevel: 1, position: 1, minWidth: 150, isVisible: true, sortable: false },
            { accessor: 'name', label: 'NAME', priorityLevel: 2, position: 2, minWidth: 150, isVisible: true, sortable: false },
            { accessor: 'busAssigned', label: 'BUS ASSIGNED', priorityLevel: 3, position: 3, minWidth: 150, isVisible: true, sortable: false },
            { accessor: 'passengers', label: 'PASSENGERS', priorityLevel: 4, position: 4, minWidth: 150, sortable: false },
            { accessor: 'tripDate', label: 'TRIP DATE', priorityLevel: 5, position: 5, minWidth: 150, isVisible: true, sortable: false },
            { accessor: 'mileage', label: 'MILEAGE', priorityLevel: 6, position: 6, minWidth: 150, isVisible: true, sortable: false },
        ]


        return (
            <div>
                <Nav />
                <div className='container'>
                    <Sidebar
                        stations={stations}
                    />
                    <section className='section-container'>
                    <ReactCollapsingTable 
                    rows={ rows } 
                    columns={ columns }
                    theme= 'my-collapsible-theme'
                    />
                    </section>

                </div>
            </div>
        )

    }
}

export default Stations;