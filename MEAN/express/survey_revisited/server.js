var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret: 'thisissecret'}));
app.use(express.static(__dirname + '/static'));

// it is /views not just view
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Routes
app.get('/', function(request, response){
	response.render('index');
});

app.post('/add', function(request, response){
	request.session.name = request.body.name;
	request.session.location = request.body.location;
	request.session.favorite_language = request.body.favorite_language;
	response.redirect('/success');
});

app.get('/success', function(request, response){
	data = {
		name: request.session.name,
		location: request.session.location,
		favorite_language: request.session.favorite_language
	};
	response.render('success', data);
});

var port = 6789;

var server = app.listen(port, function(){
	console.log("App is running on port ", port);
});