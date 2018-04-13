const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/public/assets')));

const port = 1337;

app.get('/main', (req, res) => {
  console.log(req, 'GET :: server')
  res.status(200).send().end();
});

app.listen(port, () => {
  console.log(`App now live at http://127.0.0.1:${port}`);
});
