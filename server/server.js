require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db');
const cors = require('cors');
// const seedMongo = require('../db/seedMongo');
// const seedPostgres = require('../db/seedPostgres');
// seedMongo();
// seedPostgres();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/public')));

const port = 3001;

app.get('/api/:id', async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query('SELECT * FROM projects WHERE id = $1', [id]);
  console.log(rows[0]);
  res.send(rows[0]);
});

app.listen(port, () => {
  console.log(`App now live at http://127.0.0.1:${port}`);
});
