
const express = require('express')
const router = express.Router()
const { loginUser, createUser, getMe } = require('../controllers/user')

const { protect } = require('../middlewares/auth')

 /**
  * @swagger
  * tags:
  *   name: Books
  *   description: The books managing API
  */
router.post('/login', loginUser)
router.post('/', createUser)
router.get('/me', protect, getMe)

module.exports = router