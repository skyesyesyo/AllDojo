var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var session = require('express-session')

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
	secret: 'asuperlongsecretkey',
	resave: true,
	saveUninitialized: true
	})); 

app.use(express.static(__dirname + "/static"));
// console.log(__dirname);
app.set('views', __dirname + '/views')

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.send('What up everyone!')
})

app.get('/users', function(req, res){
	var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})

app.post('/users', function(req, res) {
	console.log(req.body.email);
	console.log(req.body.name);
	res.redirect('/users')
})

var port = 6789;

app.listen(port, function(){
	console.log("Listening on " + port);
})