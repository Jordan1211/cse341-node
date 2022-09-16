const { index } = require("../controllers");

const routes = require('express').Router();

routes.use('/', index);

module.exports = routes;