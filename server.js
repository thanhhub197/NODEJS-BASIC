const http = require('http');

const server = http.createServer((req, res) => {
    console.log("rung request ...")
    res.setHeader('Conten-Type', 'text/html');
    res.write('Hello world');
    res.end();
})
server.listen(3000, 'localhost', () => {
    console.log('Node Js server is running on port 3000');
})