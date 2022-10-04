const mongodb = require('../database/db');

const getData = async (req, res) => {
  const result = await mongodb.getDb().db().collection('Professional').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = {
  getData
};
