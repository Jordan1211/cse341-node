const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongodb = require('./db/connect');


app.get('/', require('./routes'))