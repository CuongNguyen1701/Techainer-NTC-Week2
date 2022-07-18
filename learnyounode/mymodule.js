const fs = require('fs');
module.exports = function (dir, extension, callback){
    let filtered = [];
    fs.readdir(dir, 'utf8' ,(err, list) => {
    if(err) return callback(err);
    list = list.filter(file => {
        return file.endsWith(`.${extension}`);
    });
    filtered = list;
    for (let i = 0; i < filtered.length; i++) {
        console.log(filtered[i]);
    }
    return callback(null,list);
    })

}