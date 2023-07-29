const express = require("express");
const User = require("../models/user.model.js");
const { MongoClient, ObjectId } = require("mongodb");
// const router = express.Router();

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

// router.get("/", async (req, res) => {
//   const client = await new MongoClient("mongodb://localhost:27017").connect();
//   const usersArray = await client
//     .db("EventOrganisingApp")
//     .collection("users")
//     .find({})
//     .toArray();
//   await client.close();
//   res.send(usersArray);
// });

const getUser = async (req, res) => {
  const { id } = req.params;

  const client = await new MongoClient("mongodb://localhost:27017").connect();
  const user = await client
    .db("EventOrganisingApp")
    .collection("users")
    .findOne({ _id: new ObjectId(id) });

  await client.close();

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.status(200).send(user);
};

const createUser = async (req, res) => {
  const { firstName, lastName, email, birthday } = req.body;

  console.log("Request body:", req.body); // Try using console.error()

  const newUser = new User(firstName, lastName, email, birthday);

  const client = await new MongoClient("mongodb://localhost:27017").connect();
  await client.db("EventOrganisingApp").collection("users").insertOne(newUser);
  await client.close();

  res.status(201).send(`User ${firstName} added successfully`);
};

const patchUser = async (req, res) => {
  const { id } = req.params;

  const client = await new MongoClient("mongodb://localhost:27017").connect();
  const user = await client
    .db("EventOrganisingApp")
    .collection("users")
    .updateOne({ _id: new ObjectId(id) }, { $set: req.body });

  await client.close();

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const client = await new MongoClient("mongodb://localhost:27017").connect();
  await client
    .db("EventOrganisingApp")
    .collection("users")
    .deleteOne({ _id: new ObjectId(id) });

  await client.close();
  res.status(200).send(`User with id: ${id} deleted`);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  patchUser,
};
