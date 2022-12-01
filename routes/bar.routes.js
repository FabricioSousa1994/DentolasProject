const express = require('express');
const router = express.Router();
const Bar = require('../models/Bars.model');
const Dentinho = require('../models/Dentinho.model');
const { isLoggedIn } = require('../middleware/route-guard');


//creating a bar
// isLoggendIn as a owner



// CRUD - Read

router.get('/', async (req, res, next) => {
    try {
      const bar = await Bar.find();
      res.render('bar/bar-list', { bar });
    } catch (error) {
      next(error);
    }
  });
  
  router.get('/:barId', /*isLoggedIn,*/ async (req, res, next) => {
    try {
      const { barId } = req.params;
  
      const bar = await Bar.findById(barId).populate('dentinho');
      const dentinhoList = await Dentinho.find();
      const { _id, name, picture_url } = bar;
      res.render('bar/bar-details', {
        _id,
        name,
        opening_hours,
        address,
        rating,
        picture_url,
        dentinho
      });
    } catch (error) {
      next(error);
    }
  });
  
  /*router.post('/:authorId/edit', isLoggedIn, async (req, res, next) => {
    try {
      const { authorId } = req.params;
      // console.log(req.body);
      const { books } = req.body;
      await Author.findByIdAndUpdate(authorId, {
        $push: { books }
      });
      res.redirect(`/authors/${authorId}`);
    } catch (error) {
      next(error);
    }
  });*/
  
  module.exports = router;
  






