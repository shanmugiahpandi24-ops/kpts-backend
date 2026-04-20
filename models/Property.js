const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['apartment', 'house', 'villa', 'plot', 'commercial'], required: true },
  status: { type: String, enum: ['for-sale', 'for-rent'], required: true },
  location: { address: String, city: String, state: String, pincode: String },
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  images: [String],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Property', propertySchema);
