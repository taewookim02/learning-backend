const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.send(`<html>
    <body>
      <form action="/admin/add-product" method="POST">
        <input type="text" name="title"><button type="submit">Add product</button>
      </form>
    </body>
  </html>`);
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body); // { title: 'book' }
  res.redirect('/');
});

module.exports = router;
