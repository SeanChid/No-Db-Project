import Name from "./Name.jsx"
import SeatClass from "./seatClass.jsx"
import ModeButtons from "./ModeButtons.jsx"
import Seat from "./Seat.jsx"

import { useState } from 'react'
import axios from "axios"

const Entry = (props) => {
    const {initialEntryData, initialEditMode, deleteEntry, currentData, setCurrentData} = props

    const [editMode, setIsEditing] = useState(initialEditMode)
    const [name, setName] = useState(initialEntryData.name)
    const [seatClass, setSeatClass] = useState(initialEntryData.seatClass)
    const [seat, setSeat] = useState(initialEntryData.seat)

    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => {

        const bodyObj = {
            name,
            seatClass,
            seat
        }

        axios.put(`/passenger/${initialEntryData.id}`, bodyObj)
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
            setIsEditing(false)
        }).catch((theseHands) => {
            console.log(theseHands)
        })
    }

    return (
        <div>
            <Name
                isEditing={editMode}
                value={name}
                setName={setName}
            />
            <SeatClass
                isEditing={editMode}
                value={seatClass}
                setSeatClass={setSeatClass}
            />
            <Seat
                isEditing={editMode}
                value={seat}
                setSeat={setSeat}
            />
            <ModeButtons
                isEditing={editMode}
                changeEditMode={changeEditMode}
                changeNormalMode={changeNormalMode}
                deleteEntry={deleteEntry}
            />
        </div>
    )

}

export default Entry