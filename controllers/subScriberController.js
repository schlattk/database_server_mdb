var Subscriber = require('../models/subscriberModel');

exports.subscriber_signup = function(req, res, next){
  res.render('signup',{title:'Sign Up Page'});
};

exports.subscriber_create = function(req,res,next){
  var subscriber = new Subscriber(
                {
                    first_name: req.body.first_name,
                    family_name: req.body.family_name,
                    email: req.body.email
                });
                subscriber.save(function (err) {
                    if (err) { return next(err); }
                    res.redirect('/subscriber/print');
                });
};

exports.subscriber_print = function(req, res, next) {
  Subscriber.find()
        .sort({$natural:-1})
        .limit(1)
        .exec(function (err, list_subscribers) {
          if (err) { return next(err); }
          console.log(list_subscribers);
          res.render('print', {subscriber_list: list_subscribers });
  });
};

exports.subscriber_list = function(req, res, next) {

  Subscriber.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_subscribers) {
      if (err) { return next(err); }
      res.render('subscriber_list', { title: 'List of Subscribers', subscriber_list: list_subscribers });
    });

};
