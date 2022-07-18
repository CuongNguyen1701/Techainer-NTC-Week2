const mymodule = require('./mymodule');
let arg = [];
for (let i = 0; i < (process.argv.length - 2); i++) {
    arg[i] = process.argv[i+2];
}
let filtered = [];
filtered = mymodule(arg[0],arg[1],(err,list) => {if(err) throw err; return list;});
for (let i = 0; i < filtered.length; i++) {
    console.log(filtered[i]);
}