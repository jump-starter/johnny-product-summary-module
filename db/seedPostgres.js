const fs = require('fs');
const faker = require('faker');
// const db = require('./index.js');

const seedPostgres = () => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let userCount = 1;
  let projectCount = 1;
  for (let i = 0; i < 1e3; i += 1) {
    let _projects = '';
    let _users = '';
    let _projects_users = '';
    let _faqs = '';
    let _updates = '';
    let _comments = '';

    const newProjects = 1e4;
    for (let j = 0; j < newProjects; j += 1) {
      const newUsers = getRndInteger(0, 20);
      let totalPledgeAmt = 0;
      for (let k = 0; k < newUsers; k += 1) {
        _users +=
          `${faker.date.past(1, '2016-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_date
          `${faker.name.firstName()},` + // first_name
          `${faker.name.lastName()},` + // last_name
          `${faker.internet.email()},` + // email
          `${faker.address.city()},` + // city
          `${faker.address.state()},` + // state
          `${faker.address.countryCode()},` + // country
          `https://s3.amazonaws.com/jumpstarter-pics/headshot${getRndInteger(1, 100)}.jpg\n`; // avatar_url

        const pledgeAmt = getRndInteger(0, 1000);
        totalPledgeAmt += pledgeAmt;
        _projects_users +=
          `${faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_date
          `${pledgeAmt},` + // pledge_amt
          `${projectCount + j},` + // project_id
          `${userCount + k}\n`; // user_id
      }

      const newFaqs = getRndInteger(0, 10);
      const newUpdates = getRndInteger(0, 10);
      const newComments = getRndInteger(0, 10);
      _projects +=
        `${faker.date.past(1, '2017-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_date
        `${faker.date.future(1).toISOString().slice(0, 19).replace('T', ' ')},` + // end_date
        `${faker.commerce.productName()},` + // title
        `${faker.lorem.sentences()},` + // description
        `${faker.commerce.department()},` + // category
        `https://s3.amazonaws.com/jumpstarter-pics/product${getRndInteger(1, 1000)}.jpg,` + // image_url
        `${getRndInteger(userCount, userCount + newUsers)},` + // creator_id
        `${newFaqs},` + // faqs_count
        `${newUpdates},` + // updates_count
        `${newComments},` + // comments_count
        `${totalPledgeAmt}\n`; // total_pledge_amt
      userCount += newUsers;

      for (let l = 0; l < newFaqs; l += 1) {
        _faqs +=
        `${faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_date
        `${faker.lorem.sentence()},` + // title
        `${faker.lorem.sentences()},` + // description
        `${projectCount + j}\n`; // project_id
      }

      for (let l = 0; l < newUpdates; l += 1) {
        _updates +=
        `${faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_date
        `${faker.lorem.sentence()},` + // title
        `${faker.lorem.sentences()},` + // description
        `${projectCount + j}\n`; // project_id
      }

      for (let l = 0; l < newComments; l += 1) {
        _comments +=
          `${faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_date
          `${faker.lorem.sentences()},` + // description
          `${projectCount + j},` + // project_id
          `${getRndInteger(1, userCount)}\n`; // user_id
      }
    }
    projectCount += newProjects;
    fs.appendFileSync('./db/_projects.csv', _projects);
    fs.appendFileSync('./db/_users.csv', _users);
    fs.appendFileSync('./db/_projects_users.csv', _projects_users);
    fs.appendFileSync('./db/_faqs.csv', _faqs);
    fs.appendFileSync('./db/_updates.csv', _updates);
    fs.appendFileSync('./db/_comments.csv', _comments);
  }
};

// async function seedPostgres() {
//   await db.client.connect();
//   await db.client.end();
// }

module.exports = seedPostgres;
