const index = (req, res) => {
    res.send("Harrison Ford Gresham");
};

const mongodb = require('../db/connect');
const { ObjectId } = require("mongodb");

const getData = async (req, res, next) => {
    const result = await mongodb.getDb().db('contacts').collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists); 
    });
};

const getDataById = async (req, res, next) => {
  const result = await mongodb.getDb().db('contacts').collection('contacts').findOne({_id: ObjectId(req.params.id)});
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result); 
};

module.exports = {
    getData,
    getDataById,
    index
};
