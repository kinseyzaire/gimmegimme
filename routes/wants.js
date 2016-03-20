var express = require('express');
var knex = require('../db/knex.js');
var validate = require('../lib/validations.js');
var router = express.Router();

function Wants() {
   return knex('wants');
}

function Users() {
   return knex('users');
}

// homeeeeeee + show all
router.get('/:username/wants', function(req, res, next) {
  Users().where('user_name', req.params.username).first().then(function(result){
    Wants().where('user_id', result.id).then(function(results){
      res.render('index', {wants: results, user: result, title: "gimmegimme"});
    });
  });
});

// list view + show all
router.get('/:username/wants/list', function(req, res, next) {
  Users().where('user_name', req.params.username).first().then(function(result){
    Wants().where('user_id', result.id).then(function(results){
      res.render('wants/list', {wants: results, user: result, title: "gimmegimme"});
    });
  });
});

// add new want to db

router.post('/:username/wants', function(req, res, next) {
  // var errs = [];
  // errs.push(validate.nameIsNotBlank(req.body.name));
  // errs.push(validate.priceIsNotBlank(req.body.price));
  // errs.push(validate.imagesNotBlank(req.body.images));
  // errs.push(validate.linksNotBlank(req.body.links));
  // for (var i = 0; i < errs.length; i++) {
  //   if ( errs[i] === "" ) { errs.splice(i, 1); } else { console.log("no err here"); }
  // };
  // console.log(errs);
  // var result = req.body;
  // show errors include and rerender
  // if (errs.length > 0){
  //   res.render('index', {want: result, errors: errs} );
  //   } else {
      Wants().insert(req.body).then(function(result){
        res.redirect('/' + req.params.username + '/wants');
      });
    //  }
});

// edit want

router.get('/:username/wants/:id/edit', function (req, res) {
  Users().where('user_name', req.params.username).first().then(function(uresult){
    Wants().where('id', req.params.id).first().then(function(wresult){
      res.render('wants/edit', { want: wresult, user: uresult });
    });
  });
});

// update want in db

router.post('/:username/wants/:id', function (req, res) {
  Wants().where('id', req.params.id).update(req.body)
  .then(function(result){
    res.redirect('/' + req.params.username + '/wants');
  });
});

// delete want

router.get('/:username/wants/:id/delete', function (req, res) {
  Wants().where('id', req.params.id).del()
  .then(function (result) {
    res.redirect('/' + req.params.username + '/wants');
  });
});

module.exports = router;
