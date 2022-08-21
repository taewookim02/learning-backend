const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('Hi I am middleware /users');
  res.send("<p>This is for 'users'</p>");
});

app.use('/', (req, res, next) => {
  console.log('Hi I am middleware /');
  res.send("<p>This is for '/'</p>");
});

app.use((req, res, next) => {
  console.log('Hi I am middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('Hi I am middleware 2');
  res.send('<p>Dummy response</p>');
});

app.listen(3000);
