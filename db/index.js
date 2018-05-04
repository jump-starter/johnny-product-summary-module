const { Client } = require('pg');
const mongoose = require('mongoose');

// Postgres Connection
const client = new Client({
  user: 'zhujohnny',
  host: 'localhost',
  database: 'jumpstarter',
  password: 'null',
  port: 5432,
});

// module.exports.client = client;

// MongoDB Connection
// mongoose.connect('mongodb://localhost/summary-module');
// const productSchema = new mongoose.Schema({
//   projectID: Number,
//   mainDisplay: {
//     title: String,
//     description: String,
//     img: String,
//   },
//   product: {
//     name: String,
//     category: String,
//     numBackers: Number,
//     amtPledged: Number,
//   },
//   target: {
//     endDate: String,
//     amt: Number,
//   },
//   creator: {
//     name: String,
//     location: String,
//     avatarImg: String,
//     numberProducts: Number,
//   },
// });
// module.exports.Product = mongoose.model('Product', productSchema);
