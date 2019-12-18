import React, { Component } from 'react';
import Nav from './nav'
import Sidebar from './sidebar'
import Trip1 from './trip1'
import Trip2 from './trip2'
import Summary from './summary'

class Trip extends Component {
    state = {
        trip: 'current-link',
        displayPage: 'previous',
        buscode: '', 
        summary: {}
    }

    display = (displayPage) => {
        this.setState({
            displayPage
        })
    }

    updateSummary = (summary) => {
        this.setState({ summary })
    }

    updateCode = (buscode) => {
        this.setState({ buscode})
    }

    render() {
        const { displayPage, trip, summary, buscode } = this.state
        console.log(this.state)

        return (
            <div>

                <Nav />
                <div className='container'>
                    <Sidebar
                        trip={trip}
                    />
                    {displayPage === 'previous' ? <Trip1
                        updateSummary={this.updateSummary}
                        updateCode={this.updateCode}
                        display={this.display}
                    /> : displayPage === 'next' ? <Trip2
                        display={this.display}
                    /> : <Summary
                                display={this.display}
                                buscode={this.state.buscode}
                                summary={this.state.summary}
                            />}
                </div>
            </div>
        )

    }
}

export default Trip;