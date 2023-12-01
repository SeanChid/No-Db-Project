import Name from "./Name.jsx"
import SeatClass from "./seatClass.jsx"
import ModeButtons from "./ModeButtons.jsx"
import Seat from "./Seat.jsx"

import { useState } from 'react'
import axios from "axios"

const Entry = (props) => {
    const {initalEntryData, initialEditMode, deleteEntry, currentData, setCurrentData} = props

    const [editMode, setIsEditing] = useState(initialEditMode)
    const [name, setName] = useState(initalEntryData.name)
    const [seatClass, setSeatClass] = useState(initalEntryData.seatClass)
    const [seat, setSeat] = useState(initalEntryData.seat)

    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => setIsEditing(false)

    return (
        <div>
            <ModeButtons
                isEditing={editMode}
                changeEditMode={changeEditMode}
                changeNormalMode={changeNormalMode}
                deleteEntry={deleteEntry}
            />
            <Name
                isEditing={editMode}
                value={name}
                setName={setName}
            />
            <seatClass
                isEditing={editMode}
                value={seatClass}
                setSeatClass={setSeatClass}
            />
            <Seat
                isEditing={editMode}
                value={seat}
                setSeat={setSeat}
            />
        </div>
    )

}

export default Entry