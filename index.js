require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const { databaseservice } = require('./base_de_datos/databaseservice');

const app = express();
app.use(bodyParser.json());
const dbService = databaseservice();

require('./routes')(app,dbService);


app.listen (3004, function() {
    console.log(`Escuchado en el puerto 80...`)
});
