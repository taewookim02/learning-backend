const express = require('express');

const router = express.Router();

const homeData = require('./home');

router.get('/users', (req, res, next) => {
  const usernameData = homeData.userList;
  res.render('users', {
    userList: usernameData,
    pageTitle: 'Users',
  });
});

exports.routes = router;
