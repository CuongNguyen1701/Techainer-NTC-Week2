const http = require('http');
let arg = [];
for (let i = 0; i < (process.argv.length - 2); i++) {
    arg[i] = process.argv[i+2];
}
http.get(arg[0], response =>{
    response.setEncoding('utf8');

    response.on('data', chunk => {
        console.log(chunk);
     })
     response.on('end', () =>{

     })
}).on('error', err => {
    throw err;
})