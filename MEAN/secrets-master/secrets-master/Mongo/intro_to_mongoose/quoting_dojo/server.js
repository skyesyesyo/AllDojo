var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongeese')

var QuoteSchema = new mongoose.Schema({
 name: {type: String, required:true, minlength: 5},
 quote: {type: String, required:true, maxlength:255 },
 likes: Number, 
}, {timestamps: true})

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
})

app.get('/quotes', function(req, res){
	// When using .sort() you need to run .exec() after
	Quote.find({}).sort({likes: 'descending'}).exec(function(errors, data){
		if(errors){
			console.log(errrors);
		}
		else{
			res.render('quotes', {quotes: data})
		}
	})
})

app.post('/quotes', function(req, res){
	var q = new Quote(req.body);
	q.save(function(errors, data){
		if(errors){
			res.render('index', {errors: q.errors})
		}else{
			res.redirect('/quotes')
		}
	})
})

app.post('/like/:id', function(req, res) {
	// The $inc function allows you to increment a number type field
	Quote.update({_id: req.params.id}, {$inc: {likes: 1} }, function(err){
		if(err){
			console.log(err);
		}
		res.redirect('/quotes')
	})
})

app.listen(6789)