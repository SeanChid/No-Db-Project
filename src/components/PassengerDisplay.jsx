import axios from 'axios'

import AddButton from './AddButton.jsx'
import Label from './Label.jsx'
import Entry from './Entry.jsx'

import { useState, useEffect } from 'react'

const PassengerDisplay = () => {

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        axios.get('/passengers')
        .then((res) => {
            setCurrentData(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })

    }, [])

    const addEntry = () => {

        axios.post('/passenger', {name: 'Enter Name'})
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })

    }

    const deleteEntry = (id) => {

        axios.delete(`/passenger/${id}`)
        .then((res) => {
            setCurrentData(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })

    }

    const row = currentData.map((el) => <Entry
        initialEntryData={el}
        initialEditMode={false}
        key={el.id}
        deleteEntry={() => deleteEntry(el.id)}
        currentData={currentData}
        setCurrentData={setCurrentData}
    />)

    return (
        <div>
            <Label entry={row}/>
            <AddButton addEntry={addEntry}/>
        </div>
    )
}

export default PassengerDisplay