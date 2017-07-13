const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
	index: (req, res) => {
		res.render('index');
	},
	createUser: (req, res) => {
		console.log(req.body.birthday);
		console.log("Type is", typeof(req.body.birthday));
		let user = new User(req.body);
		console.log(user);
		user.save( (err, savedUser) => {
			if(err){ 
				console.log(user.errors);
				res.render('index', {errors: user.errors});
			}else{
				res.redirect('/')
			}
		})
	}
}