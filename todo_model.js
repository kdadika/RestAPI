require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: 'todo_database',
  host: process.env.POSTGRESQL_HOST,
  port: 5432,
});

const getTodos = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM todos ORDER BY todo_id ASC', (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};
const createTodo = (body) => {
  return new Promise((resolve, reject) => {
    const { todo_id, description } = body;
    pool.query(
      'INSERT INTO todos (description) VALUES ($1, $2) RETURNING *',
      [todo_id, description],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new todo has been added added: ${results.rows[0]}`);
      }
    );
  });
};

const deleteTodo = () => {
  return new Promise((resolve, reject) => {
    const id = parseInt(request.params.id);
    pool.query(
      'DELETE FROM todos WHERE todo_id = $1',
      [todo_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Todo deleted with ID: ${id}`);
      }
    );
  });
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
};
