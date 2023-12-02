import React from "react"

const SeatClass = (props) => {

    const {isEditing, value, setSeatClass} = props

    return isEditing? (
        <div>
            <input
                type='text'
                value={value}
                onChange={(e) => setSeatClass(e.target.value)}
            />
        </div>
    ) : (
        <div>
            {value}
        </div>
    )

}

export default SeatClass