const fs = require('fs');
module.exports = async function (dir, extension, callback){
    let filtered = []
    const completed = await fs.readdir(dir, 'utf8' ,(err, list) => {
        if(err) return callback(err);
        filtered = list.filter(file => {
            return file.endsWith(`.${extension}`);
        });
        console.log(list);
        console.log(`filtered: ${filtered}`);
        callback(null,filtered);
    })
    // .then(()=>{
    // })
    console.log(`filtered: ${filtered}`);
    return filtered;
    


}