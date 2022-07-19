const http = require('http');
const fs = require('fs');
let arg = [];
for (let i = 0; i < (process.argv.length - 2); i++) {
    arg[i] = process.argv[i+2];
}
const server = http.createServer((req,res)=>{
 req.url().pipe(res.JSON.stringify());
})
server.listen(arg[0]);