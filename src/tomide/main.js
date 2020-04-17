import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Route } from 'react-router-dom'
import axios from 'axios'
import Personal from './personal'
import config from './config'

class Form extends Component {
    state= {
        firstpage: '',
        lastpage: ''
    }

    firstPage = (firstpage) => {
        this.setState({
            firstpage
        })
        this.props.history.push('/institution')
    }

    lasPage = (lastpage) => {
        this.setState({
            lastpage
        })
        this.submitForm()
    }

    submitForm = async () => {
        const data = {...this.state.firstapage, ...this.state.lastpage}
        await axios.post(config().url, data, config().headers)
                .then(res => console.log(res.data))
                .catch(e => console.log(e))
        // do whatever you wanna do after submitting the form
    }
    
    
    render() {
        

        return (
            <div className="main_container">
                <div>
                    <p>Honeywell group</p>
                </div>
                <div>
                    <Route exact path='/basic-information' render={(props) => <Personal {...props} firstPage={this.firstPage} />}></Route>

                    <Route path='/institution' render={(props) => <LastPage {...props} lastPage={this.lastPage} />}></Route>
                </div>
            </div>
        )
    }
}

export default Form