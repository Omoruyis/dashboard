import React, { Component } from 'react';
import { MdDelete } from "react-icons/md"

const Delete = ({ row, accessor, cellIndex, rowIndex, CustomFunction, }) => {
    return (
        <div>
            <MdDelete onClick={() => {
                CustomFunction(rowIndex)
            }} />
        </div>
    )
}

export default Delete;