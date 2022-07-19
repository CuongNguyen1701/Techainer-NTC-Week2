const http = require('http');
let arg = [];
for (let i = 0; i < (process.argv.length - 2); i++) {
    arg[i] = process.argv[i+2];
}
for (let i = 0; i < arg.length; i++) {
    http.get(arg[i], response =>{
        response.setEncoding('utf8');
        let output = '';
        response.on('data', chunk => {
                output += chunk;
        })
        response.on('end', () =>{ 
            console.log(output);
        })
    }).on('error', err => {
        throw err;
    })
    
}