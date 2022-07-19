const http = require('http');
const fs = require('fs');
const url = require('url');
let arg = [];
for (let i = 0; i < (process.argv.length - 2); i++) {
    arg[i] = process.argv[i+2];
}
var time = date => {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}
var unix = date =>{
    return {unixtime: date.getTime()}
}

var init = url => {
    if(url.pathname == '/api/parsetime') return time(new Date(url.query.iso));
    if(url.pathname == '/api/unixtime') return unix(new Date(url.query.iso));
}
const server = http.createServer((req,res) => {
    if(req.method != 'GET') return;
    purl = url.parse(req.url,true);
    res.end(JSON.stringify(init(purl))); 
})
server.listen(arg[0]);