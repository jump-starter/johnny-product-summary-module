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
}



let product = mongoose.model('product', productSchema);

var saveProducts = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    let instance = new product({
      mainDisplay: {     /*********fill in************/
        title: String,/**********************************/
        description: String,/**********************************/
        img: String,/**********************************/
      },/**********************************/
      product: {/**********************************/
        name: String,/**********************************/
        category: String,/**********************************/
        numBackers: Number,/**********************************/
        amtPledged: Number,/**********************************/
      },/**********************************/
      target: {/**********************************/
        endDate: String,/**********************************/
        amt: Number,/**********************************/
      },/**********************************/
      creator: {/**********************************/
        name: String,/**********************************/
        location: String,/**********************************/
        avatarImg: String,/**********************************/
        numberProducts: Number,/**********************************/
      },
    })
  }
}

module.exports = saveProducts;
