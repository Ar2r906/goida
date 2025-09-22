const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') })

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

const info_routes = require('./routes/files');

app.use(express.json)
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/api', info_routes);

app.use((error, request, response, next) => {
    if(error instanceof SyntaxError) response.status(404).send({ message: 'Not Found!' }) 
    else next()
})

app.listen(port, () => {
    console.log(`Server is started on ${port} port`)
})