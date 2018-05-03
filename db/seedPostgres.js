const faker = require('faker');
const db = require('./index.js');

async function seedPostgres() {
  await db.client.connect();

  await db.client.query('DELETE FROM users');

  for (let i = 0; i < 100; i += 1) {
    db.client.query(`INSERT INTO users (name, email, location, avatar_url) 
      VALUES (
        '${faker.name.firstName()} ${faker.name.lastName()}',
        '${faker.internet.email()}',
        '${faker.address.city()}',
        '${faker.image.imageUrl()}'
      )
    `);
  }

  const res = await db.client.query('SELECT * FROM users');
  console.log(res.rows.length);

  await db.client.end();
}

module.exports = seedPostgres;
