const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const userList = [];

router.get('/', (req, res, next) => {
  res.render('home', {
    pageTitle: 'Home',
  });
});

router.post('/username-form', (req, res, next) => {
  console.log(req.body);
  userList.push(req.body.username);
  res.redirect('/');
});

exports.routes = router;
exports.userList = userList;
