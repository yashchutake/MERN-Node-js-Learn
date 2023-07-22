const { Console } = require('console');
const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader('Content-Type', 'text/html')

   if (req.url == '/') {
    res.statusCode = 200;
    const data = fs.readFileSync('index.html');
    res.end(data.toString());

  }

  else if (req.url == '/yash') {
    res.statusCode = 200;
    res.end('<h1>YASH CHUTAKE</h1> <p>Welcome to my chaneel Guuuyss...</p>');
  }

  else if (req.url == '/about') {
    res.statusCode = 200;
    res.end('<h1>ABOUT YASH CHUTAKE</h1> <p>Welcome to ABOUT my chaneel Guuuyss...</p>');
  }


  else {
    // res.yash(); to crash
    res.statusCode = 404;
    res.end('<h1>NOT FOUND</h1> <p>Welcome to NOT FOUND...</p>');
  }


});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});