const http = require('http');
const path = require('path');
const fs = require('fs');

const pagesLocation = path.resolve(__dirname, 'pages');

function getAbsolutePagePath(fileName) {
  return path.join(pagesLocation, fileName)
}

function streamFile(res, filePath) {
  const textStream = fs.createReadStream(filePath);

  textStream.on('error', () => {
    res.writeHead(301, { 'Location': '/error' });
    res.end();
  });

  textStream.on('ready', () => {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
  });

  textStream.pipe(res);
}

const routes = {
  '/': getAbsolutePagePath('index.html'),
  '/about-us': getAbsolutePagePath('about-us.html'),
  '/not-found': getAbsolutePagePath('not-found.html'),
  '/error': getAbsolutePagePath('error.html')
};

const server = http.createServer((req, res) => {
  const filePath = routes[req.url];
  if (!filePath) {
    res.writeHead(301, { 'Location': '/not-found' });
    res.end();
    return;
  }
  streamFile(res, filePath);
});

server.listen(8080, () => {
  console.log('Server is listening on :8080');
});
