const mongoose = require('mongoose');

const User = mongoose.model('User');

const bcrypt = require('bcryptjs');


module.exports = {
	// key: callback(req, res) {}
	// key = function name that we call in the routes.js file
	// value is the actually function
	index: (req, res) => {
		res.render('index');
	},

	create: (req, res) => {
		let userAboutToBeCreated = new User(req.body);

		// console.log("User before being saved", userAboutToBeCreated);

		// This is the part show errors
		userAboutToBeCreated.save((err, savedUser) => {
			if(err){
				let errors = [];
				for(let x in userAboutToBeCreated.errors){
					errors.push(userAboutToBeCreated.errors[x].message);
				}


				// console.log(userAboutToBeCreated.errors);
				res.json({errors: errors});

			}else{

				// console.log("User after being saved", savedUser);
				res.json(savedUser);
			}
		});

	},

	delete: (req, res) => {

	},

	login: (req, res) => {
		User.findOne({email: req.body.email}, (err, user) => {
			if(bcrypt.compareSync(req.body.password, user.password)){
				// LOG the User in
			}else{
				// Throw error message
			}
		});
	}
};