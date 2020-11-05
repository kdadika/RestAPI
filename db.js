const Pool = require('pg').Pool;

const pool = new Pool({
  user: POSTGRESQL_USER,
  password: POSTGRESQL_PASSWORD,
  database: 'todo_database',
  host: POSTGRESQL_HOST,
  port: 5432,
});

module.exports = pool;
