const http = require('http');
const https = require('https');


const app = http.createServer((req, res) => {
    const [service, search] = req.url.split('?');
    if (service == '/load') {
        const target = search.split('=')[1];

        const url = new URL(target);
    
        https.get(url, (dataRes) => {
            res.writeHead(200);
    
            dataRes.on('data', (chunk) => {
                res.write(chunk);
            });
            dataRes.on('end', () => {
                res.end();
            });
        });
    }
});

app.listen(3000);