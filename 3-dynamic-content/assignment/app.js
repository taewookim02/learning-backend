const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const homeRouter = require('./router/home');
const usersRouter = require('./router/users');

app.use(homeRouter.routes);
app.use(usersRouter.routes);

app.listen(3000);
