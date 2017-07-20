const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
	index: (req, res) => {
		User.find({}, (err, users) => {
			if(err){
				return res.status(400).send("error getting users");
			}else{
				return res.json(users);
			}
		});
	},

	create: (req, res) => {
		let user = new User({name: req.body.name});
		user.save( (err, savedUser) => {
			if(err){
				res.status(400).send("Error saving user");
			}else{
				res.json(savedUser);
			}
		});
	},

	show: (req, res) => {
		User.findOne({name: req.params.name}, (err, user) => {
			if(err) return res.status(400).send("Problem getting user");
			else{
				return res.json(user);
			}
		});
	},

	destroy: (req, res) => {
		User.findOne({name: req.params.name}, (err, user) => {
			if(err) return res.status(400).send("Problem getting user");
			else{
				user.remove();
				res.redirect('/');
			}
		});
	}

};