const faker = require('faker');
const Product = require('./index.js');

const getRndIntIncl = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * ((maximum - minimum) + 1)) + minimum;
};

const saveProducts = () => {
  Product.collection.drop();
  for (let i = 0; i < 100; i++) {
    const instance = new Product({
      projectID: i,
      mainDisplay: {
        title: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        img: faker.image.business(),
      },
      product: {
        name: faker.commerce.productName(),
        category: faker.commerce.department(),
        numBackers: getRndIntIncl(0, 20),
        amtPledged: getRndIntIncl(0, 50000),
      },
      target: {
        endDate: `${getRndIntIncl(5, 12)}/${getRndIntIncl(1, 28)}/${2018}`,
        amt: getRndIntIncl(0, 50000),
      },
      creator: {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        location: `${faker.address.city()}, ${faker.address.state()}`,
        avatarImg: faker.image.avatar(),
        numberProducts: 1,
      },
    });
    instance.save((err, res) => {
      if (err) {
        return console.error(err);
      }
      return res;
    });
  }
};

module.exports = saveProducts;
