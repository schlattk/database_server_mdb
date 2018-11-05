var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SubscriberSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 50}
  }
);

module.exports = mongoose.model('User', SubscriberSchema);
