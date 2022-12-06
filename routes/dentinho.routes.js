const express = require('express');
const router = express.Router();
const Dentinho = require('../models/Dentinho.model');
const { isLoggedIn, isBarOwner, isClient } = require('../middleware/route-guard');

// ------ CRUD - Create -------
router.get('/dentinho/create', isLoggedIn, isBarOwner, (req, res, next) => {
  try {
    res.render('dentinho/dentinho-create');
  } catch (error) {
    next(error);
  }
});

router.post('/dentinho/create', isLoggedIn, isBarOwner, async (req, res, next) => {
  try {
    // console.log(req.body);
    const { name, picture_url } = req.body;
    const createdDentinho = await Dentinho.create({
      name,
      picture_url
    });
    console.log('A new dentinho was created:', createdDentinho.name);
    // after creating the book, we redirect the user to the list
    res.redirect('/dentinho');
  } catch (error) {
    next(error);
  }
});



// ----- CRUD - Read ------

// list of all dentinhos     
// -------REVIEW NEEDED ---------
router.get('/dentinho', async (req, res, next) => {
    try {
      const allDentinho = await Dentinho.find();
      res.render('dentinho/dentinho-list', { dentinho: allDentinho });
    } catch (error) {
      console.log('error', error);
      // calling the error middleware
      next(error);
    }
  });
  
  router.get('/dentinho/:dentinhoId', async (req, res, next) => {
    try {
      // console.log(req.params);
      const { dentinhoId } = req.params;
  
      const dentinho = await Dentinho.findById(dentinhoId);
      res.render('dentinho/dentinho-details', dentinho);
    } catch (error) {
      next(error);
    }
  });
  
  // ------- CRUD - Update ------
  
  /*router.get('/books/:bookId/edit', isLoggedIn, async (req, res, next) => {
    try {
      const { bookId } = req.params;
      const book = await Book.findById(bookId);
      res.render('books/book-edit', book);
    } catch (error) {
      next(error);
    }
  });
  
  router.post('/books/:bookId/edit', isLoggedIn, async (req, res, next) => {
    try {
      const { bookId } = req.params;
      const { title, author, description, rating } = req.body;
      const updatedBook = await Book.findByIdAndUpdate(bookId, {
        title,
        author,
        description,
        rating
      });
      res.redirect(`/books/${updatedBook._id}`);
    } catch (error) {
      next(error);
    }
  });
  
  // CRUD - Delete
  
  router.post('/books/:bookId/delete', isLoggedIn, async (req, res, next) => {
    try {
      const { bookId } = req.params;
      await Book.findByIdAndDelete(bookId);
      res.redirect('/books');
    } catch (error) {
      next(error);
    }
  });*/
  
  module.exports = router;
  