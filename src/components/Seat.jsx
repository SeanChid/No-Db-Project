import React from "react"

const Seat = (props) => {

    const {isEditing, value, setSeat} = props

    return isEditing? (
        <div>
            <label>Enter Seat: </label>
            <input
                type='text'
                value={value}
                onChange={(e) => setSeat(e.target.value)}
            />
        </div>
    ) : (
        <div>
            <label>Seat: </label>
            {value}
        </div>
    )

}

export default Seat