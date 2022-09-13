const routes = require('express').Router();

routes.get('/', (req,res) => {
    res.send('Harrison Ford Gresham');
});

module.exports = routes;