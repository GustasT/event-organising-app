const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  patchUser,
} = require("../controllers/user.controller");

const express = require("express");

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.patch("/:id", patchUser);

router.delete("/:id", deleteUser);

module.exports = router;
