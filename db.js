require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: 'todo_database',
  host: process.env.POSTGRESQL_HOST,
  port: 5432,
});

module.exports = pool;
