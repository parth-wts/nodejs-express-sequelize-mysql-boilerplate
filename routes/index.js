const { authJwt } = require("../middleware");
const express = require('express')
const router = express.Router()
router.use('/api/users',[authJwt.verifyToken],require('./user.routes'))
router.use('/api/auth', require('./auth.routes'))

module.exports = router