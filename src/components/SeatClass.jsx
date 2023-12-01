import React from "react"

const SeatClass = (props) => {

    const {isEditing, value, setClass} = props

    return isEditing? (
        <div>
            <input
                type='text'
                value={value}
                onChange={(e) => setClass(e.target.value)}
            />
        </div>
    ) : (
        <div>
            {value}
        </div>
    )

}

export default SeatClass