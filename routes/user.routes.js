const { authJwt } = require("../middleware");
const express = require('express')
const router = express.Router()
const user = require('../controllers/user.controller')

// Retrieve all Users
router.get("/",user.findAll);

// Create a new User
router.post("/", user.create);

// Retrieve a single Tutorial with id
router.get("/:id", user.findOne);

// Update a Tutorial with id
router.put("/:id", user.update);

// Delete a Tutorial with id
router.delete("/:id", user.delete);

// Delete all Tutorials
router.delete("/", user.deleteAll);

module.exports = router