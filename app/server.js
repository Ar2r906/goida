const express = require('express')
require('dotenv').config({ path: '.env' })
const cors = require('cors')

app.use(express.json)
app.use(express.urlencoded({ extended: true }))
const port = process.env.port

app.use(
    cors({
        origin: ['http://localhost:8080']
    })
)

app.use((error, request, response, next) => {
    if(error instanceof SyntaxError) response.status(404).send({ message: 'Not Found!' }) 
    else next()
})

app.listen(port, () => {
    console.log(`Server is started on ${port} port`)
})