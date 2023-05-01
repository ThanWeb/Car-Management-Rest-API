const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config()
const app = express()
const corsOption = {
    origin: 'http://localhost:3000'
}

const indexRouter = require('../config/routes/index')
const usersRouter = require('../config/routes/users')
const carsRouter = require('../config/routes/cars')

app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOption))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/cars', carsRouter)

module.exports = app
