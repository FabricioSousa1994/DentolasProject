const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const { isLoggedIn, isBarOwner, isClient } = require('../middleware/route-guard');





module.exports = router;