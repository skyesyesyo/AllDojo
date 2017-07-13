var mongoose = require('mongoose');
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')

module.exports = {
	show: function(req, res){ 
		Post.find({}).populate('comments').exec(function(error, posts){
		if(error){
			console.log(error);
		}
		else{
			res.render('index', {posts: posts})
		}
	})},

	create_post: function(req,res){
		var post = new Post(req.body);
		post.save(function(err, data){
			if(err){
				res.render('index', {errors: post.errors})
			}
			else{
				res.redirect('/')
			}
		})
	},

	create_comment: function(req, res){
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
	}
}