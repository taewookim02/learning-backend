const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-type', 'text/html'); // Forgot to set header!
    res.write('<html>');
    res.write('<head><title>Welcome</title></head>');
    res.write(
      '<body><h1>Greetings!</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write(
      '<body><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li><li>User 5</li></ul></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    // Parse data
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username);
    });
    // Redirecting (FORGOT TO DO THESE)
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
});

server.listen(3000);

// req.on method was confusing as I haven't used those method before
