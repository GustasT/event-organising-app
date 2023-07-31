const User = require("../models/user.model.js");
const { MongoClient, ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const getUsers = async (req, res) => {
  const client = await new MongoClient("mongodb://localhost:27017").connect();
  const users = await client
    .db("EventOrganisingApp")
    .collection("users")
    .find({})
    .toArray();
  await client.close();
  res.send(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  const client = await new MongoClient("mongodb://localhost:27017").connect();
  const user = await client
    .db("EventOrganisingApp")
    .collection("users")
    .findOne({ _id: new ObjectId(id) });

  await client.close();

  if (!user) {
    return res.status(404).json({ error: "user does not exist" });
  }

  res.status(200).send(user);
};

const createUser = async (req, res) => {
  const { firstName, lastName, email, birthday } = req.body;

  // console.log("Request body:", req.body);

  const newUser = new User(firstName, lastName, email, birthday);

  const client = await new MongoClient("mongodb://localhost:27017").connect();
  await client.db("EventOrganisingApp").collection("users").insertOne(newUser);
  await client.close();

  res.status(201).json(newUser);
};

const patchUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  const client = await new MongoClient("mongodb://localhost:27017").connect();
  const user = await client
    .db("EventOrganisingApp")
    .collection("users")
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: req.body });

  await client.close();

  if (!user) {
    return res.status(404).json({ error: "user does not exist" });
  }

  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  const client = await new MongoClient("mongodb://localhost:27017").connect();
  const user = await client
    .db("EventOrganisingApp")
    .collection("users")
    .findOneAndDelete({ _id: new ObjectId(id) });

  await client.close();

  if (!user) {
    return res.status(404).json({ error: "user does not exist" });
  }

  res.status(200).json(user);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  patchUser,
};
