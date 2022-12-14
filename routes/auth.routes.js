const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');
const saltRounds = 10;
const {
  isLoggedIn,
  isLoggedOut,
  isAdmin,
  isUser,
} = require("../middleware/route-guard");


router.get('/signup', isLoggedOut, (req, res, next) => {
    try {
        res.render('auth/signup')
    } catch(error) {
        next(error)
    }
});

router.post('/signup', isLoggedOut, async (req, res, next) => {
    try {
        const {username, email, password} = req.body

        if (!username || !email || !password) {
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
          const passwordHash = bcrypt.hashSync(password, salt);
          const role = "user"
          await User.create({ username, email, passwordHash, role});
          res.redirect("/login");
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

router.get('/login', isLoggedOut, (req, res, next) => {
  try {
    res.render('auth/login')
  } catch(error) {
    next(error)
  }
})

router.post("/login", isLoggedOut, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // console.log("--> Session", req.session);
    if (email === "" || password === "") {
      return res.render("auth/login", {
        errorMessage: "Please enter both email and password!",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.render("auth/login", {
        errorMessage: "Email is not registered. Please try another email!",
      });
      // checking if the password matches
    } else if (bcrypt.compareSync(password, user.passwordHash)) {
      // rendering the user to the profile view
      req.session.currentUser = user;
      res.locals.loggedIn = true;
      res.locals.isAdmin = user.role === "admin";
      res.redirect("bars/bar-list");
    } else {
      res.render("auth/login", { errorMessage: "Incorrect password!" });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/logout", isLoggedIn, (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      next(error);
    }
    res.locals.loggedIn = false;
    res.locals.isAdmin = false;
    res.redirect("/");
  });
});

module.exports = router;


