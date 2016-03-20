var express = require('express');
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');
var router = express.Router();

function Users() {
   return knex('users');
}

router.get('/users/new', function(req, res, next) {
  res.render('signup');
});

router.post('/users', function(req, res, next) {
  bcrypt.hash(req.body.user_password, 8, function(err, hash) {
    var usernammme = req.body.user_name;
    var newUser = { user_name: usernammme , user_password: hash };
    Users().insert(newUser).then(function(result){
      res.redirect('/login');
    });
  });
});

module.exports = router;

// ASYNC to auto-generate a salt and password hash
// bcrypt.hash('bacon', 8, function(err, hash) {
  // Store hash in your password DB.
// });

// SYNC to auto-generate a salt and password hash
// var hash = bcrypt.hashSync('bacon', 8);
