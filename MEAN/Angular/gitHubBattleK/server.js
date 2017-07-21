var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'github-battle-app', 'dist')));

// Following is setup for express to use bodyParser.
// Without this part it is not going to make req.body
// First one is to recieve url information and
// Second one is for json information
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));

mongoose.connect('mongodb://localhost/github_battle');

var UserSchema = mongoose.Schema({
	username: String,
	score: Number,
	imagePath: String
}, {timestamps: true});

mongoose.model('User', UserSchema);

var User = mongoose.model('User');


app.post('/api/players', function(req, res){
	// First find the user first
		// if we found user
		// else part is if we coudn't find user
	User.findOne({username: req.body.username}, function(err, foundUser){
		if(foundUser){
			console.log('found a user:', foundUser);
			foundUser.score = req.body.score;
			foundUser.imagePath =req.body.imagePath; 

			foundUser.save( function(err, updatedUser){
				if(err){
					console.log('something went wrong updating your user');
					res.json(err);
				}else{
					console.log('user updated!');
					res.json(updatedUser);
				}
			});

		}else{
			console.log('user not found, creating new user');
			var user = new User(req.body);
			user.save( function(err, createdUser){
				if(err){
					console.log('Something went wrong making your user.')
					res.json(err);
				}else{
					console.log('user created!');
					res.json(createdUser);
				}
			});
		}
	});
});

app.listen(6789, function(){
	console.log("Running on localhost:6789");
});