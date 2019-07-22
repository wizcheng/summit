const http = require('http');
const url = require('url');
const fs = require('fs');

const port = process.argv[2] || 7005;
console.log(`Server will be started at port ${port}`);

http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url);
    console.log(`file path requested is ${typeof parsedUrl}`);
    console.log(`file path requested is ${parsedUrl.pathname}`);

    if (parsedUrl.pathname === '/_status') {
        fs.readFile('./_status', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(data)
        });
    } else {
        res.write('hello world');
        res.end();
    }
}).listen(port);
