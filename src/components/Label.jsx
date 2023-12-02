import React from 'react'

const Label = (props) => {

    const {entry} = props

    return (
        <div id='passenger'>
            <h3>Passengers: {entry}</h3>
        </div>
    )
}

export default Label