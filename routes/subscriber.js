var express = require('express');
var router = express.Router();
var subscriberController = require('../controllers/subscriberController')
var Subscriber = require('../models/subscriberModel')

router.get('/', function(req, res, next) {
  res.render('signup',{title:'Sign Up Page'});
});

// router.post('/', function(req, res, next) {
//   var subscriber = new Subscriber(
//                 {
//                     first_name: req.body.first_name,
//                     family_name: req.body.family_name,
//                     email: req.body.email
//                 });
//             subscriber.save(function (err) {
//                 if (err) { return next(err); }
//                 res.redirect('/subscriber/print');
//             });
//
// });

router.post('/', subscriberController.subscriber_create);

router.get('/print', function(req, res, next) {
  res.send('Thank you for registering - we will be in touch soon!');
});

router.get('/display', subscriberController.subscriber_list)


module.exports = router;
