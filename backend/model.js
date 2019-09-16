const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerScheme = new Schema({
  pizza_name: String,
  pizza_size: Number,
  address: String,
  confirmed: Boolean,
  declined: Boolean,
  delivered: Boolean
});
const Offer = mongoose.model("Offer", offerScheme);

module.exports = Offer;