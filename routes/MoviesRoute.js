'use strict';
const express = require('express'),
  movies = require('../controllers/MoviesController'),
  router = express.Router();

router.get('/', movies.index)
router.get('/search', movies.search)

module.exports = router;