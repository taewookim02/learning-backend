const http = require('http');
const routes = require('./routes');
/////////////////////////////////////
// Harder way

const server = http.createServer(routes.handler);

server.listen(3000);
