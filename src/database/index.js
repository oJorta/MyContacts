const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'postgres',
  database: 'mycontacts',
});

client.connect();

async function query(sqlQuery, values) {
  const { rows } = await client.query(sqlQuery, values);

  return rows;
}

// client.query('SELECT * FROM contacts;').then((result) => console.log(result));

// query('SELECT * FROM contacts;').then((result) => console.log(result));

module.exports = { query };
