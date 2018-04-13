const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/main');

let productSchema = new mongoose.Schema({
    mainDisplay: {
      title: String,
      description: String,
      img: String,
    },
    product: {
      name: String,
      category: String,
      numBackers: Number,
      amtPledged: Number,
    },
    target: {
      endDate: String,
      amt: Number,
    },
    creator: {
      name: String,
      location: String,
      avatarImg: String,
      numberProducts: Number,
    },
})

let Product = mongoose.model('Product', productSchema);

module.exports = Product;
