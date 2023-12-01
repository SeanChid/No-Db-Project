import React from "react"

const AddButton = (props) => {
    
    const {addEntry} = props

    return (
        <div>
            <div></div>
            <button onClick={addEntry}>Add</button>
        </div>
    )
}

export default AddButton