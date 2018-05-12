require('newrelic');
const express = require('express');
const path = require('path');
const cluster = require('cluster');
const os = require('os');
const cors = require('cors');
const camel = require('to-camel-case');
const redis = require('redis');
const db = require('../db');
// const seedMongo = require('../db/seedMongo');
// const seedPostgres = require('../db/seedPostgres');
// seedMongo();
// seedPostgres();

const client = redis.createClient();
client.on('error', (err) => {
  console.log(`Error ${err}`);
});

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
} else {
  const app = express();
  app.use(cors());
  app.use(express.static(path.join(__dirname, '/../client/public')));

  const port = 3001;

  app.get('/api/:id', (req, res) => {
    const { id } = req.params;

    client.get(id, async (error, result) => {
      if (result) {
        res.send(JSON.parse(result));
      } else {
        let results = {};

        const { rows } = await db.query(`SELECT *
                                         FROM projects 
                                         WHERE id = ${id}`);
        Object.keys(rows[0]).forEach((key) => {
          results[camel(key)] = rows[0][key];
        });

        const toAppend1 = await db.query(`SELECT first_name AS "firstName", last_name AS "lastName", avatar_url AS "avatarUrl"
                                         FROM users
                                         WHERE id = ${results.creatorId}`);
        results.firstName = toAppend1.rows[0].firstName;
        results.lastName = toAppend1.rows[0].lastName;
        results.avatarUrl = toAppend1.rows[0].avatarUrl;

        const toAppend2 = await db.query(`SELECT count(*) AS "projectsCreatedCount"
                                          FROM projects
                                          WHERE id = ${results.creatorId}`);
        results.projectsCreatedCount = Number(toAppend2.rows[0].projectsCreatedCount);

        results = JSON.stringify(results);
        client.set(id, results);
        res.send(results);
      }
    });
  });

  app.listen(port, () => {
    console.log(`App now live at http://127.0.0.1:${port}`);
  });
}
