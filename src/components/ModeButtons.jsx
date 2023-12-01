import React from "react"

const ModeButtons = (props) => {

    const {isEditing, changeEditMode, changeNormalMode, deleteEntry} = props

    if (isEditing) {
        return <div>
            <button onClick={changeNormalMode}>Save</button>
        </div>
    }else{
        return <div>
            <button onClick={deleteEntry}>Delete</button>
            <button onClick={changeEditMode}>Edit</button>
        </div>
    }

}

export default ModeButtons