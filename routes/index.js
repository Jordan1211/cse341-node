const { index } = require("../controllers");
const { contacts } = require("../controllers");

const routes = require('express').Router();

routes.get('/', index);
routes.get('/', contacts);

module.exports = routes;