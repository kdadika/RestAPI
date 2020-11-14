const express = require('express');
const app = express();
const todo_model = require('./todo_model');

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers'
  );
  next();
});
//ROUTES//

//get all todos

app.get('/', (req, res) => {
  todo_model
    .getTodos()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

//create a todo

app.post('/todos', (req, res) => {
  todo_model
    .createTodo(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

//delete a todo

app.delete('/todos/:id', (req, res) => {
  todo_model
    .deleteTodo(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(5000, () => {
  console.log('server is listening on PORT: 3000');
});
