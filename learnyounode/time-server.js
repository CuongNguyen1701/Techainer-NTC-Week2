let arg = [];
for (let i = 0; i < (process.argv.length - 2); i++) {
    arg[i] = process.argv[i+2];
}
const net = require('net')
const server = net.createServer(socket => {
    let data = '';
    let date = new Date();
    function format(timeData, num){
        return ('0'.repeat(num - 1) + timeData).slice(-num);
    }
    data = `${format(date.getFullYear(),4)}-${format(date.getMonth()+1,2)}-${format(date.getDate(),2)} ${format(date.getHours(),2)}:${format(date.getMinutes(),2)}\n`;
    socket.end(data);
})
server.listen(arg[0]);
