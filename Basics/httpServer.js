const {Console}=require('console');
const http = require('http');

const port=process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode=200;
  res.setHeader('Content-Type','text/html')
  res.end('<h1>YASH CHUTAKE</h1> <p>Welcome to my chaneel Guuuyss...</p>');
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});