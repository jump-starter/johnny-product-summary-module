// const { Client } = require('pg');
// const client = new Client();

// client.connect();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/summary-module');

let productSchema = new mongoose.Schema({
    projectID: Number,
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
