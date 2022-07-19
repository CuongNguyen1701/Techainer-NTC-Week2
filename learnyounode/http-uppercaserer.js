const http = require('http');
const map = require('through2-map')
let arg = [];
for (let i = 0; i < (process.argv.length - 2); i++) {
    arg[i] = process.argv[i+2];
}
const server = http.createServer((req,res)=>{
    if(req.method != 'POST') return;
    req.pipe(map((chunk)=>{
        return chunk.toString().toUpperCase();
    })).pipe(res);
})
server.listen(arg[0]);