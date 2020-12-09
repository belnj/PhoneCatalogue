const mongoose = require('mongoose');
const { Schema } = mongoose;

//Define phone schema in MongoDB
const phoneSchema = new Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  color: {type: String},
  price: {type: Number},
  imageFileName: {type: String},
  screen: {type: String},
  processor: {type: String},
  ram: {type: Number}
});

module.exports = mongoose.model('Phone',  phoneSchema);

  