import React, { Component } from 'react'
import './app.css'
import image from './images/image.png'
import Input from './smallComponents/inputs'


class Nav extends Component {
    toggle = (e) => {
        document.querySelector('.toggle-btn').classList.toggle('margin-top')
        document.querySelector('.aside').classList.toggle('active')
        document.querySelector('.line-3').classList.toggle('line3')
        document.querySelector('.line-2').classList.toggle('full')
        document.querySelector('.line-2').classList.toggle('rotate-right')
        document.querySelector('.line-1').classList.toggle('rotate')
    }

    render() { 
        return (
            <nav className='nav'>
                <div className='toggle-btn' onClick={this.toggle}>
                    <span className='line-1 rot'></span>
                    <span className='line-2 rot'></span>
                    <span className='line-3 '></span>
                </div>
                <img src={image} className="App-logo" alt="logo" />
                <label className='label'>
                    <Input type='text' placeholder='Type here to search' valueClass='search'/>
                </label>
            </nav>
        )
    }
}

export default Nav 