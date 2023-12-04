import React from 'react'

const Label = (props) => {

    const {entry} = props

    return (
        <div>
            <h3>Passengers: </h3>
            {entry}
        </div>
    )
}

export default Label