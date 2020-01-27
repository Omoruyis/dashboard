import React, { Component } from 'react';
import { MdEdit } from "react-icons/md"

const View = ({ CustomFunction }) => {
    return (
        <div>
            <MdEdit onClick={() => {
                CustomFunction()
            }} />
        </div>
    )
}

export default View;