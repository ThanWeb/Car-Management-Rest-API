const express = require('express')
const morgan = require('morgan')

const app = express()

const indexRouter = require('../config/routes/index')
const usersRouter = require('../config/routes/users')
const carsRouter = require('../config/routes/cars')

app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/cars', carsRouter)

module.exports = app
