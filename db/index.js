const { Pool } = require('pg');


const pool = new Pool({
  user: 'zhujohnny',
  host: 'localhost',
  database: 'jumpstarter',
  password: 'null',
  port: 5432,
});

if (process.env.NODE_ENV === 'production') {
  pool.host = 'jumpstarter.csd5zcikdsxn.us-west-1.rds.amazonaws.com';
  pool.password = process.env.POSTGRES_PASSWORD;
}

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
