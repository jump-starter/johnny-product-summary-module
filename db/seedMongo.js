const faker = require('faker');
const db = require('./index.js');

const getRndIntIncl = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * ((maximum - minimum) + 1)) + minimum;
};

const seedMongo = () => {
  db.Product.collection.drop();
  for (let i = 0; i < 100; i += 1) {
    const instance = new db.Product({
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
        console.log(err);
      }
      return res;
    });
  }
};

module.exports = seedMongo;
