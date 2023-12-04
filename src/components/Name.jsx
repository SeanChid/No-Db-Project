import React from 'react'

const Name = (props) => {

    const {isEditing, value, setName} = props

    return isEditing? (
        <div>
            <label>Enter Name: </label>
            <input
                type='text'
                value={value}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    ) : (
        <div>
            <label>Name: </label>
            {value}
        </div>
    )

}

export default Name