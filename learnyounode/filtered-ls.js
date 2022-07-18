const fs = require('fs');
let arg = [];
for (let i = 0; i < (process.argv.length - 2); i++) {
    arg[i] = process.argv[i+2];
}
fs.readdir(arg[0], 'utf8' ,(err, list) => {
    if(err) throw err;
    let filtered = list.filter((file) => {
        return file.endsWith(`.${arg[1]}`);
    });
    for (let i = 0; i < filtered.length; i++) {
        console.log(filtered[i]);
    }
});