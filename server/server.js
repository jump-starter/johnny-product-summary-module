const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const cors = require('cors');

const app = express();
const seedMongo = require('../db/seedMongo');
const seedPostgres = require('../db/seedPostgres');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/public')));

const port = 3001;

// seedMongo();
seedPostgres();

app.get('/api/:id', (req, res) => {
  db.Product.find({ projectID: req.params.id }).exec((err, docs) => {
    if (err) {
      console.log('err: ', err);
      res.status(400).end();
    } else {
      res.status(200).json(docs);
    }
  });
});

app.listen(port, () => {
  console.log(`App now live at http://127.0.0.1:${port}`);
});
