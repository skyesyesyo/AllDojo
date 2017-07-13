var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongeese')

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
 name: {type: String, required:true, minlength: 4},
 post: {type: String, required:true, maxlength:255 },
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}], 
}, {timestamps: true})

var CommentSchema = new mongoose.Schema({
 name: {type: String, required:true, minlength: 4},
 comment: {type: String, required:true, maxlength:255 },
 _post: {type: Schema.Types.ObjectId, ref: 'Post'}, 
}, {timestamps: true})

mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post')

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment')

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	Post.find({}).populate('comments').exec(function(error, posts){
		if(error){
			console.log(error);
		}
		else{
			res.render('index', {posts: posts})
		}
	})
});

app.post('/post', function(req, res){
	var post = new Post(req.body);
	post.save(function(err, data){
		if(err){
			res.render('index', {errors: post.errors})
		}
		else{
			res.redirect('/')
		}
	})
});

app.post('/comment/:id', function(req, res){
	Post.findOne({_id: req.params.id}, function(error, post){
		if(error){
			console.log(error);
		}
		var comment = new Comment(req.body);
		comment._post = post._id
		console.log(post._id);
		comment.save(function(error, comment){
			if(error){
				console.log(error);
			}
			post.comments.push(comment);
			post.save(function(error){
				res.redirect('/')

			})
		})
	})
})

app.listen(6789, function(){
	console.log('App listening on 6789')
});