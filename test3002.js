import http from 'http';
http.createServer((req,res)=>{res.end('Hello')}).listen(3002, '127.0.0.1', ()=>console.log('Server on 127.0.0.1:3002'));
setTimeout(()=>{}, 30000)