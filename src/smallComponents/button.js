import React, { Component } from 'react';

class Button extends Component {


    render() {
        const { valueClass, id, onClick, text } = this.props

        return (
        <button className={valueClass} id={id} onClick={onClick}>{text}</button>
        )
    }
}

export default Button;