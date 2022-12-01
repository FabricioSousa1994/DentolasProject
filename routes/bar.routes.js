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
      res.render('author/authors-list', { authors });
    } catch (error) {
      next(error);
    }
  });
  
  router.get('/:authorId', isLoggedIn, async (req, res, next) => {
    try {
      const { authorId } = req.params;
  
      const author = await Author.findById(authorId).populate('books');
      const booksList = await Book.find();
      const { _id, name, bio, picture_url, books } = author;
      res.render('author/author-details', {
        _id,
        name,
        bio,
        picture_url,
        books,
        booksList
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.post('/:authorId/edit', isLoggedIn, async (req, res, next) => {
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
  });
  
  module.exports = router;
  






