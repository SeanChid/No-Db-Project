// Import all packages
import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express"

//Setup Express instance
const app = express()

// Setup Middleware
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

// Routes Go Here
import handlerFunctions from "./controller.js";
const {getPassengers, addPassenger, deletePassenger, editPassenger} = handlerFunctions

app.get('/passengers', getPassengers)
app.post('/passenger', addPassenger)
app.delete('/passenger/:id', deletePassenger)
app.put('/passenger/:id', editPassenger)

// Open door to server
ViteExpress.listen(app, 5000, () => console.log("5000 is up and running."))