const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

// validation happen in model

const UserSchema = new mongoose.Schema({
	name: {
		type:String,
		required: [true, 'Please include your name']
	},
	email: {
		type:String,
		required: [true, "Please include your email"]
	},
	password: {
		type:String,
		required: true,
		minlength: 8,
		maxlength: 32,
		validate: {
			validator: function( value ) {
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
			},
			message: "Password failed validation, you must have at least 1 number, uppercase and special character"
		}
	},
	password_confirmation: {type:String}
}, {timestamps:true});

UserSchema.pre('save', function(next){
	if(this.password != this.password_confirmation){
		this.invalidate("password", "Password and Password Confirmation do not match");
		let err = new Error("Passwords don't match");
		next(err);
	}else{
		this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
		this.password_confirmation = '';
		next();
	}
});


mongoose.model('User', UserSchema);