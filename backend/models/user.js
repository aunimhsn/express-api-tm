const mongoose = require('mongoose')

 /**
  * @swagger
  * tags:
  *   name: Books
  *   description: The books managing API
  */

const user = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
}, { timestamps: true })

module.exports = mongoose.model('User', user)