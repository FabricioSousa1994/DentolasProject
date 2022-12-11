const express = require("express");
const router = express.Router();
const Dentinho = require("../models/Dentinho.model");
const Bar = require('../models/Bars.model')
const {
  isLoggedIn,
  isBarOwner,
  isClient,
} = require("../middleware/route-guard");
const fileUploader = require("../config/cloudinary.config");

// ------ CRUD - Create -------
router.get(
  "/dentinhos/create",
  /*isLoggedIn, isBarOwner,*/ (req, res, next) => {
    try {
      res.render("dentinhos/dentinho-create");
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/dentinhos/create",
  fileUploader.single("picture_url"),
  /*isLoggedIn,
  isBarOwner,*/
  async (req, res, next) => {
    try {
      const { name, picture_url } = req.body;
      const dentinho = { name };
      if (req.file) {
        dentinho.picture_url = req.file.path;
      }
      const newDentinho = await Dentinho.create(dentinho);
      res.redirect("/dentinhos/dentinho-list");
    } catch (error) {
      next(error);
    }
  }
);

// ----- CRUD - Read ------
router.get(
  "/dentinhos/dentinho-list",
  /*isLoggedIn,*/ async (req, res, next) => {
    try {
      const allDentinho = await Dentinho.find();
      res.render("dentinhos/dentinho-list", { dentinho: allDentinho });
    } catch (error) {
      console.log("error", error);
      next(error);
    }
  }
);

router.get('/dentinho-search', async (req, res, next) => {
  try {
    const { dentinhoName } = req.query;

    const dentinho = await Dentinho.find(dentinhoName).populate('bars');
    const barList = await Bar.find();
    const { _id,
      name,
      opening_hours,
      address,
      picture_url
      } = bar;
    res.render('bars/bar-search-result', bar);
  } catch (error) {
    next(error);
  }
});




// CRUD - Delete

router.post('/dentinho/:dentinhoId/delete', isLoggedIn, isBarOwner, async (req, res, next) => {
    try {
      const { dentinhoId } = req.params;
      await Book.findByIdAndDelete(dentinhoId);
      res.redirect('/dentinho/dentinho-list');
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
