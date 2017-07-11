var express = require('express');

var app = express();

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
})

var server = app.listen(6789, function(){
	console.log("Listening on port 6789")
})

// console.log(require('socket.io'))
var io = require('socket.io').listen(server);

var count = 0;
io.sockets.on('connection', function(socket){

	socket.on('button_click', function(){
		console.log(count);
		count++;
		io.emit('increase', {number: count});
	})

	socket.on('reset', function(){
		count = 0;
		io.emit('increase', {number: count});
	})
})