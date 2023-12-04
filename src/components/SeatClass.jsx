import React from "react"

const SeatClass = (props) => {

    const {isEditing, value, setSeatClass} = props

    return isEditing? (
        <div>
            <label>Enter Class: </label>
            <input
                type='text'
                value={value}
                onChange={(e) => setSeatClass(e.target.value)}
            />
        </div>
    ) : (
        <div>
            <label>Class: </label>
            {value}
        </div>
    )

}

export default SeatClass