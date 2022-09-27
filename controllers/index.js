const index = (req, res) => {
    res.send("Harrison Ford Gresham");
};

const mongodb = require('../db/connect');
const { ObjectId } = require("mongodb");
const Post = require('../models/Post');


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

const createNewContact = async (req,res) => {
  const result = await mongodb.getDb().db('contacts').collection('contacts').insertOne({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
});

try{
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(result); 
  }catch(err){
    res.json({message:err +""});
  }

};


//////////////////////////////// PUT 204
const updateById = async (req, res, next) => {
  const result = await mongodb.getDb().db('contacts').collection('contacts').updateOne({_id: ObjectId(req.params.id)}, { $set: ObjectId(req.params.update) });
    
    if(error) {
      return res.status(500).send(error);
    }
  
    res.setHeader('Content-Type', 'application/json');
    res.status(204).json(result); 
    res.body("Your update has been successful").json(result); 
};



//////////////////////////////// DELETE 200
// async function deleteListingByName(client, nameOfListing) {
//   const result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteOne({ name: nameOfListing});
//   console.log(`${result.deletedCount} document(s) was/were deleted`);
// }
const deleteById = async (req, res, next) => {
  const result = await mongodb.getDb().db('contacts').collection('contacts').deleteOne({_id: ObjectId(req.params.id)});
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result); 
    res.body("You have successfully deleted the record").json(result); 
};

module.exports = {
    index,
    getData,
    getDataById,
    createNewContact,
    updateById,
    deleteById
};
