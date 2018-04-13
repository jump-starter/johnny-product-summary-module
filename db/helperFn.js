let faker = require('faker');

/**************************new Schema format*********************************
var saveProducts = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    let instance = new product({
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
  }
}
*************************************************************************/
class Creator {
  constructor() {
    this.creatorId = 0;
    this.name = faker.name.firstName() + ' ' + faker.name.lastName();
    this.location = faker.address.city() + ', ' + faker.address.state();
    this.product = faker.commerce.productName();
    this.totalNumProducts = 1;
    this.avatarImg = faker.image.avatar();
  }
}

class Product  {
  constructor() {
    this.creatorId = 0;
    this.title = faker.commerce.productName();
    this.description = faker.lorem.paragraph();
    this.mainImg = faker.image.business();
    this.category = faker.commerce.department();
    this.numBackers = getRndIntIncl(0,20);
    this.goalDate = getRndIntIncl(5, 12) + '/' + getRndIntIncl(1,28) + '/' + 2018;
    this.goalAmt = getRndIntIncl(1000, 50000);
    this.amtPledged = getRndIntIncl(0, this.goalAmt);
    this.productId = 0;
  }
}

let ProductGenerator = function() {
  var instances = [];
  for (var i = 1; i < 100; i++) {
    var temp = new Product();
    temp.creator = i;
    temp.productId = i * getRndIntIncl(1,7);
    instances.push(temp)
  }
  return instances;
}

let CreatorGenerator = function() {
  var instances = [];
  var j = 100;
  for (var i = 0; i < 100; i++) {
    var temp = new Creator();
    temp.creatorId = j;
    instances.push(temp);
    j--;
  }
  return instances;
}

let getRndIntIncl = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports =
