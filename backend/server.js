const express = require('express')
const colors = require('colors');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middlewares/error')
const connectDB = require('./config/db')
const seed = require('./config/seed')

connectDB()
seed.seedGoals()

const app = express()
const cors = require('cors')
app.use(cors({ origin: 'http://localhost:5173' }))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goal'))
app.use('/api/users', require('./routes/user'))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});