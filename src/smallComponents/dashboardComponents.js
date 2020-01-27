import React, { Component } from 'react';
import naira from '../images/naira.svg'

class DashboardComponents extends Component {


    render() {
        const { contents } = this.props
        const { value, valueClass, wrapperClass, titleClass, title, valueWrapper } = contents

        return (
            <div className={wrapperClass}>
                <p className={titleClass}>{title}</p>
                <div className={valueWrapper}>
                    <div className='circle'>
                        <img src={naira}></img>
                    </div>
                    <p className={valueClass}>{value}</p>
                </div>
            </div>
        )
    }
}

export default DashboardComponents;