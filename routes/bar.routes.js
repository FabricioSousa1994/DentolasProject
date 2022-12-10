const express = require('express');
const router = express.Router();
const Bar = require('../models/Bars.model');
const Dentinho = require('../models/Dentinho.model');
const { isLoggedIn, isLoggedOut, isBarOwner, isClient} = require('../middleware/route-guard');
const fileUploader = require('../config/cloudinary.config');


router.get('/create', (req, res, next) => {
  try {
    res.render('bars/bar-create')
  }catch(error) {
    next(error)
  }
});


router.post("/create", fileUploader.single('picture_url'), async (req, res, next) => {
  try {
    console.log('request file', req.file)
    const { name, picture_url} = req.body;
    const bar = {
      name,
      opening_hours,
      address,
      rating,
      picture_url,
      dentinho
    };
    if (req.file) {
        bar.picture_url = req.file.path;
    }
    const newBar = await Bar.create(bar);
    console.log('Bar created:', newBar.name);
    res.redirect('bars/bar-list')
  } catch (error) {
    next(error);
  }
});


// CRUD - Read

router.get('/bar-list', async (req, res, next) => {
    try {
      const bars = await Bar.find().populate('dentinho');
      res.render('bars/bar-list', {bars});
    } catch (error) {
      next(error);
    }
  });
  

  router.get('/bar-search', async (req, res, next) => {
    try {
      const { barId } = req.params;
  
      const bar = await Bar.findById(barId).populate('bars');
      const dentinhoList = await Dentinho.find();
      const { _id, name, picture_url } = bar;
      res.render('bars/bar-search-result', {
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

  router.get("/:barId", async (req, res, next) => {
    try {
      const { barId } = req.params;
  
      const bar = await Bar.findById(barId);
      const barList = await Bar.find()
      const {_id, name, opening_hours, address, rating, picture_url, dentinho} = bar;
      res.render("bars/bar-details", {_id, name, opening_hours, address, rating, picture_url, dentinho});
    } catch (error) {
      next(error);
    }
  });
  
  router.post('/:bar/edit', async (req, res, next) => {
    try {
      const { barId } = req.params;
      // console.log(req.body);
      const { bar } = req.body;
      await Bar.findByIdAndUpdate(barId, {
        $push: { bar }
      });
      res.redirect(`/bars/${barId}`);
    } catch (error) {
      next(error);
    }
  });


  
  module.exports = router;
  






