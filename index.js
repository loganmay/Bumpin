var express = require('express')
var fs = require('fs')

var app = express();

app.get('/', function(req, res) {
	//res.writeHead(200, {'Content-Type': 'text/html'});
	var song = fs.createReadStream(__dirname + '/index.html');
	song.pipe(res)
	//res.sendFile(__dirname + '/index.html')
})

app.get('/assets/bloodflood.mp3', function(req, res) {
	//res.writeHead(200, {'Content-Type': 'text/html'});
	res.sendFile(__dirname + '/assets/bloodflood.mp3')
})


app.listen(3000, () => {console.log('listening')});