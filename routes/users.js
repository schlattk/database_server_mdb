var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup',{title:'Sign Up Page'});
});

router.post('/', function(req, res, next) {
  var first_name = req.body.first_name;
  var last_name = req.body.family_name;

  res.redirect('/users/printout/?first_name=' + first_name + '&last_name=' + last_name );
});

router.get('/printout', function(req, res, next) {
  var first_name = req.query.first_name;
  var last_name = req.query.last_name;
  console.log(first_name);
  res.send('Hello ' + first_name + " " + last_name);
});



module.exports = router;
