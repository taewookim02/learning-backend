const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
  // res.sendFile(path.join(__dirname, '..', 'views', 'home.html')); // This also works
});

module.exports = router;
