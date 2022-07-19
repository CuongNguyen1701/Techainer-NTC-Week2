const http = require('http');
let arg = [];
for (let i = 0; i < (process.argv.length - 2); i++) {
    arg[i] = process.argv[i+2];
}

http.get(arg[0], response =>{
    response.setEncoding('utf8');
    let output = '';
    let charNum = 0;
    response.on('data', chunk => {
            output += chunk;
    })
    response.on('end', () =>{ 
        charNum += output.length;
        console.log(charNum);
        console.log(output);
    })
}).on('error', err => {
    throw err;
})