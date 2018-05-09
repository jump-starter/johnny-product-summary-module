require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const camel = require('to-camel-case');
const db = require('../db');
// const seedMongo = require('../db/seedMongo');
// const seedPostgres = require('../db/seedPostgres');
// seedMongo();
// seedPostgres();

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/public')));

const port = 3001;

app.get('/api/:id', async (req, res) => {
  const results = {};

  const { id } = req.params;
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

  res.send(results);
});

app.listen(port, () => {
  console.log(`App now live at http://127.0.0.1:${port}`);
});
