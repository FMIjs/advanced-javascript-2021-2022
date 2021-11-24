const https = require("https");
const http = require('http');
const url = require("url");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url, true);

	if (parsedUrl.pathname == "/load") {
		const requestedUrl = parsedUrl.query["url"];
		if (typeof requestedUrl !== "string") {
			throw new Error("Invalid or empty url.");
		}

		const decodedUrl = decodeURIComponent(requestedUrl);

		https.get(decodedUrl, (externalResponse) => {
			externalResponse.pipe(res);
		});
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
