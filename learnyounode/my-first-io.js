const fs = require('fs');
let arg = process.argv;
let newlineNum = fs.readFileSync(arg[2]).toString().split('\n').length - 1;
console.log(newlineNum);