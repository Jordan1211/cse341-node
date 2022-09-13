const routes = require('express').Router();

routes.get('/', (req,res) => {
    res.send('Harrison Ford Gresham - plus a little dev test');
});

module.exports = routes;