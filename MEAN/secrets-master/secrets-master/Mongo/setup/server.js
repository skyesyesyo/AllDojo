// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/setup_mongoose')

var UserSchema = new mongoose.Schema({
 name: String,
 age: Number,
 interests: []
})

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
	User.find({}, function(error, data){
		console.log(data);	
		if(error){
			console.log(error)
		}
		else{
			res.render('index', {users: data})
		}
	})
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    // res.render('index');
})
// Add User Request 
app.post('/user', function(req, res) {
    var user = new User(req.body)

    user.save(function(err, user){
    	if(err){
    		console.log(err);
    	}
    	else{
    		console.log("Success!")
    		console.log(user);
    		res.redirect('/')
    	}
    })
    // This is where we would add the user from req.body to the database.
    res.redirect('/');
})

app.listen(6789, function() {
    console.log("listening on port whatever");
})