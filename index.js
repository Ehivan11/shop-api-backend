require('dotenv').config()
require('./mongo')

const express = require('express')
const app = express()
const cors = require('cors')
const Fruit = require('./models/Fruit')


app.use(cors())
app.use(express.json())

let fruits = []

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type' : 'application/json' })
//     response.end(JSON.stringify(Notes))
// })

app.get('/', (request, response) => {
  response.send('<h1>Hello Wordl!</h1>')
})

app.get('/fruits', (request, response) => {
  Fruit.find({}).then(fruits => {
    response.json(fruits)
  })
})



app.listen(process.env.PORT)
