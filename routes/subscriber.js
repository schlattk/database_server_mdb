var express = require('express');
var router = express.Router();
var subscriberController = require('../controllers/subscriberController')
var Subscriber = require('../models/subscriberModel')

router.get('/', subscriberController.subscriber_signup);

router.post('/', subscriberController.subscriber_create);

router.get('/print', subscriberController.subscriber_print);

router.get('/display', subscriberController.subscriber_list);


module.exports = router;
