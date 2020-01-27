import React, { Component } from 'react';

class Select extends Component {


    render() {
        const { valueClass, options } = this.props

        return (
            <select className={valueClass}>
                {options.map((option, index) =>
                    <option key={index} disabled={index === 0 ? true : false} selected={index === 0 ? true : false}>{option}</option>
                )}
            </select>
        )
    }
}

export default Select;