'use strict';
const express = require('express'), router = express(),
  movies = require('../routes/MoviesRoute');

router.use(movies);

module.exports = router;