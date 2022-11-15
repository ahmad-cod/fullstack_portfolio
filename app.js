const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 8000;

http.createServer((req, res) => {
    const query = url.parse(req.url, true);
    if (query.pathname == '/home'|| query.pathname == '/') query.pathname = '/index';

    const fileName = '.' + query.pathname + '.html';

    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404, Not found!');
        }
        res.writeHead(200, {'Content-Tupe': 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(port, () => console.log('Server start at port', port))