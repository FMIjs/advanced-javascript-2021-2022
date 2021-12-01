const http = require('http');
const path = require('path');
const fs = require('fs');

const pagesDirectory = path.join(__dirname, 'pages');

const PORT = 8000;

const localJSONObject = {
    testProp: 'testPropValue'
};

const handleNotFound = (res) => {
    const notFoundFilePath = path.join(pagesDirectory, 'not-found.html');
    const readStream = fs.createReadStream(notFoundFilePath);
    readStream.on('ready', () => {
        res.writeHead(200, {'Content-Type': 'text/html'});
    });
    readStream.on('error', (err) => console.log(err));
    readStream.pipe(res);
};

const routes = {
    'notfound': handleNotFound
};

const server = http.createServer((req, res) => {
    const url = req.url;
    const urlExpectedExpr = /load\/:([0-9a-zA-Z-]*)/;
    const propValue = url.match(urlExpectedExpr);

    // const propValuePostReq = url.match(urlExprForPostRequest);

    console.log(propValue);
    // console.log(hostname);

    if (propValue === null || localJSONObject[propValue[1]] === undefined) {
        // res.writeHead(301, {'Location': 'notfound'});
        handleNotFound(res);
        return;
    }

    const returnValue = localJSONObject[propValue[1]];

    res.write(returnValue);
    res.end();
});

server.listen(PORT, () => { console.log(`Server is listening on ${PORT}...`) });