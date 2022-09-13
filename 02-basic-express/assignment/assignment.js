const path = require('path');

const express = require('express');

const app = express();

const indexRoutes = require('./routes/home');
const usersRoutes = require('./routes/user');

app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).send(
    `    <html>
      <body>
        <h1>Error boy!</h1>
      </body>
    </html>`
  );
});

app.listen(3000);
