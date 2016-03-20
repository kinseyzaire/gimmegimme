var express = require('express');
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

var router = express.Router();

function Users() {
   return knex('users');
}

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  Users().where('user_name', req.body.user_name).first().then(function(result){
    if(!bcrypt.compare(req.body.user_password, result.user_password)){
      res.cookie('current_user', result.id);
      res.redirect('/' + result.user_name + '/wants');
    } else {
      console.log("error - passwords don't match");
      res.render('login');
    }
  });
});

router.get('/logout', function(req, res, next) {
  res.clearCookie('current_user')
  res.redirect('/login')
});

module.exports = router;
