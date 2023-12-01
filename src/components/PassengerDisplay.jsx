import axios from 'axios'

import AddButton from './AddButton.jsx'
import Label from './Label.jsx'
import Entry from './Entry.jsx'

import { useState, useEffect } from 'react'

const PassengerDisplay = () => {
    return (
        <div>
            <Label />
            <Entry />
            <AddButton />
        </div>
    )
}

export default PassengerDisplay