const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/api/project');

const productSchema: new mongoose.Schema({
    creator: Number,
    title: String,
    description: String,
    mainImg: String,
    category: String,
    numBackers: Number,
    goalDate: String,
    goalAmt: Number,
    amtPledged: Number,
    productID: Number,
  })

const Product = mongoose.model('Product', productSchema);

const creatorSchema: new mongoose.Schema({
  creatorId: Number,
  name: String,
  location: String,
  product: String,
  totalNumProducts: Number,
  avatarImg: String,
})

const Creator = mongoose.model('Creator', creatorSchema);


module.exports = db;
