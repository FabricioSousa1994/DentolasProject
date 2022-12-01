const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');
const saltRounds = 10;


router.get('/signup', (req, res, next) => {
    try {
        res.render('auth/signup')
    } catch(error) {
        next(error)
    }
});

router.post('/signup', (req ))





