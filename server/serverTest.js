const http = require('http');

const fs = require('fs').promises;

http.createServer( async(req, res) => {
    try {
        const f = await fs.readFile('./server/fs_index.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(f);
    } catch (err) {
        console.error(err);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(err.message);
    }
    
}).listen(8080,() => {
    console.log('8080 포트에서 서버 연결중입니다...');
});