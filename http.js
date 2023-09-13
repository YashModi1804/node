const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('You are at the home page');
  } else if (req.url === '/about') {
    res.end('Now you are on the about page');
  } else {
    res.end(
    `<h1>Can not find the stuff you are looking for</h1>
    <br>
    </br>
    <p>Please redirect yourself to homepage</p>
    <a href="/">HELLO</a>`
    );


  }
});

const PORT = 5002;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
