var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;
var i = 0;
var r = 1;
var arr_name = []
var double = 0
var sum = 0
var begin = 0
var answer = Math.floor(Math.random() * 21);
answer = parseInt(answer)
net.createServer(function (server) {
    console.log('CONNECTED: ' + server.remoteAddress + ':' + server.remotePort);
    server.on('data', function (data) {
        console.log('R '+r)
        if ((r % 2) == 1) {
            console.log('DATA Student => ' + data);
            arr_name[i] = data.toString()
            console.log(arr_name)
            for (var x = 0; x < i; x++) {
                if (arr_name[x] === data.toString()) {
                    double = 3
                }
            }
            i++
            server.write('OK');
        }
        else {
            if (double == 3) {
                sum += parseInt(data)
            }
            else {
                begin += parseInt(data)
                sum += 0
            }
            console.log('Sum: ' + sum.toString())
            double = 0
        }
        r++
    });

    server.on('close', function (data) {
        console.log('CLOSED: ' + server.remoteAddress + ' ' + server.remotePort);
    });
    server.on('error', () => {
    })
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);