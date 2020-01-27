import React, { Component } from 'react';

class Input extends Component {


    render() {
        const { type, valueClass, placeholder, value, change, name } = this.props

        return (
            <input type={type} className={valueClass} placeholder={placeholder} value={value} onChange={change} name={name}/>
        )
    }
}

export default Input;