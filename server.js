require('dotenv').config();

const express = require('express');
const mongodb = require('./db/connect');
const contactsRoute = require('./routes/contacts');
const indexRoute = require('./routes/index');
const port = process.env.PORT;
const app = express();
const bodyparser = require('body-parser');
// const mongoose = require('mongoose');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app
  .use(bodyparser.json())
  .use(cors())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow_methods', 'GET, POST, PUT, DELETE');
    next();
  })
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
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
