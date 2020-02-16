var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var i = 0;
var round = 0;
var client = new net.Socket();
client.connect(PORT, HOST, function () {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('Aimer');
});

client.on('data', function (data) {
    console.log('DATA : ' + data)
    client.write('10');
    client.destroy();
});

// Add a 'close' event handler for the client socket
client.on('close', function () {
    console.log('Connection closed');
});
