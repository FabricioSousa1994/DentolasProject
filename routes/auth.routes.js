const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');
//const { Router } = require('express');
const saltRounds = 10;


router.get('/signup', (req, res, next) => {
    try {
        res.render('auth/signup')
    } catch(error) {
        next(error)
    }
});

router.post('/signup', async (req, res, next) => {
    try {
        const {username, email, password, role} = req.body
        console.log('body', req.body)
      const newUser =  await User.create({username, email, password, role});
        console.log("User created")
        res.redirect('/')
        if (!username || !email || !password || role) {
            return res.render("auth/signup", {
              errorMessage: "All fields are required!",
            });
          }
          const passwordRegex =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
          if (!passwordRegex.test(password)) {
            return res.status(500).render("auth/signup", {
              errorMessage: `Password needs to be at least 6 characters
                  and must contain one uppercase letter, one lowercase letter,
                  a number and a special character.`,
            });
          }
          const salt = await bcrypt.genSalt(saltRounds);
          const passwordHash = await bcrypt.hashSync(password, salt);
          await User.create({ username, email, passwordHash, role});
          res.redirect("/profile");
          } catch (error) {
          if (error instanceof mongoose.Error.ValidationError) {
            res.status(500).render("auth/signup", { errorMessage: error.message });
          } else if (error.code === 11000) {
            res.status(500).render("auth/signup", {
              errorMessage: "Username or email already in use",
            });
          } else {
          next(error);
          }
        }
      }
      );

router.get('/login', (req, res, next) => {
  try {
    res.render('auth/login')
  } catch(error) {
    next(error)
  }
})

module.exports = router;


