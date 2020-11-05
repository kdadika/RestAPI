const express = require('express');
const app = express();
const pool = require('./db');

app.listen(3000, () => {
  console.log('server is listening on PORT: 3000');
});
