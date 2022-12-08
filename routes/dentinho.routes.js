const express = require("express");
const router = express.Router();
const Dentinho = require("../models/Dentinho.model");
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
      /*const createdDentinho = await Dentinho.create({
      name,
      picture_url
    });*/
      //console.log("A new dentinho was created:", createdDentinho.name);
      // after creating the book, we redirect the user to the list
      res.redirect("/dentinhos/dentinho-list");
    } catch (error) {
      next(error);
    }
  }
);

// ----- CRUD - Read ------

// list of all dentinhos
// -------REVIEW NEEDED ---------
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

/*router.get('/dentinho/:dentinhoId', isLoggedIn ,async (req, res, next) => {
    try {
      // console.log(req.params);
      const { dentinhoId } = req.params;
  
      const dentinho = await Dentinho.findById(dentinhoId);
      res.render('dentinho/dentinho-details', dentinho);
    } catch (error) {
      next(error);
    }
  });*/

// ------- CRUD - Update ------

/*router.get('/dentinho/:dentinhoId/edit', isLoggedIn, isBarOwner, async (req, res, next) => {
    try {
      const { dentinhoId } = req.params;
      const dentinho = await Dentinho.findById(dentinhoId);
      res.render('dentinho/dentinho-edit', dentinho);
    } catch (error) {
      next(error);
    }
  });
  
  router.post('/dentinho/:dentinhoId/edit', isLoggedIn, isBarOwner, async (req, res, next) => {
    try {
      const { dentinhoId } = req.params;
      const { name, image_url } = req.body;
      const updatedDentinho = await Dentinho.findByIdAndUpdate(dentinhoId, {
        name,
        image_url
      });
      res.redirect(`/dentinho/${updatedDentinho._id}`);
    } catch (error) {
      next(error);
    }
  });*/

// CRUD - Delete

/*router.post('/dentinho/:dentinhoId/delete', isLoggedIn, isBarOwner, async (req, res, next) => {
    try {
      const { dentinhoId } = req.params;
      await Book.findByIdAndDelete(dentinhoId);
      res.redirect('/dentinho');
    } catch (error) {
      next(error);
    }
  });*/

module.exports = router;
