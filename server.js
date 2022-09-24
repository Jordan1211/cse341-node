require('dotenv').config();

const express = require('express');
const mongodb = require('./db/connect');
const contactsRoute = require("./routes/contacts");
const port = process.env.PORT;
const app = express();
const bodyparser = require('body-parser');

app
  .use(bodyparser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/contacts", contactsRoute);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});