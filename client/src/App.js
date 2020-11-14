import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState(false);
  useEffect(() => {
    getTodos();
  }, []);
  function getTodos() {
    fetch('/todos')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setTodos(data);
      });
  }
  function createTodos() {
    let todo = prompt('Enter new todo.');
    fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getTodos();
      });
  }
  function deleteTodos() {
    let id = prompt('Enter todo id');
    fetch(`/todos/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getTodos();
      });
  }
  return (
    <div>
      {todos ? todos : 'There is no todo data available'}
      <br />
      <button onClick={createTodos}>Add Todo</button>
      <br />
      <button onClick={deleteTodos}>Delete Todo</button>
    </div>
  );
}
export default App;
