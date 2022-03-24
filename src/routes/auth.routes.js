const { verifySignUp } = require("../middleware");
const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth.controller')

// Create a new Signup
router.post("/signup", [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
], auth.signup);

// Create a new Signin
router.post("/signin", auth.signin);

module.exports = router