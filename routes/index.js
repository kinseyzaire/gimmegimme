var express = require('express');
var knex = require('../db/knex.js');
var router = express.Router();

// homeeeeeee
router.get('/', function(req, res, next) {
  res.redirect('/login');
});


module.exports = router;
