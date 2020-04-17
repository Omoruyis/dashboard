import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LastPage extends Component {

    submit = () => {
        const personalInformation = {
            firstName: this.firstName.value,
            dob: this.dob.value,
            latName: this.lastName.value,
            email: this.email.value, 
            phoneNumber: this.number.value,
        }
        this.props.lastPage(personalInformation)
    }

    render() {

        return (
            <section className='section-container'>
                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p id='first-form'>First Name</p>
                        </label>
                        <div>
                            <Input ref={el => this.firstName = el} type='text' valueClass='form-date' />
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Last name</p>
                        </label>
                        <div>
                            <Input type='text' ref={el => this.lastName = el} valueClass='form-date' name='lastname' />
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Date of birth</p>
                        </label>
                        <div>
                            <Input type='date' ref={el => this.dob = el} valueClass='form-date' />
                        </div>
                    </div>

                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Email Address</p>
                        </label>
                        <div>
                            <Input type='email' ref={el => this.email = el} valueClass='form-date'/>
                        </div>
                    </div>
                </div>

                <div className='form-details'>
                    <div className='form-detail'>
                        <label className='form-detail-title'>
                            <p>Phone Number</p>
                        </label>
                        <div>
                            <Input type='number' ref={el => this.number = el} valueClass='form-date' />
                        </div>
                    </div>
                </div>

                <button onClick={this.submit()}>
                    Submit 
                </button>
                
            </section>
        )

    }
}

export default LastPage;