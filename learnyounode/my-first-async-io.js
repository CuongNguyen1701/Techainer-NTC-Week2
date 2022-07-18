const fs = require('fs');
let arg = process.argv;
fs.readFile(arg[2], 'utf8' ,(err, data) => {
    if(err) throw err
    let result = data.split('\n').length - 1;
    console.log(result);
});