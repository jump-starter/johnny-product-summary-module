const faker = require('faker');
const db = require('./index.js');

async function seedPostgres() {
  await db.client.connect();

  await db.client.query(`DELETE FROM users`);

  for (let i = 0; i < 1000; i += 1) {
    await db.client.query(`INSERT INTO users (name, email, location, avatar_url) VALUES ('zhujohnny', 'zhujohnny@gmail.com', 'San Francisco', 'www.zhujohnny.com')`);
  }

  const res = await db.client.query(`SELECT * FROM users`);
  console.log(res.rows.length) // Hello world!
  
  await db.client.end();
}

module.exports = seedPostgres;
