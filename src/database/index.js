const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'postgres',
  database: 'mycontacts',
});

client.connect();

async function query(sqlQuery) {
  const { rows } = await client.query(sqlQuery);

  return rows;
}

// client.query('SELECT * FROM contacts;').then((result) => console.log(result));

query('SELECT * FROM contacts;').then((result) => console.log(result));

module.exports = query;
