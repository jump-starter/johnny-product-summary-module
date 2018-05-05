const fs = require('fs');
const faker = require('faker');
// const db = require('./index.js');

const seedMongo = () => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let projectCount = 1;
  let userCount = 1;

  const numBatches = 1e3;
  for (let i = 0; i < numBatches; i += 1) {
    let _projects = [];
    let _users = [];

    const newProjects = 1e4;
    for (let j = 0; j < newProjects; j += 1) {
      let totalPledgeAmt = 0;
      const _pledges = [];
      const newUsers = getRndInteger(0, 20);
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
        _users.push(user);
        const userId = userCount + k;
        const pledgeAmt = getRndInteger(0, 1000);
        totalPledgeAmt += pledgeAmt;
        _pledges.push({ user_id: userId, pledge_amt: pledgeAmt });
      }
      userCount += newUsers;

      const _faqs = [];
      const newFaqsCount = getRndInteger(0, 10);
      for (let k = 0; k < newFaqsCount; k += 1) {
        const faq = {
          created_date: faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' '),
          title: faker.lorem.sentence(),
          description: faker.lorem.sentences(),
        };
        _faqs.push(faq);
      }

      const _updates = [];
      const newUpdatesCount = getRndInteger(0, 10);
      for (let k = 0; k < newUpdatesCount; k += 1) {
        const update = {
          created_date: faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' '),
          title: faker.lorem.sentence(),
          description: faker.lorem.sentences(),
        };
        _updates.push(update);
      }

      const _comments = [];
      const newCommentsCount = getRndInteger(0, 10);
      for (let k = 0; k < newCommentsCount; k += 1) {
        const comment = {
          created_date: faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' '),
          description: faker.lorem.sentences(),
          user_id: getRndInteger(1, userCount),
        };
        _comments.push(comment);
      }

      const project = {
        id: projectCount + j,
        created_date: faker.date.past(1, '2017-01-01').toISOString().slice(0, 19).replace('T', ' '),
        end_date: faker.date.future(1).toISOString().slice(0, 19).replace('T', ' '),
        title: faker.commerce.productName(),
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
        pledges_count: _pledges.length,
        pledges: _pledges,
      };
      _projects.push(project);
    }
    projectCount += newProjects;

    if (i === 0) {
      _projects = `[${JSON.stringify(_projects).slice(1, -1)}`;
      _users = `[${JSON.stringify(_users).slice(1, -1)}`;
    } else if (i === numBatches - 1) {
      _projects = `, ${JSON.stringify(_projects).slice(1, -1)}]`;
      _users = `, ${JSON.stringify(_users).slice(1, -1)}]`;
    } else {
      _projects = `,${JSON.stringify(_projects).slice(1, -1)}`;
      _users = `,${JSON.stringify(_users).slice(1, -1)}`;
    }
    console.log(projectCount);
    fs.appendFileSync('./db/_projects.json', _projects);
    fs.appendFileSync('./db/_users.json', _users);
  }
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
