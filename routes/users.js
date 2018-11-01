var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup',{title:'Sign Up Page'});
});

router.post('/', function(req, res, next) {
  res.send('this will be our form');
});



module.exports = router;
