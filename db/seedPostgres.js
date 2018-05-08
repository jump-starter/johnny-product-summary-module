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
    let Projects = '';
    let Users = '';
    let ProjectsUsers = '';
    // let Faqs = '';
    // let Updates = '';
    // let Comments = '';

    const newProjects = 1e4;
    for (let j = 0; j < newProjects; j += 1) {
      const newFaqs = getRndInteger(0, 10);
      const newUpdates = getRndInteger(0, 10);
      const newComments = getRndInteger(0, 10);
      const newUsers = getRndInteger(0, 20);
      let totalPledgeAmt = 0;

      for (let k = 0; k < newUsers; k += 1) {
        Users +=
          `${faker.date.past(1, '2016-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_at
          `${faker.name.firstName()},` + // first_name
          `${faker.name.lastName()},` + // last_name
          `${faker.internet.email()},` + // email
          `${faker.address.city()},` + // city
          `${faker.address.state()},` + // state
          `${faker.address.countryCode()},` + // country
          `https://s3.amazonaws.com/jumpstarter-pics/headshot${getRndInteger(1, 100)}.jpg\n`; // avatar_url

        const pledgeAmt = getRndInteger(0, 1000);
        totalPledgeAmt += pledgeAmt;
        ProjectsUsers +=
          `${faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_at
          `${pledgeAmt},` + // pledge_amt
          `${projectCount + j},` + // project_id
          `${userCount + k}\n`; // user_id
      }

      Projects +=
        `${getRndInteger(userCount, userCount + newUsers)},` + // creator_id
        `${faker.date.past(1, '2017-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_at
        `${faker.date.future(1).toISOString().slice(0, 19).replace('T', ' ')},` + // end_date
        `${faker.commerce.productName()},` + // title
        `${faker.lorem.sentences()},` + // description
        `${faker.commerce.department()},` + // category
        `${faker.address.city()},` + // city
        `${faker.address.state()},` + // state
        `${faker.address.countryCode()},` + // country
        `https://s3.amazonaws.com/jumpstarter-pics/product${getRndInteger(1, 1000)}.jpg,` + // image_url
        `${newFaqs},` + // faqs_count
        `${newUpdates},` + // updates_count
        `${newComments},` + // comments_count
        `${newUsers},` + // pledges_count
        `${totalPledgeAmt},` + // total_pledge_amt
        `${getRndInteger(0, 100000)},` + // goal_amt
        `${Math.random() >= 0.5}\n`; // all_or_nothing
      userCount += newUsers;

      // for (let l = 0; l < newFaqs; l += 1) {
      //   Faqs +=
      //   `${faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_date
      //   `${faker.lorem.sentence()},` + // title
      //   `${faker.lorem.sentences()},` + // description
      //   `${projectCount + j}\n`; // project_id
      // }

      // for (let l = 0; l < newUpdates; l += 1) {
      //   Updates +=
      //   `${faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_date
      //   `${faker.lorem.sentence()},` + // title
      //   `${faker.lorem.sentences()},` + // description
      //   `${projectCount + j}\n`; // project_id
      // }

      // for (let l = 0; l < newComments; l += 1) {
      //   Comments +=
      //     `${faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_date
      //     `${faker.lorem.sentences()},` + // description
      //     `${projectCount + j},` + // project_id
      //     `${getRndInteger(1, userCount)}\n`; // user_id
      // }
    }
    projectCount += newProjects;
    console.log(projectCount);
    fs.appendFileSync('./db/Projects.csv', Projects);
    fs.appendFileSync('./db/Users.csv', Users);
    fs.appendFileSync('./db/ProjectsUsers.csv', ProjectsUsers);
    // fs.appendFileSync('./db/Faqs.csv', Faqs);
    // fs.appendFileSync('./db/Updates.csv', Updates);
    // fs.appendFileSync('./db/Comments.csv', Comments);
  }
};

// async function seedPostgres() {
//   await db.client.connect();
//   await db.client.end();
// }

module.exports = seedPostgres;
