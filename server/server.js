const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('../db/index.js');
const cors = require('cors');
const app = express();
const saveProducts = require('../db/saveProducts');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/public')));

const port = 3001;

saveProducts();

app.get('/api/:id', (req, res) => {
  Product.find({projectID: req.params.id}).exec((err, docs) => {
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
