// https://fakerjs.dev/guide/
const { faker } = require('@faker-js/faker')
const Goal = require('../models/goal') 
const User = require('../models/user')
const mongoose = require('mongoose')

const seedUsers = async () => { 
    // ...
}

const seedGoals = async () => {
    try {
        await Goal.deleteMany()

        const quantity = 5
        const goals =  []
        let userOid = mongoose.Types.ObjectId('62a0c615dba91e244d117c7d')

        for (let i = 0 ; i < quantity ; i++)
            goals.push(new Goal({ 
                user: userOid,
                title: faker.random.alphaNumeric(12) 
            }))

        for (const goal of goals)
            Goal.create(goal)

        console.log('Goals seeded!')
    } catch (err) {
        console.log(err)
    }
}

module.exports = { seedGoals }