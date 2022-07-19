const http = require('http');
const fs = require('fs');
let arg = [];
for (let i = 0; i < (process.argv.length - 2); i++) {
    arg[i] = process.argv[i+2];
}
const server = http.createServer((req,res)=>{
    let readStream = fs.createReadStream(arg[1]);
    readStream.on('open', () => {
    readStream.pipe(res);
    });

    readStream.on('error', function(err) {
    res.end(err);
    });
})
server.listen(arg[0]);