// import DATA from './db.json' assert { type:'json' }
// db.json acts up with delete function

let DATA = [
    {id:0, name:'James', seatClass:'First', seat:'1A'},
    {id:1, name:'Charolette', seatClass:'Economy', seat:'8D'},
    {id:2, name:'Charlie', seatClass:'Economy', seat:'10B'},
    {id:3, name:'Sarah', seatClass:'First', seat:'4F'},
]

let globalId = 4

const handlerFunctions = {

    getPassengers: (req, res) => {
        res.send(DATA)
    },

    addPassenger: (req, res) => {
        const {name} = req.body
        const newEntry = {
            id: globalId,
            name,
            seatClass:'',
            seat:''
        }

        DATA.push(newEntry)

        globalId++

        res.send(DATA)
    },

    deletePassenger: (req, res) => {
        const {id} = req.params

        const filteredData = DATA.filter((el) => el.id !== +id)

        DATA = filteredData

        res.send(DATA)
    },

    editPassenger: (req, res) => {
        const {id} = req.params
        const {name, seatClass, seat} = req.body

        const editEntry = DATA.find((passenger) => passenger.id === +id)

        editEntry.name = name
        editEntry.seatClass = seatClass
        editEntry.seat = seat

        res.send(DATA)
    }

}

export default handlerFunctions