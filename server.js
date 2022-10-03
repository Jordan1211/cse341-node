require('dotenv').config();

const express = require('express');
const mongodb = require('./db/connect');
const contactsRoute = require('./routes/contacts');
const indexRoute = require('./routes/index');
const port = process.env.PORT;
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(bodyparser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/contacts', contactsRoute)
  .use(indexRoute);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
