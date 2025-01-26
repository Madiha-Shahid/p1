const mongoose = require('mongoose');

// Product Schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  stock: { type: Number, default: 0 }
});

// Export Product model
module.exports = mongoose.model('Product', ProductSchema);
