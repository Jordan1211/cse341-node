const { results } = require("../db/connect");

const index = (req, res) => {
    res.send("Harrison Ford Gresham");
};

const contacts = (req, res) => {
    res.send(results);
};

module.exports = { index };
module.exports = { contacts };