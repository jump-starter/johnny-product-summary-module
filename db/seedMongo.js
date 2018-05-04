const fs = require('fs');
const faker = require('faker');
// const db = require('./index.js');

const seedMongo = () => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let projectCount = 1;
  for (let i = 0; i < 1e1; i += 1) {
    const newProjects = 1e1;
    for (let j = 0; j < newProjects; j += 1) {  
      const newUsers = getRndInteger(0, 20);
      const newFaqsCount = getRndInteger(0, 10);
      const newUpdatesCount = getRndInteger(0, 10);
      const newCommentsCount = getRndInteger(0, 10);

      let _users = [];
      for (let k = 0; k < newUsers; k += 1) {
        const user = {
          created_date: faker.date.past(1, '2016-01-01').toISOString().slice(0, 19).replace('T', ' '),
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: faker.address.countryCode(),
          avatar_url: `https://s3.amazonaws.com/jumpstarter-pics/headshot${getRndInteger(1, 100)}.jpg`,
        };
        _users.push(users);
      }

      let _faqs = [];
      for (let k = 0; k < newFaqsCount; k += 1) {
        const faq = {
          created_date: faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' '),
          title: faker.lorem.sentence(),
          description: faker.lorem.sentences(),
          project_id: projectCount + j,
        };
        _faqs.push(faq);
      }

      let _updates = [];
      for (let k = 0; k < newUpdatesCount; k += 1) {
        const update = {
          created_date: faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' '),
          title: faker.lorem.sentence(),
          description: faker.lorem.sentences(),
          project_id: projectCount + j,
        };
        _updates.push(update);
      }

      let _comments = [];
      for (let k = 0; k < newCommentsCount; k += 1) {
        const comment = {
          created_date: faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' '),
          description: faker.lorem.sentences(),
          project_id: projectCount + j,
          user_id: getRndInteger(1, userCount),
        };
        _comments.push(comment);
      }
      
      _projects = {
        created_date: faker.date.past(1, '2017-01-01').toISOString().slice(0, 19).replace('T', ' '),
        end_date: faker.date.future(1).toISOString().slice(0, 19).replace('T', ' '),
        title_date: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        category: faker.commerce.department(),
        image_url: `https://s3.amazonaws.com/jumpstarter-pics/product${getRndInteger(1, 1000)}.jpg`,
        creator_id: getRndInteger(userCount, userCount + newUsers),
        faqs_count: newFaqsCount,
        faqs: _faqs,
        updates_count: newUpdatesCount,
        updates: _updates,
        comments_count: newCommentsCount,
        comments: _comments,
        total_pledge_amt: totalPledgeAmt,
      };
  }
  projectCount += newProjects;
  fs.appendFileSync('./db/_projects.json', JSON.stringify(_projects));
  fs.appendFileSync('./db/_users.json', JSON.stringify(_users));
};

module.exports = seedMongo;


// db.Product.collection.drop();
//   for (let i = 0; i < 100; i += 1) {
//     const instance = new db.Product({
//       projectID: i,
//       mainDisplay: {
//         title: faker.commerce.productName(),
//         description: faker.lorem.paragraph(),
//         img: faker.image.business(),
//       },
//       product: {
//         name: faker.commerce.productName(),
//         category: faker.commerce.department(),
//         numBackers: getRndIntIncl(0, 20),
//         amtPledged: getRndIntIncl(0, 50000),
//       },
//       target: {
//         endDate: `${getRndIntIncl(5, 12)}/${getRndIntIncl(1, 28)}/${2018}`,
//         amt: getRndIntIncl(0, 50000),
//       },
//       creator: {
//         name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//         location: `${faker.address.city()}, ${faker.address.state()}`,
//         avatarImg: faker.image.avatar(),
//         numberProducts: 1,
//       },
//     });
//     instance.save((err, res) => {
//       if (err) {
//         console.log(err);
//       }
//       return res;
//     });
//   }