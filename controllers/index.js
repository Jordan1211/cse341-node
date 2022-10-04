const index = (req, res) => {
  res.send('Harrison Ford Gresham');
};

const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');
// const Post = require('../models/Post');

const getData = async (req, res) => {
  const result = await mongodb.getDb().db('contacts').collection('contacts').find();
  result.toArray().then((lists) => {
    // res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db('contacts')
    .collection('contacts')
    .findOne({ _id: ObjectId(req.params.id) });
  // res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
};

const createNewContact = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('contacts').collection('contacts').insertOne({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    });
    console.log('The contact was created');
    // res.setHeader('Content-Type', 'application/json');
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const updateById = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db('contacts')
      .collection('contacts')
      .updateOne(
        { _id: ObjectId(req.params.id) },
        {
          $set: {
            favoriteColor: req.body.favoriteColor
          }
        }
      );
    console.log('Your update has been successful');
    // res.setHeader('Content-Type', 'application/json');
    res.status(204).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

const deleteById = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db('contacts')
      .collection('contacts')
      .deleteOne({ _id: ObjectId(req.params.id) });
    console.log('The contact was Deleted');
    // res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

const deleteManyByName = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db('contacts')
      .collection('contacts')
      .deleteMany({ firstName: req.body.firstName });
    // res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while deleting the many contacts.');
  }
};

module.exports = {
  index,
  getData,
  getSingle,
  createNewContact,
  updateById,
  deleteById,
  deleteManyByName
};
