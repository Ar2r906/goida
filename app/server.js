const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') })

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger', 'swagger.yaml'));


const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT

const info_routes = require('./routes/files');
const pars_sites = require('./routes/parser')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/api/back', info_routes);
app.use('/api/back', pars_sites);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((error, request, response, next) => {
    if(error instanceof SyntaxError && error.status === 400 && 'body' in error) 
      response.status(400).send({ message: 'Bad JSON' }) 
    else {
      next()
    }
})

app.listen(port, () => {
    console.log(`Server is started on ${port} port`)
})