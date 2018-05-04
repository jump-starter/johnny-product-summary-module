const faker = require('faker');
// const db = require('./index.js');
const fs = require('fs');

const seedPostgres = () => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let userCount = 1;
  let projectCount = 1;
  for (let i = 0; i < 1e1; i += 1) {
    let _projects = '';
    let _users = '';
    let _projects_users = '';

    const newProjects = 1e1;
    for (let j = 0; j < newProjects; j += 1) {
      const newUsers = getRndInteger(0, 20);
      _projects +=
        `${faker.date.past(1, '2017-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_date
        `${faker.date.future(1).toISOString().slice(0, 19).replace('T', ' ')},` + // end_date
        `${faker.commerce.productName()},` + // title
        `${faker.lorem.sentences()},` + // description
        `${faker.commerce.department()},` + // category
        `https://s3.amazonaws.com/jumpstarter-pics/product${getRndInteger(1, 1000)}.jpg,` + // image_url
        `${getRndInteger(userCount, userCount + newUsers)}\n`; // creator_id

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

        _projects_users +=
          `${faker.date.past(1, '2018-01-01').toISOString().slice(0, 19).replace('T', ' ')},` + // created_date
          `${getRndInteger(0, 1000)},` + // pledge_amt
          `${j + projectCount},` + // project_id
          `${k + userCount}\n`; // user_id
      }
      userCount += newUsers;
    }
    projectCount += newProjects;
    fs.appendFileSync('./db/_projects.csv', _projects);
    fs.appendFileSync('./db/_users.csv', _users);
    fs.appendFileSync('./db/_projects_users.csv', _projects_users);
  }
};

// async function seedPostgres() {
//   await db.client.connect();

//   await db.client.query('DELETE FROM users');

//   for (let i = 0; i < 100; i += 1) {
//     db.client.query(`INSERT INTO users (name, email, location, avatar_url)
//       VALUES (
//         '${faker.name.firstName()} ${faker.name.lastName()}',
//         '${faker.internet.email()}',
//         '${faker.address.city()}',
//         '${faker.image.imageUrl()}'
//       )
//     `);
//   }

//   const res = await db.client.query('SELECT * FROM users');
//   console.log(res.rows.length);

//   await db.client.end();
// }

module.exports = seedPostgres;
