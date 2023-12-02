import React from "react"

const Seat = (props) => {

    const {isEditing, value, setSeat} = props

    return isEditing? (
        <div>
            <input
                type='text'
                value={value}
                onChange={(e) => setSeat(e.target.value)}
            />
        </div>
    ) : (
        <div>
            {value}
        </div>
    )

}

export default Seat