import React from 'react'

const Name = (props) => {

    const {isEditing, value, setName} = props

    return isEditing? (
        <div>
            <input
            type='text'
            value={value}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
    ) : (
        <div>
            {value}
        </div>
    )

}

export default Name