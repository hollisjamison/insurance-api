const express = require('express')
// we need a controller here to get our data..
const { getEmployerByIdWithMembers } = require('./controllers/employersController.js')
const { getMemberById } = require('./controllers/membersController.js')

const app = express()

app.get('/api/employers/:id', getEmployerByIdWithMembers)

app.get('/api/member/:id', getMemberById)

app.listen(1337, () => {
    console.log('Listening at: http://localhost:1337/api/employers/1')
})